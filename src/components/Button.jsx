import React from "react";

export default function Button(props) {
  let { action, title } = props;
  return <button onClick={action}>{title}</button>;
  // return <button onClick={props.action}>{props.title}</button>;
}
