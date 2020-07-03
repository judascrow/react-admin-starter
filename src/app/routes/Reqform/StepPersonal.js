import React, { Fragment } from "react";
import moment from "moment";

import Typography from "@material-ui/core/Typography";
import AlertText from "app/components/AlertText";
import TextFieldCT from "app/components/TextFieldCT";
import IntlMessages from "util/IntlMessages";

const StepPersonal = ({ formProps: { register, errors }, data }) => {
  const {
    idCard,
    govCard,
    cardExpire,
    prefixName,
    firstName,
    lastName,
    birthDate,
    race,
    nation,
  } = data[0];

  return (
    <Fragment>
      <div className="col-lg-12 d-flex flex-column order-lg-2">
        <div className="row">
          <div className="col-lg-4" style={{ marginTop: "20px" }}>
            <Typography variant="h6">ข้อมูลส่วนตัว</Typography>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-4">
            <TextFieldCT
              autoFocus
              name="idCard"
              label="เลขบัตรประจำตัวประชาชน"
              defaultValue={idCard}
              error={!!errors.idCard}
              inputRef={register({
                //required: true,
                pattern: /[0-9]{13}/,
                minLength: 13,
                maxLength: 13,
              })}
              helperText={[
                errors.idCard && errors.idCard.type === "required" && (
                  <AlertText key={1}>
                    <IntlMessages id="input.required" />
                  </AlertText>
                ),
                errors.idCard && errors.idCard.type === "pattern" && (
                  <AlertText key={2}>
                    รูปแบบเลขบัตรประจำตัวประชาชนไม่ถูกต้อง
                  </AlertText>
                ),
                errors.idCard && errors.idCard.type === "minLength" && (
                  <AlertText key={3}>ต้องมี 13 ตัวอักษร</AlertText>
                ),
                errors.idCard && errors.idCard.type === "maxLength" && (
                  <AlertText key={4}>ต้องมี 13 ตัวอักษร</AlertText>
                ),
              ]}
            />
          </div>
          <div className="col-lg-4">
            <TextFieldCT
              autoComplete="close"
              name="govCard"
              label="เลขบัตรประจำตัวข้าราชการ"
              defaultValue={govCard}
              inputRef={register}
            />
          </div>
          <div className="col-lg-4">
            <TextFieldCT
              type="date"
              name="cardExpire"
              label="บัตรหมดอายุ"
              defaultValue={
                cardExpire ? moment(cardExpire).format("YYYY-MM-DD") : null
              }
              InputLabelProps={{
                shrink: true,
              }}
              error={!!errors.cardExpire}
              inputRef={register({
                //required: true,
              })}
              helperText={[
                errors.cardExpire && errors.cardExpire.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                ),
              ]}
            />
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-4">
            <TextFieldCT
              name="prefixName"
              label="คำนำหน้าชื่อ"
              defaultValue={prefixName}
              error={!!errors.prefixName}
              inputRef={register({
                //required: true,
              })}
              helperText={[
                errors.prefixName && errors.prefixName.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                ),
              ]}
            />
          </div>
          <div className="col-lg-4">
            <TextFieldCT
              name="firstName"
              label="ชื่อ"
              defaultValue={firstName}
              error={!!errors.firstName}
              inputRef={register({
                //required: true,
              })}
              helperText={[
                errors.firstName && errors.firstName.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                ),
              ]}
            />
          </div>
          <div className="col-lg-4">
            <TextFieldCT
              name="lastName"
              label="นามสกุล"
              defaultValue={lastName}
              error={!!errors.lastName}
              inputRef={register({
                //required: true,
              })}
              helperText={[
                errors.lastName && errors.lastName.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                ),
              ]}
            />
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-4">
            <TextFieldCT
              type="date"
              name="birthDate"
              label="วันเดือนปีเกิด"
              defaultValue={
                birthDate ? moment(birthDate).format("YYYY-MM-DD") : null
              }
              InputLabelProps={{
                shrink: true,
              }}
              error={!!errors.birthDate}
              inputRef={register({
                //required: true,
              })}
              helperText={[
                errors.birthDate && errors.birthDate.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                ),
              ]}
            />
          </div>
          <div className="col-lg-4">
            <TextFieldCT
              name="race"
              label="เชื้อชาติ"
              defaultValue={race}
              error={!!errors.race}
              inputRef={register({
                //required: true,
              })}
              helperText={[
                errors.race && errors.race.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                ),
              ]}
            />
          </div>
          <div className="col-lg-4">
            <TextFieldCT
              name="nation"
              label="สัญชาติ"
              defaultValue={nation}
              error={!!errors.nation}
              inputRef={register({
                //required: true,
              })}
              helperText={[
                errors.nation && errors.nation.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                ),
              ]}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StepPersonal;
