import React from "react";
import './FourIconBox.css'

export const FourIconBox = (props) => {
    const { skill, icon } = props
  return (
    <>
      <div id="box">
        <br></br>
        <br></br>
        <br></br>
  <div id='boxIcon'>{icon}</div>
        <br></br>
        <br></br>
        <h2>
          {skill}
        </h2>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
};
export default FourIconBox;
