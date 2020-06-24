import React, { useEffect, useState } from "react";
import Select from "@material-ui/core/Select";

const DropDownRole = () => {
  const [items] = React.useState([
    {
      label: "Luke Skywalker",
      value: "Luke Skywalker",
    },
    { label: "C-3PO", value: "C-3PO" },
    { label: "R2-D2", value: "R2-D2" },
  ]);
  return (
    <Select>
      {items.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
  );
};

export default DropDownRole;
