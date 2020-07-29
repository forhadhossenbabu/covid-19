import React, { Component } from "react";
import ReactDOM from "react-dom";

class Frame extends Component {
  componentDidMount() {
    let iframe = ReactDOM.findDOMNode(this.refs.iframe);
    iframe.addEventListener("load", this.props.onLoad);
  }

  render() {
    const iframeStyle = {
      width: "100%",
      height: "800px",
      border: "none",
    };

    return (
      <iframe
        ref="iframe"
        {...this.props}
        frameBorder={"0"}
        width={"100%"}
        height={"800px"}
        style={iframeStyle}
        title="title"
      />
    );
  }
}

export default Frame;
