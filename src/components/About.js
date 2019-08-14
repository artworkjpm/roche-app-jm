import React from "react";
import Rainbow from "./HOC/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo iusto tenetur distinctio commodi velit? Architecto hic dolores nobis, tempore natus ipsa saepe corrupti porro quas suscipit alias velit incidunt sunt.</p>
    </div>
  );
};

export default Rainbow(About);
