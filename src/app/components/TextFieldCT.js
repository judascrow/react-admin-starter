import React from "react";
import TextField from "@material-ui/core/TextField";

const TextFieldCT = (props) => {
  const { ...other } = props;

  return <TextField fullWidth margin="normal" {...other} />;
};

export default TextFieldCT;
