import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h1>There is an error</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
