export interface IErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    info: object;
}