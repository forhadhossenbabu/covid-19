import React, { Fragment } from "react";
import Header from "../src/components/Header";
// import Navigation from "./components/Nav";
// import isURL from "./utils/isUrl";
import IFrame from "./components/iFrame";

class App extends React.Component {
  state = {
    iFrameURL: [
      {
        title: null,
        src:
          "https://idare.maps.arcgis.com/apps/Cascade/index.html?appid=7db57689adab43b7ba5211349739aeba&autoplay",
      },
    ],
    active: "Summary",
    cls: null,
  };

  handleIframeUrl = (url, active, cls) => {
    this.setState({
      iFrameURL: url,
      active,
      cls: cls,
    });
  };

  render() {
    const { iFrameURL, active, cls } = this.state;
    return (
      <div id="viewport">
        <div id="content">
          <Header updateURL={this.handleIframeUrl} active={active} cls={cls} />
          <Fragment>
            <IFrame url={iFrameURL} />
          </Fragment>
        </div>
      </div>
    );
  }
}

export default App;
