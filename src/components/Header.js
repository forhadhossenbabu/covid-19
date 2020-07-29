import React from "react";

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
            "https://idare.maps.arcgis.com/apps/Cascade/index.html?appid=7db57689adab43b7ba5211349739aeba",
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
              "https://idare.maps.arcgis.com/apps/Cascade/index.html?appid=e6450fbf28f840b990c892c392166da5",
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
              "https://idare.maps.arcgis.com/apps/Cascade/index.html?appid=e6450fbf28f840b990c892c392166da5",
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
                  "https://idare.maps.arcgis.com/apps/Cascade/index.html?appid=e6450fbf28f840b990c892c392166da5",
                  "Health",
                  "General"
                )
              }
            >
              General
            </p>
            <p
              className={
                cls === "Covid Management" ? "active tab_btn" : "tab_btn"
              }
              onClick={() =>
                updateURL(
                  [
                    "https://moru.maps.arcgis.com/apps/opsdashboard/index.html#/3c97333998e74a57b944165c9a6369e0",
                    "https://mahmud-ayesha.shinyapps.io/COVID-BD/",
                    "http://dev.pipilika.com:9899/",
                  ],
                  "Health",
                  "Covid Management"
                )
              }
            >
              Covid Management
            </p>
            <p
              className={cls === "Non-Covid" ? "active tab_btn" : "tab_btn"}
              onClick={() =>
                updateURL(
                  "https://a2i.idare.io/dengue/dghs",
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
            "https://idare.maps.arcgis.com/apps/Cascade/index.html?appid=f74d6d4f81734fb2a4f36f8fb7ae250c",
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
        onClick={() => updateURL("https://arcg.is/1O5Hy10", "economy")}
      >
        <img alt="economy" src={require("./icons/eco.png")} height="40px" />{" "}
        <br />
        <p className={active === "economy" ? "active" : null}>Economy</p>
      </div>
      <div
        className="button_3d"
        onClick={() =>
          updateURL(
            "https://idare.maps.arcgis.com/apps/Cascade/index.html?appid=587f7029581c47a78e9e3ebb0855946c",
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
        onClick={() => updateURL("https://arcg.is/zOHqH", "Law & Order")}
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
            updateURL(
              "https://idare.maps.arcgis.com/apps/Cascade/index.html?appid=555d4957c14f4d08b151e72fd51ede5a"
            )
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
            updateURL(
              "https://idare.maps.arcgis.com/apps/Cascade/index.html?appid=7faeb6e37bc94ca09629071f117e8723"
            )
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
            updateURL(
              "https://idare.maps.arcgis.com/apps/Cascade/index.html?appid=1bcc767347bf4bc4a0ac0d7afa9263ab"
            )
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
            updateURL(
              "https://idare.maps.arcgis.com/apps/MapJournal/index.html?appid=4bd179f9963c498ea5a743d61d26c858"
            )
          }
        >
          <img
            alt="Quality Education"
            src={require("./icons/bottoms/9.png")}
            height="48px"
          />
        </div>
        <div
          className="btns"
          onClick={() =>
            updateURL(
              "https://idare.maps.arcgis.com/apps/MapJournal/index.html?appid=1d774b51321345699634ccdd412b15c5"
            )
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
          onClick={() => updateURL("Decent Work And Econimic Groth")}
        >
          <img
            alt="Decent Work And Econimic Groth"
            src={require("./icons/bottoms/11.png")}
            height="48px"
          />
        </div>
        <div
          className="btns"
          onClick={() => updateURL("Reduced IME Qualities")}
        >
          <img
            alt="Reduced IME Qualities"
            src={require("./icons/bottoms/12.png")}
            height="48px"
          />
        </div>
        <div
          className="btns"
          onClick={() => updateURL("Peace, Justice And Strong Institutions")}
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
