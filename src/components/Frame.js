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
      overflow: "hidden",
    };

    return (
      <iframe
        ref="iframe"
        {...this.props}
        style={iframeStyle}
        title="title"
        sandbox="allow-same-origin allow-scripts allow-forms"
        marginHeight="1"
        marginWidth="1"
        name="cboxmain"
        frameBorder="0"
        allowTransparency="true"
        scrolling="no"
      />
    );
  }
}

export default Frame;
