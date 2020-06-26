import React, { useState, Fragment } from "react";

import TextField from "@material-ui/core/TextField";

const StepAddressData = (props) => {
  const { user, register, errors, data } = props;
  console.log("yyyyy" + data);
  const { idCard } = data;
  const [formData, setFormData] = useState({
    //idCard: "",
    govCard: "",
    cardExpire: "",
    prefixName: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    race: "",
    nation: "",
  });

  const {
    //idCard,
    govCard,
    cardExpire,
    prefixName,
    firstName,
    lastName,
    birthDate,
    race,
    nation,
  } = formData;

  return (
    <Fragment>
      <div className="col-lg-12 d-flex flex-column order-lg-2">
        <div className="row ">
          <div className="col-lg-4">
            <TextField
              fullWidth
              name="idCard"
              label="เลขบัตรประจำตัวประชาชน"
              margin="normal"
              defaultValue={idCard}
            />
          </div>
          <div className="col-lg-4">
            <TextField
              fullWidth
              name="govCard"
              label="เลขบัตรประจำตัวข้าราชการ"
              margin="normal"
            />
          </div>
          <div className="col-lg-4">
            <TextField
              fullWidth
              name="cardExpire"
              label="บัตรหมดอายุ"
              margin="normal"
            />
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-4">
            <TextField
              fullWidth
              name="prefixName"
              label="คำนำหน้าชื่อ"
              margin="normal"
            />
          </div>
          <div className="col-lg-4">
            <TextField
              fullWidth
              name="firstName"
              label="ชื่อ"
              margin="normal"
              defaultValue={firstName}
            />
          </div>
          <div className="col-lg-4">
            <TextField
              fullWidth
              name="lastName"
              label="นามสกุล"
              margin="normal"
              defaultValue={lastName}
            />
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-4">
            <TextField
              fullWidth
              type="date"
              name="birthDate"
              label="วันเดือนปีเกิด"
              margin="normal"
              defaultValue={birthDate}
            />
          </div>
          <div className="col-lg-4">
            <TextField
              fullWidth
              name="firstName"
              label="ชื่อ"
              margin="normal"
              defaultValue={firstName}
            />
          </div>
          <div className="col-lg-4">
            <TextField
              fullWidth
              name="lastName"
              label="นามสกุล"
              margin="normal"
              defaultValue={lastName}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.authUser,
  };
};

export default StepAddressData;
