export const add = (x, y) => {
  return x + y;
};

export const FindPractitionerID = (practID, typedID) => {
  if (practID === typedID) {
    return "Yes they match";
  } else {
    return "No match";
  }
};
