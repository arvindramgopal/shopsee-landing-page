import React from "react";
import "./style.css";

export default function Button(props) {
  return (
    <a class="btn10">
      <span>{props.name}</span>
      <div class="transition"></div>
    </a>
  );
}
