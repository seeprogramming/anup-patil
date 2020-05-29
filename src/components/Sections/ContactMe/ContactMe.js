import React from "react";

import "./ContactMe.css";
import SectionLayout from "../../UI/SectionLayout/SectionLayout";
import SectionHeader from "../../UI/SectionHeader/SectionHeader";
import TestImage from "../../../assets/form_section.png";

const ContactMe = () => {
  const address = [
    {
      id: 1,
      title: "ADDRESS",
      info: "198 West 21th Street, Suite 721 New York NY 10016",
      icon: "fas fa-map-marker",
    },
    {
      id: 2,
      title: "CONTACT NUMBER",
      info: "+91 - 9564785105",
      icon: "fas fa-phone-alt",
    },
    {
      id: 3,
      title: "EMAIL ADDRESS",
      info: "anuppatil95@gmail.com",
      icon: "fas fa-at",
    },
  ];

  return (
    <SectionLayout>
      <SectionHeader titleone="Connect" titletwo="Connect" />
      <div className="section-info">
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>
      <div className="contactme_wrap">
        <div className="row">
          {address.map((adr, key) => {
            return (
              <div className="col-sm-6 col-md-4">
                <div className="single_contact">
                  <div className="icon">
                    <span>
                      <i className={adr.icon}></i>
                    </span>
                  </div>
                  <p id="address">{adr.title}</p>
                  <p>{adr.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="form_wrap">
        <div className="row">
          <div className="col-md-6">
            <div className="form_image">
              <img src={TestImage} alt="Not Found" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_inner_wrap">
              <form>
                <div className="form-group">
                  <label for="exampleInputName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail"
                    aria-describedby="emailHelp"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    I'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label for="exampleSubject">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleSubject"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-warning">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="social_connect">
          <ul>
              <li> <span><i class="fab fa-instagram"></i></span> </li>
              <li> <span> <i class="fab fa-facebook-square"></i></span> </li>
              <li> <span>  <i class="fab fa-linkedin"></i></span> </li>
              <li> <span> <i class="fab fa-twitter-square"></i></span> </li>
          </ul>
      </div>
    </SectionLayout>
  );
};

export default ContactMe;
