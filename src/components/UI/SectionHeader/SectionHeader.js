import React from "react";

import "./SectionHeader.css";

const SectionHeader = (props) => {
  return (
    <div className="section-title">
      <h1>{props.titleone}</h1>
      <h2>{props.titletwo}</h2>
    </div>
  );
};

export default SectionHeader;
