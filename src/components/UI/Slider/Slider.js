import React from "react";

import TestImage from "../../../assets/slider/red-moon.jpg";
import classes from "./Slider.css";

const Slider = () => {

  return (
    <React.Fragment>
      <div
        id="carouselExampleIndicators"
        className="Slider carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className=" carousel-inner" >
          <div className=" carousel-item active">
            <img src={TestImage} className="d-block w-100" alt="..." />
          </div>

       
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
