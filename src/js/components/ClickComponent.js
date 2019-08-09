import React from "react";

export default function ClickComponent() {
  let [title, setTitle] = React.useState();
  const [show, setShow] = React.useState(false);

  function toggleText() {
    let text = "yeah yeah yeah";
    setShow(show => !show);
    setTitle((title = text));
  }

  return (
    <>
      <button onClick={toggleText}>Click me</button>
      {show ? <div>{title}</div> : ""}
    </>
  );
}
