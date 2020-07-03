import React, { Fragment } from "react";
import { Controller } from "react-hook-form";
import Typography from "@material-ui/core/Typography";
import AlertText from "app/components/AlertText";
import TextFieldCT from "app/components/TextFieldCT";
import IntlMessages from "util/IntlMessages";
import ProvinceSelectOptions from "app/routes/Address/ProvinceSelectOptions";
import DistrictSelectOptions from "app/routes/Address/DistrictSelectOptions";
import SubDistrictSelectOptions from "app/routes/Address/SubDistrictSelectOptions";

const StepWork = ({
  formProps: { register, errors, control, watch },
  data,
}) => {
  const {
    workOccupation,
    workPosition,
    workPlaces,
    workRoad,
    workSubDistrict,
    workDistrict,
    workProvince,
    workZipcode,
    workTel,
    workFax,
    workEmail,
    bossFirstName,
    bossLastName,
    bossNo,
    bossMoo,
    bossSoi,
    bossRoad,
    bossSubDistrict,
    bossDistrict,
    bossProvince,
    bossZipcode,
    bossTel,
    bossFax,
    bossEmail,
    workExperience,
  } = data[0];

  const watchWorkProvince = watch("workProvince");
  const watchWorkDistrict = watch("workDistrict");
  const watchBossProvince = watch("bossProvince");
  const watchBossDistrict = watch("bossDistrict");

  return (
    <Fragment>
      <div className="col-lg-12 d-flex flex-column order-lg-2">
        <div className="row">
          <div className="col-lg-4" style={{ marginTop: "20px" }}>
            <Typography variant="h6">ข้อมูลการทำงาน</Typography>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-6">
            <TextFieldCT
              autoFocus
              name="workOccupation"
              label="อาชีพ"
              defaultValue={workOccupation}
              error={!!errors.workOccupation}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.workOccupation &&
                errors.workOccupation.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-6">
            <TextFieldCT
              name="workPosition"
              label="ตำแหน่ง"
              defaultValue={workPosition}
              error={!!errors.workPosition}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.workPosition &&
                errors.workPosition.type === "required" && (
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
              name="workPlaces"
              label="สถานที่ทำงาน"
              defaultValue={workPlaces}
              error={!!errors.workPlaces}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.workPlaces &&
                errors.workPlaces.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-6">
            <TextFieldCT
              name="workRoad"
              label="ถนน"
              defaultValue={workRoad}
              error={!!errors.workRoad}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.workRoad &&
                errors.workRoad.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3" style={{ marginTop: "12px" }}>
            <Controller
              fullWidth
              as={ProvinceSelectOptions}
              control={control}
              reactSelectID={"workProvince"}
              name={"workProvince"}
              labelName="จังหวัด"
              margin="normal"
              defaultValue={workProvince}
              onChange={([selected]) => {
                return selected?.value;
              }}
              error={!!errors.workProvince}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.workProvince &&
                errors.workProvince.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3" style={{ marginTop: "12px" }}>
            <Controller
              fullWidth
              as={DistrictSelectOptions}
              control={control}
              reactSelectID={"workDistrict"}
              name={"workDistrict"}
              labelName="อำเภอ"
              margin="normal"
              defaultValue={workDistrict}
              onChange={([selected]) => {
                return selected?.value;
              }}
              provinceID={watchWorkProvince ? watchWorkProvince : workProvince}
            />
          </div>
          <div className="col-lg-3" style={{ marginTop: "12px" }}>
            <Controller
              fullWidth
              as={SubDistrictSelectOptions}
              control={control}
              reactSelectID={"workSubDistrict"}
              name={"workSubDistrict"}
              labelName="ตำบล"
              margin="normal"
              defaultValue={workSubDistrict}
              onChange={([selected]) => {
                return selected?.value;
              }}
              provinceID={watchWorkProvince ? watchWorkProvince : workProvince}
              districtID={watchWorkDistrict ? watchWorkDistrict : workDistrict}
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="workZipcode"
              label="รหัสไปรษณีย์"
              defaultValue={workZipcode}
              error={!!errors.workZipcode}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.workZipcode &&
                errors.workZipcode.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <TextFieldCT
              name="workTel"
              label="หมายเลขโทรศัพท์"
              defaultValue={workTel}
              error={!!errors.workTel}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.workTel &&
                errors.workTel.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="workFax"
              label="โทรสาร"
              defaultValue={workFax}
              error={!!errors.workFax}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.workFax &&
                errors.workFax.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="workEmail"
              label="อีเมล์"
              defaultValue={workEmail}
              error={!!errors.workEmail}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.workEmail &&
                errors.workEmail.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4" style={{ marginTop: "20px" }}>
            <Typography variant="h6">ข้อมูลหัวหน้า/ผู้บังคับบัญชา</Typography>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-6">
            <TextFieldCT
              name="bossFirstName"
              label="ชื่อ"
              defaultValue={bossFirstName}
              error={!!errors.bossFirstName}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.bossFirstName &&
                errors.bossFirstName.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-6">
            <TextFieldCT
              name="bossLastName"
              label="นามสกุล"
              defaultValue={bossLastName}
              error={!!errors.bossLastName}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.bossLastName &&
                errors.bossLastName.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-3">
            <TextFieldCT
              name="bossNo"
              label="บ้านเลขที่"
              defaultValue={bossNo}
              error={!!errors.bossNo}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.bossNo &&
                errors.bossNo.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="bossMoo"
              label="หมู่"
              defaultValue={bossMoo}
              error={!!errors.bossMoo}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.bossMoo &&
                errors.bossMoo.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="bossSoi"
              label="ตรอก/ซอย"
              defaultValue={bossSoi}
              error={!!errors.bossSoi}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.bossSoi &&
                errors.bossSoi.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="bossRoad"
              label="ถนน"
              defaultValue={bossRoad}
              error={!!errors.bossRoad}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.bossRoad &&
                errors.bossRoad.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3" style={{ marginTop: "12px" }}>
            <Controller
              fullWidth
              as={ProvinceSelectOptions}
              control={control}
              reactSelectID={"bossProvince"}
              name={"bossProvince"}
              labelName="จังหวัด"
              margin="normal"
              defaultValue={bossProvince}
              onChange={([selected]) => {
                return selected?.value;
              }}
              error={!!errors.bossProvince}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.bossProvince &&
                errors.bossProvince.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3" style={{ marginTop: "12px" }}>
            <Controller
              fullWidth
              as={DistrictSelectOptions}
              control={control}
              reactSelectID={"bossDistrict"}
              name={"bossDistrict"}
              labelName="อำเภอ"
              margin="normal"
              defaultValue={bossDistrict}
              onChange={([selected]) => {
                return selected?.value;
              }}
              provinceID={watchBossProvince ? watchBossProvince : bossProvince}
            />
          </div>
          <div className="col-lg-3" style={{ marginTop: "12px" }}>
            <Controller
              fullWidth
              as={SubDistrictSelectOptions}
              control={control}
              reactSelectID={"bossSubDistrict"}
              name={"bossSubDistrict"}
              labelName="ตำบล"
              margin="normal"
              defaultValue={bossSubDistrict}
              onChange={([selected]) => {
                return selected?.value;
              }}
              provinceID={watchBossProvince ? watchBossProvince : bossProvince}
              districtID={watchBossDistrict ? watchBossDistrict : bossDistrict}
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="bossZipcode"
              label="รหัสไปรษณีย์"
              defaultValue={bossZipcode}
              error={!!errors.bossZipcode}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.bossZipcode &&
                errors.bossZipcode.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <TextFieldCT
              name="bossTel"
              label="หมายเลขโทรศัพท์"
              defaultValue={bossTel}
              error={!!errors.bossTel}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.bossTel &&
                errors.bossTel.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="bossFax"
              label="โทรสาร"
              defaultValue={bossFax}
              error={!!errors.bossFax}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.bossFax &&
                errors.bossFax.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="bossEmail"
              label="อีเมล์"
              defaultValue={bossEmail}
              error={!!errors.bossEmail}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.bossEmail &&
                errors.bossEmail.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12" style={{ marginTop: "20px" }}>
            <Typography variant="h6">ประวัติการทำงาน</Typography>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <TextFieldCT
              multiline
              rows={5}
              variant="outlined"
              name="workExperience"
              label="ประวัติการทำงาน/สถานที่ทำงาน/หนัวหน้าหรือผู้บังคับบัญชา/วันเดือนปี/เหตุผลที่ออก"
              defaultValue={workExperience}
              error={!!errors.workExperience}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.workExperience &&
                errors.workExperience.type === "required" && (
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

export default StepWork;
