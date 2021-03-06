import React from "react";
import "./Button.scss";

const Button = (props) => (
  <button
    onClick={props.onClick}
    type={props.type}
    className={[
      props.className,
      `button button${
        props.disabled !== undefined ? "_disabled_" + props.disabled : ""
      }`,
    ].join(" ")}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default Button;
