import React from "react";
import './FourIconBox.css'

export const FourIconBox = (props) => {
    const { Skill, Icon } = props
  return (
    <div>
      <div id="box">
        <br></br>
        <br></br>
        <br></br>
  <div id='boxIcon'>{Icon}</div>
        <br></br>
        <br></br>
        <h2>
          {Skill}
        </h2>
        <br></br>
        <br></br>
        <br></br>
      </div>
  </div>
  );
};
export default FourIconBox;
