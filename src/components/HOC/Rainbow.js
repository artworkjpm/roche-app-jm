import React from "react";

const Rainbow = WrappedComponent => {
  const colours = ["red", "pink", "orange", "blue", "green", "yellow", "black"];
  const randomColor = colours[Math.floor(Math.random() * colours.length)];
  const className = randomColor + "-text";

  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
