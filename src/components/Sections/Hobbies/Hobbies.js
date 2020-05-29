import React from "react";

import "./Hobbies.css";
import SectionLayout from "../../UI/SectionLayout/SectionLayout";
import SectionHeader from "../../UI/SectionHeader/SectionHeader";

const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      hobby: "Writing",
      icon: "fas fa-pen-nib",
    },
    {
      id: 2,
      hobby: "Photography",
      icon: "fas fa-camera-retro",
    },
    {
      id: 3,
      hobby: "Farming",
      icon: "fas fa-tractor",
    },
    {
      id: 4,
      hobby: "Blogging",
      icon: "fas fa-blog",
    },
  ];

  return (
    <SectionLayout>
      <SectionHeader titleone="Hobbies" titletwo="Hobbies" />
      <div className="section-info">
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>
      <div className="hobbies-wrap">
        <div className="row">
          {hobbies.map((hobby, key) => {
            return (
              <div className="col-6 col-md-3">
                <div className="hobby">
                  <div className="image">
                    <span>
                      <i class={hobby.icon}></i>
                    </span>
                  </div>
                  <div className="hobby_title">
                    <h6>{hobby.hobby}</h6>
                  </div>
                </div>
              </div>
                );
          })}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Hobbies;
