export interface IThreadPointsInline {
    points: number;
    threadId?: string;
    threadItemId?: string;
    allowUpdatePoints?: boolean;
    refreshThread?: () => void;
}