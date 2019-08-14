import React from "react";

const Rainbow = WrappedComponent => {
  const colours = ["red", "blue", "black", "orange", "green", "brown", "grey", "purple", "pink"];
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
