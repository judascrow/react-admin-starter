import React, { Fragment } from "react";

import TextField from "@material-ui/core/TextField";

const StepAddress = (props) => {
  const { data } = props;
  const { aaaa } = data[0];

  return (
    <Fragment>
      <div className="col-lg-12 d-flex flex-column order-lg-2">
        <div className="row ">
          <div className="col-lg-4">
            <TextField
              fullWidth
              name="aaaa"
              label="aaaa"
              margin="normal"
              defaultValue={aaaa}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StepAddress;
