import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // typically this would log the error to TrackJS or NewRelic or something similar
    console.error("ErrorBoundary component caught an error", error, info);
  }

  render() {
    console.log("render");
    if (this.state.hasError) {
      console.log("erroring");
      return (
        <h2>
          There was an error with this listing.{" "}
          <Link to="/">Click here to return to the home page</Link>
        </h2>
      );
    }
    console.log("really erroring");
    return this.props.children;
  }
}

export default ErrorBoundary;
