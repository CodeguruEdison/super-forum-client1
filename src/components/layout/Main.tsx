import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IMain } from '../../interfaces/IMenu'
import Category from '../../models/Category';
import { getThreadsByCategory } from '../../services/DataService';
import ThreadCard from '../main/ThreadCard';
import MainHeader from './MainHeader';

export const Main: FC<IMain> = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const [category, setCategory] = useState<Category | undefined>();
    const [threadCards, setThreadCards] = useState<JSX.Element[] | null>(null);
    useEffect(() => {
        (async () => {
            const threads = await getThreadsByCategory(categoryId);
            const cards = threads?.map((th) => {
                return <ThreadCard key={`thread-${th.id}`} thread={th} />;
            })
            if (!category) {
                setCategory(threads[0].category);
            }
            setThreadCards(cards);
        })();
    }, [categoryId])

    return (
        <main className="content">
            <MainHeader category={category}></MainHeader>
            <div>{threadCards}</div>
        </main>
    )
}
export default Main;
