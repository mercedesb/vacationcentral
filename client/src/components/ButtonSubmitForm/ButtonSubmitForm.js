import React from "react";
import "./ButtonSubmitForm.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const ButtonSubmitForm = props => (
  <span className="btn btn-primary btn-lg btn-submitform" {...props}>Submit
  </span>
);

export default ButtonSubmitForm;