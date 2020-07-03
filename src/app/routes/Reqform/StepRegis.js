import React, { Fragment } from "react";
// import { Controller } from "react-hook-form";
import Typography from "@material-ui/core/Typography";
import AlertText from "app/components/AlertText";
import TextFieldCT from "app/components/TextFieldCT";
import IntlMessages from "util/IntlMessages";

const StepRegis = ({
  formProps: { register, errors, control, watch },
  data,
}) => {
  const {
    regisWork,
    regisQualification,
    regisDocument,
    regisEver,
    regisEverYear,
    // regisEverPass,
    regisEverPassNo,
    // regisEverNopass,
    regisEverNopassDesc,
  } = data[0];

  return (
    <Fragment>
      <div className="col-lg-12 d-flex flex-column order-lg-2">
        <div className="row">
          <div className="col-lg-4" style={{ marginTop: "20px" }}>
            <Typography variant="h6">ข้อมูลการขอขึ้นทะเบียน</Typography>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-6">
            <TextFieldCT
              autoFocus
              name="regisWork"
              label="มีความประสงค์จะขอขึ้นทะเบียนเป็นผู้เชี่ยวชาญของศาลในสาขา"
              defaultValue={regisWork}
              error={!!errors.regisWork}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.regisWork &&
                errors.regisWork.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-6">
            <TextFieldCT
              name="regisQualification"
              label="โดยมีคุณวุฒิ"
              defaultValue={regisQualification}
              error={!!errors.regisQualification}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.regisQualification &&
                errors.regisQualification.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12" style={{ marginTop: "12px" }}>
            <TextFieldCT
              multiline
              rows={6}
              variant="outlined"
              name="regisDocument"
              label="และได้แสดงหลักฐานพร้อมผลงานประกอบคำขอขึ้นทะเบียนดังนี้"
              defaultValue={regisDocument}
              error={!!errors.regisDocument}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.regisDocument &&
                errors.regisDocument.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-6">
            <TextFieldCT
              name="regisEver"
              label="เคยขอขึ้นทะเบียนแล้วในสาขา"
              defaultValue={regisEver}
              error={!!errors.regisEver}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.regisEver &&
                errors.regisEver.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-6">
            <TextFieldCT
              name="regisEverYear"
              label="ปี พ.ศ."
              defaultValue={regisEverYear}
              error={!!errors.regisEverYear}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.regisEverYear &&
                errors.regisEverYear.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-6">
            <TextFieldCT
              name="regisEverPassNo"
              label="ได้รับขึ้นทะเบียนเลขที่"
              defaultValue={regisEverPassNo}
              error={!!errors.regisEverPassNo}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.regisEverPassNo &&
                errors.regisEverPassNo.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-6">
            <TextFieldCT
              name="regisEverNopassDesc"
              label="ไม่ได้รับขึ้นทะเบียนเนื่องจาก"
              defaultValue={regisEverNopassDesc}
              error={!!errors.regisEverNopassDesc}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.regisEverNopassDesc &&
                errors.regisEverNopassDesc.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StepRegis;
