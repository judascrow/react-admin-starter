import React, { Fragment } from "react";

import TextField from "@material-ui/core/TextField";

const StepAddress = ({ formProps: { register }, data }) => {
  const { aaa } = data[0];

  return (
    <Fragment>
      <div className="col-lg-12 d-flex flex-column order-lg-2">
        <div className="row ">
          <div>
            <TextField
              autoFocus
              name="aaa"
              label="aaa"
              defaultValue={aaa}
              inputRef={register}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StepAddress;
