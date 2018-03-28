import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ margin: "0 auto", marginBottom: 10 }} className="btn btn-success">
    {props.children}
  </button>;
