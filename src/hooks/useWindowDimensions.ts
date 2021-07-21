import { useEffect, useState } from 'react';
import IWindowDimension from '../interfaces/IWindowDimension';

export const useWindowDimensions = (): IWindowDimension => {
    const [dimension, setDimension] = useState<IWindowDimension>({ height: 0, width: 0 });

    const handleResize = () => {
        setDimension({
            height: window.innerHeight,
            width: window.innerWidth
        });
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return dimension;
}