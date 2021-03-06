import React from 'react'
import IErrorBoundaryProps from '../../interfaces/IErrorBoundaryProps';
import { IErrorBoundaryState } from '../../interfaces/IErrorBoundaryState';
import "./ErrorBoundary.css";

class ErrorBoundary extends React.Component<
    IErrorBoundaryProps,
    IErrorBoundaryState
> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: new Error(),
            info: { componentStack: "" },
        };
    }

    static getDerivedStateFromError = (error: Error) => {
        return { hasError: true };
    };

    componentDidCatch(error: Error | null, info: object) {
        console.log("error", error);
        this.setState({ hasError: true, error, info });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-container">
                    <h2 style={{ padding: "2em" }}>
                        Something has gone wrong. Please reload your screen.
                    </h2>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;