import React from "react";
import HomeTesting from "./HomeTesting";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col m6 offset-m3">
          <h4 className="center">About</h4> <p>I made this page to test some things out with React-Redux. If you click on the links below they will go to some new pages, using data from the Redux Store. You can also delete that data from the Store.</p>
        </div>
      </div>

      <HomeTesting />
    </div>
  );
};

//this is an example of a HIGH ORDER FUNCTION, just to change the color of About page text, hit refresh to change color
export default About;
