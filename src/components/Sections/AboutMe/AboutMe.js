import React from "react";

import "./AboutMe.css";
import AbtImg from "../../../assets/about_me.png";
import SectionLayout from '../../UI/SectionLayout/SectionLayout'



const AboutMe = () => {
  return (
    <SectionLayout>
      <div className="AboutMe">
        <div className="row">
          <div className="col-sm-6 col-md-5">
            <img src={AbtImg} alt="Not Found" />
          </div>
          <div className="col-sm-6 col-md-7 p-3">
            <div className="AboutMe_Wrapper">
              <h1 id="head_text">About Me</h1>
              <p id="head_info">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <div className="table-responsive">
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row">Name:</th>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <th scope="row">Date of Birth : </th>
                      <td>January 1, 1992</td>
                    </tr>
                    <tr>
                      <th scope="row">Address : </th>
                      <td>San Francisco CA 97987 USA</td>
                    </tr>
                    <tr>
                      <th scope="row">Zip code : </th>
                      <td>1000</td>
                    </tr>
                    <tr>
                      <th scope="row">Email : </th>
                      <td>anuppatil95@gmail.com</td>
                    </tr>
                    <tr>
                      <th scope="row">Phone :</th>
                      <td>+91 - 9845698514</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <button className="downloadcv-btn btn btn-warning">
                DOWNLOAD CV
              </button>
            </div>
          </div>
        </div>
      </div>
      </SectionLayout>
  );
};

export default AboutMe;
