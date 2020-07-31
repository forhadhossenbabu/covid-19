import React from "react";

let callCenterDataInsights = [
  {
    title: "333 Callers",
    src:
      "https://idare.maps.arcgis.com/apps/opsdashboard/index.html#/21a67c9552b84337bc5ff3d7055a5c4f",
  },
  {
    title: "16263 callers",
    src:
      "https://idare.maps.arcgis.com/apps/opsdashboard/index.html#/0c9652cd502e4e41bd770686e666d9ed",
  },

  {
    title: "Community Developed Applications Callers",
    src:
      "https://idare.maps.arcgis.com/apps/opsdashboard/index.html#/e46cbee4e2bb4ffab75b8f335ed9eb73",
  },
  {
    title: "Human Verified Callers Insight",
    src:
      "https://idare.maps.arcgis.com/apps/opsdashboard/index.html#/2677c8ad88d64b5b8ace05230cb48ddc",
  },
  {
    title: "Uber Doctor Verified",
    src:
      "https://idare.maps.arcgis.com/apps/opsdashboard/index.html#/230710c7cdb54fc4b2cc1a1fbf782153",
  },
  {
    title: "Web App and Mobile App Callers",
    src:
      "https://idare.maps.arcgis.com/apps/opsdashboard/index.html#/bb6ef50fe5bd4b3abfcea19f4c11e7ae",
  },
];

