import React, { Fragment } from "react";
import Frame from "./Frame";
import _ from "underscore";

const IFrame = ({ url }) => {
  async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
  }
  const printIframe = (data) => {
    if (_.isArray(data)) {
      return data.map((iframeObj) => (
        <div key={iframeObj.src}>
          {iframeObj.title ? (
            <h3 className="iframe_header">{iframeObj.title}</h3>
          ) : null}
          {iframeObj.src ? <Frame src={iframeObj.src} /> : null}
        </div>
      ));
    }
    return <IFrame src={data} />;
  };

  return (
    <div>
      <Fragment>{printIframe(url)}</Fragment>
    </div>
  );
};

//     return (
//       <Fragment>
//         {url.map((iframeurl) => (
//           { _.isObject(iframeurl) ? <Fragment><Frame src={iframeurl} /></Fragment> : <Fragment><h2>Normal Iframe</h2></H2></Fragment>}

//         ))}
//       </Fragment>
//     );
//   }
//   if (isURL(url)) {
//     return <Frame src={url} />;
//   } else
//     return (
//       <div style={{ marginTop: "20px", textAlign: "center" }}>
//         <code>{url} Is Comming Soon</code>
//       </div>
//     );

// if (isUrl(url)) {
//   return (
//         <Frame src={url} />
//       )
// }

export default IFrame;
