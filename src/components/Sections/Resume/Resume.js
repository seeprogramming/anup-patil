import React from "react";

import "./Resume.css";
import SectionHeader from "../../UI/SectionHeader/SectionHeader";
import SectionLayout from "../../UI/SectionLayout/SectionLayout";
const Resume = () => {
  const resumeData = [
    {
      id: 1,
      year: "2014 - 2016",
      degree: "Master Degree of Design",
      place: "CAMBRIDGE UNIVERSITY",
      info:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      id: 2,
      year: "2014 - 2016",
      degree: "Master Degree of Design",
      place: "CAMBRIDGE UNIVERSITY",
      info:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      id: 3,
      year: "2014 - 2016",
      degree: "Master Degree of Design",
      place: "CAMBRIDGE UNIVERSITY",
      info:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      id: 4,
      year: "2014 - 2016",
      degree: "Master Degree of Design",
      place: "CAMBRIDGE UNIVERSITY",
      info:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
  ];

  return (
    <SectionLayout>
      <div className="resume-wrapper">
        <SectionHeader titleone="Resume" titletwo="Resume" />
        <div className="section-info">
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
        <div className="section-details">
          <div className="row">
            {resumeData.map((data, key) => {
              return (
                <div className=" col-md-6" key={key}>
                  <div className="custom-card">
                    <h6 className="year">{data.year}</h6>
                    <p className="degree">{data.degree}</p>
                    <p className="place">{data.place}</p>
                    <p className="degree_info">{data.info}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Resume;
