import { ErrorFallback } from "@/widgets/ErrorFallback";
import { Component, ErrorInfo, ReactNode, Suspense } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Suspense fallback="">
          <ErrorFallback errorMessage={this.state.errorMessage} />
        </Suspense>
      );
    }

    return this.props.children;
  }
}