const Header = ({ updateURL, active, cls }) => (
  <div className={active === "Health" ? `header padding__bottom` : `header`}>
    <div className="a21__logo">
      <img src={require("./icons/a2i.png")} alt="a2i" height="50px" />
      <img
        src="https://lxfolsom.files.wordpress.com/2013/01/unicef-logo.png"
        alt="unicef"
        height="50px"
        style={{ padding: "2px" }}
      />
    </div>
    <div className="title">
      <h3>
        Covid-19 Impact & Recovery <br /> Management System
      </h3>
    </div>
    <div className="tripple__buttons">
      <div
        className="button_3d"
        onClick={() =>
          updateURL(
            [
              {
                title: null,
                src:
                  "https://idare.maps.arcgis.com/apps/Cascade/index.html?appid=7db57689adab43b7ba5211349739aeba",
              },
            ],
            "Summary"
          )
        }
      >
        <img alt="Summary" src={require("./icons/corona.png")} height="40px" />{" "}
        <br />
        <p className={active === "Summary" ? "active" : null}>Summary</p>
      </div>
      <div className={active === "Health" ? "button_3d h" : "button_3d"}>
        <img
          alt="Health"
          src={require("./icons/health.png")}
          height="40px"
          onClick={() =>
            updateURL(
              [
                {
                  title: null,
                  src:
                    "https://idare.maps.arcgis.com/apps/Cascade/index.html?appid=e6450fbf28f840b990c892c392166da5",
                },
              ],
              "Health",
              "General"
            )
          }
        />{" "}
        <br />
        <p
          className={active === "Health" ? "active tab_btn_top" : "tab_btn_top"}
          onClick={() =>
            updateURL(
              [
                {
                  title: null,
                  src:
                    "https://idare.maps.arcgis.com/apps/Cascade/index.html?appid=e6450fbf28f840b990c892c392166da5",
                },
              ],
              "Health",
              "General"
            )
          }
        >
          Health
        </p>
        {active === "Health" ? (
          <div className="tab_btns">
            <p
              className={cls === "General" ? "active tab_btn" : "tab_btn"}
              onClick={() =>
                updateURL(
                  [
                    {
                      title: null,
                      src:
                        "https://idare.maps.arcgis.com/apps/Cascade/index.html?appid=e6450fbf28f840b990c892c392166da5",
                    },
                  ],
                  "Health",
                  "General"
                )
              }
            >
              General
            </p>
            <div
              class={
                cls === "Call Center Data Insights"
                  ? "active dropdown"
                  : "dropdown"
              }
            >
              <button class="dropbtn">Call Center Data Insights</button>
              <div class="dropdown-content">
                {callCenterDataInsights.map((item) => (
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      updateURL(
                        [{ title: null, src: item.src }],
                        "Health",
                        "Call Center Data Insights"
                      );
                    }}
                    href="!#"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
            {/* <p
              className={
                cls === "Call Center Data Insights"
                  ? "active tab_btn"
                  : "tab_btn"
              }
              onClick={() =>
                updateURL(
                  [
                    {
                      title: "A",
                      src:
                        "https://idare.maps.arcgis.com/apps/opsdashboard/index.html#/0c9652cd502e4e41bd770686e666d9ed",
                    },
                    {
                      title: "A",
                      src:
                        "https://idare.maps.arcgis.com/apps/opsdashboard/index.html#/21a67c9552b84337bc5ff3d7055a5c4f",
                    },

                    {
                      title: "A",
                      src:
                        "https://idare.maps.arcgis.com/apps/opsdashboard/index.html#/e46cbee4e2bb4ffab75b8f335ed9eb73",
                    },
                    {
                      title: "A",
                      src:
                        "https://idare.maps.arcgis.com/apps/opsdashboard/index.html#/2677c8ad88d64b5b8ace05230cb48ddc",
                    },
                    {
                      title: "A",
                      src:
                        "https://idare.maps.arcgis.com/apps/opsdashboard/index.html#/230710c7cdb54fc4b2cc1a1fbf782153",
                    },
                    {
                      title: "A",
                      src:
                        "https://idare.maps.arcgis.com/apps/opsdashboard/index.html#/bb6ef50fe5bd4b3abfcea19f4c11e7ae",
                    },
                  ],
                  "Health",
                  "Call Center Data Insights"
                )
              }
            >
              Call Center Data Insights
            </p> */}
            <p
              className={
                cls === "Data Analytics" ? "active tab_btn" : "tab_btn"
              }
              onClick={() =>
                updateURL(
                  [
                    {
                      title: null,
                      src:
                        "https://moru.maps.arcgis.com/apps/opsdashboard/index.html#/0ad20c9de93d4df89270b2187bdc5858",
                    },
                    {
                      title: null,
                      src:
                        "https://moru.maps.arcgis.com/apps/opsdashboard/index.html#/c2d6cbc483eb43e4bcfeb944539fb7eb",
                    },
                    {
                      title: null,
                      src:
                        "https://idare.maps.arcgis.com/apps/opsdashboard/index.html#/99d68bce9ab441139aa0a67f6c8cef93",
                    },
                  ],
                  "Health",
                  "Data Analytics"
                )
              }
            >
              Data Analytics
            </p>
            <p
              className={cls === "Non-Covid" ? "active tab_btn" : "tab_btn"}
              onClick={() =>
                updateURL(
                  [
                    {
                      title: null,
                      src: "https://a2i.idare.io/dengue/dghs",
                    },
                  ],
                  "Health",
                  "Non-Covid"
                )
              }
            >
              Non-Covid
            </p>
          </div>
        ) : null}
      </div>
      <div
        className="button_3d"
        onClick={() =>
          updateURL(
            [
              {
                title: null,
                src:
                  "https://idare.maps.arcgis.com/apps/opsdashboard/index.html#/745b32b825f34713b420971de7651df2",
              },
            ],
            "Education"
          )
        }
      >
        <img alt="Education" src={require("./icons/edu.png")} height="40px" />{" "}
        <br />
        <p className={active === "Education" ? "active" : null}>Education</p>
      </div>
      <div
        className="button_3d"
        onClick={() =>
          updateURL(
            [
              {
                title: null,
                src: "https://arcg.is/1O5Hy10",
              },
            ],
            "economy"
          )
        }
      >
        <img alt="economy" src={require("./icons/eco.png")} height="40px" />{" "}
        <br />
        <p className={active === "economy" ? "active" : null}>Economy</p>
      </div>
      <div
        className="button_3d"
        onClick={() =>
          updateURL(
            [
              {
                title: null,
                src:
                  "https://idare.maps.arcgis.com/apps/Cascade/index.html?appid=587f7029581c47a78e9e3ebb0855946c",
              },
            ],
            "SSN"
          )
        }
      >
        <img
          alt="Social Safety Net"
          src={require("./icons/ssn.png")}
          height="40px"
        />{" "}
        <br />
        <p className={active === "SSN" ? "active" : null}>SSN</p>
      </div>

      <div
        className="button_3d"
        onClick={() =>
          updateURL(
            [{ title: null, src: "https://arcg.is/zOHqH" }],
            "Law & Order"
          )
        }
      >
        <img alt="Law & Order" src={require("./icons/law.png")} height="40px" />{" "}
        <br />
        <p className={active === "Law & Order" ? "active" : null}>
          Law & Order
        </p>
      </div>
    </div>

    <div className="ser_buttons">
      <div className="tripple__buttons">
        <div
          className="btns"
          onClick={() =>
            updateURL([
              {
                title: "No Poverty",
                src:
                  "https://idare.maps.arcgis.com/apps/Cascade/index.html?appid=555d4957c14f4d08b151e72fd51ede5a",
              },
            ])
          }
        >
          <img
            alt="No Poverty"
            src={require("./icons/bottoms/6.png")}
            height="48px"
          />
        </div>
        <div
          className="btns"
          onClick={() =>
            updateURL([
              {
                title: "Zero Hunger",
                src:
                  "https://idare.maps.arcgis.com/apps/Cascade/index.html?appid=7faeb6e37bc94ca09629071f117e8723",
              },
            ])
          }
        >
          <img
            alt="Zero Hunger"
            src={require("./icons/bottoms/7.png")}
            height="48px"
          />
        </div>
        <div
          className="btns"
          onClick={() =>
            updateURL([
              {
                title: "Good Health and Well Being",
                src:
                  "https://idare.maps.arcgis.com/apps/Cascade/index.html?appid=1bcc767347bf4bc4a0ac0d7afa9263ab",
              },
            ])
          }
        >
          <img
            alt="Good Health and Well Being"
            src={require("./icons/bottoms/8.png")}
            height="48px"
          />
        </div>
        <div
          className="btns"
          onClick={() =>
            updateURL([
              {
                title: "Quality Education",
                src:
                  "https://idare.maps.arcgis.com/apps/MapJournal/index.html?appid=4bd179f9963c498ea5a743d61d26c858",
              },
            ])
          }
        >
          <img
            alt="Gender Equality"
            src={require("./icons/bottoms/9.png")}
            height="48px"
          />
        </div>
        <div
          className="btns"
          onClick={() =>
            updateURL([
              {
                title: "Gender Equality",
                src:
                  "https://idare.maps.arcgis.com/apps/MapJournal/index.html?appid=1d774b51321345699634ccdd412b15c5",
              },
            ])
          }
        >
          <img
            alt="Gender Equality"
            src={require("./icons/bottoms/10.png")}
            height="48px"
          />
        </div>
        <div
          className="btns"
          onClick={() =>
            updateURL([
              {
                title: "Decent Work And Econimic Groth",
                src: null,
              },
            ])
          }
        >
          <img
            alt="Decent Work And Econimic Groth"
            src={require("./icons/bottoms/11.png")}
            height="48px"
          />
        </div>
        <div
          className="btns"
          onClick={() =>
            updateURL([
              {
                title: "Reduced IME Qualities",
                src: null,
              },
            ])
          }
        >
          <img
            alt="Reduced IME Qualities"
            src={require("./icons/bottoms/12.png")}
            height="48px"
          />
        </div>
        <div
          className="btns"
          onClick={() =>
            updateURL([
              {
                title: "Peace, Justice And Strong Institutions",
                src: null,
              },
            ])
          }
        >
          <img
            alt="economy"
            src={require("./icons/bottoms/13.png")}
            height="48px"
          />
        </div>
      </div>
    </div>
    {/* <div className="idare__logo">
      <img src={require("./icons/UNICEF_Logo.png")} alt="a2i" height="25px" />
    </div> */}
  </div>
);

export default Header;
