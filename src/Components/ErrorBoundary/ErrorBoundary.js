import React from "react";
import Error from "../Error";

class ErrorBoundary extends React.Component {
  state = {
    error: false,
    errorInfo: []
  };

  componentDidCatch(error, errorInfo) {
    this.setState(
      {
        error: true,
        errorInfo: [error, errorInfo]
      }
      );
  }

  render() {
    if (this.state.error) {
      return <Error error={this.state.errorInfo}/>;
    }

    return this.props.children;
  }
}


export default ErrorBoundary;