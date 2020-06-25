import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const AlertText = (props) => {
  const { children } = props;
  return (
    <span>
      <ErrorOutlineIcon fontSize="small" /> {children}
    </span>
  );
};

export default AlertText;
