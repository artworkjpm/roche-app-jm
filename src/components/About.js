import React from "react";
import Rainbow from "./HOC/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>This is an example of a HIGH ORDER FUNCTION, just to change the color of About page text, hit refresh to change color</p>
    </div>
  );
};

//this is an example of a HIGH ORDER FUNCTION, just to change the color of About page text, hit refresh to change color
export default Rainbow(About);
