import React from "react";
import square from "./assets/square.svg";
import triangle from "./assets/triangle.svg";
import circle from "./assets/circle.svg";
import arrow from "./assets/Arrow.png";

function ErrorPage() {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div className="mainCard">
        <div className="error-card-header">
          <img src={circle} alt="" />
          <img src={triangle} alt="" />
          <img src={square} alt="" />
        </div>
        <div className="error-card-content">
          <h1 className="error-heading">
            <span style={{ color: "#F8CC06" }}>404</span>: IS THAT HEAVEN?
          </h1>
          <p className="error-text">
            Sorry, you took a wrong turn at the Pearly Gates. Looks like you're
            stuck with us mere mortals. Try finding the right path before the
            angels start gossiping.
          </p>
          <div className="home_back_button">
            HOME THIS <span style={{ color: "#F8CC06" }}>&nbsp;WAY </span>{" "}
            <img src={arrow} />
          </div>
        </div>
      </div>
      <div
        style={{
          border: "1px solid #808080",
          padding: "5px",
          fontSize: "1vw",
          width: "10vw",
          borderRadius: "5px",
          color: "#808080",
          textAlign: "center",
          position: "absolute",
          right: "2vw",
          bottom: "-15px",
        }}
      >
        Page Not Found
      </div>
    </div>
  );
}

export default ErrorPage;
