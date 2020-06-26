import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import TextField from "@material-ui/core/TextField";

const StepPersonalData = (props, { data }) => {
  const { user, register, errors } = props;
  console.log("xxxxx" + data);
  //   const { idCard } = data;
  const [formData, setFormData] = useState({
    //idCard: "",
    govCard: "",
    cardExpire: "",
    prefixName: "",
    firstName: user ? user.firstName : "",
    lastName: user ? user.lastName : "",
    birthDate: user && user.birthDate ? user.birthDate : "1990-04-01",
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

export default connect(mapStateToProps, {})(StepPersonalData);
