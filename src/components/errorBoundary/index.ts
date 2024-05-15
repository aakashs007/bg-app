import React from "react";

type ErrorBoundaryProps = {
  children?: React.ReactNode;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: unknown, info: unknown): void {
    // this.sendErrorLogs(error, { info });
  }

  render(): React.ReactNode {
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;