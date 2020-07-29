import React, { Fragment } from "react";
import isURL from "../utils/isUrl";
import Frame from "./Frame";

const IFrame = ({ url }) => {
  if (Array.isArray(url)) {
    return (
      <Fragment>
        {url.map((iframeurl) => (
          <Frame src={iframeurl} />
        ))}
      </Fragment>
    );
  }
  if (isURL(url)) {
    return <Frame src={url} />;
  } else
    return (
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <code>{url} Is Comming Soon</code>
      </div>
    );
};

export default IFrame;
