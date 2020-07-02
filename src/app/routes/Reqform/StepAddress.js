import React, { Fragment } from "react";
import { Controller } from "react-hook-form";
import Typography from "@material-ui/core/Typography";
import AlertText from "app/components/AlertText";
import TextFieldCT from "app/components/TextFieldCT";
import IntlMessages from "util/IntlMessages";
import ProvinceSelectOptions from "app/routes/Address/ProvinceSelectOptions";
import DistrictSelectOptions from "app/routes/Address/DistrictSelectOptions";
import SubDistrictSelectOptions from "app/routes/Address/SubDistrictSelectOptions";

const StepAddress = ({
  formProps: { register, errors, control, watch },
  data,
}) => {
  const {
    domicileNo,
    domicileMoo,
    domicileSoi,
    domicileRoad,
    domicileProvince,
    domicileDistrict,
    domicileSubDistrict,
    domicileZipcode,
    domicileTel,
    domicileFax,
    domicileEmail,
    addressNo,
    addressMoo,
    addressSoi,
    addressRoad,
    addressProvince,
    addressDistrict,
    addressSubDistrict,
    addressZipcode,
    addressTel,
    addressFax,
    addressEmail,
    contactNo,
    contactMoo,
    contactSoi,
    contactRoad,
    contactProvince,
    contactDistrict,
    contactSubDistrict,
    contactZipcode,
    contactTel,
    contactFax,
    contactEmail,
  } = data[0];

  const watchDomicileProvince = watch("domicileProvince");
  const watchDomicilDistrict = watch("domicileDistrict");
  const watchAddressProvince = watch("addressProvince");
  const watchAddressDistrict = watch("addressDistrict");
  const watchContactProvince = watch("contactProvince");
  const watchContactDistrict = watch("contactDistrict");

  return (
    <Fragment>
      <div className="col-lg-12 d-flex flex-column order-lg-2">
        <div className="row">
          <div className="col-lg-4" style={{ marginTop: "20px" }}>
            <Typography variant="h6">ภูมิลำเนา</Typography>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <TextFieldCT
              autoFocus
              name="domicileNo"
              label="บ้านเลขที่"
              defaultValue={domicileNo}
              error={!!errors.domicileNo}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.domicileNo &&
                errors.domicileNo.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="domicileMoo"
              label="หมู่"
              defaultValue={domicileMoo}
              error={!!errors.domicileMoo}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.domicileMoo &&
                errors.domicileMoo.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="domicileSoi"
              label="ตรอก/ซอย"
              defaultValue={domicileSoi}
              error={!!errors.domicileSoi}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.domicileSoi &&
                errors.domicileSoi.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="domicileRoad"
              label="ถนน"
              defaultValue={domicileRoad}
              error={!!errors.domicileRoad}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.domicileRoad &&
                errors.domicileRoad.type === "required" && (
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
              reactSelectID={"domicileProvince"}
              name={"domicileProvince"}
              labelName="จังหวัด"
              margin="normal"
              defaultValue={domicileProvince}
              onChange={([selected]) => {
                return selected.value;
              }}
              error={!!errors.domicileProvince}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.domicileProvince &&
                errors.domicileProvince.type === "required" && (
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
              reactSelectID={"domicileDistrict"}
              name={"domicileDistrict"}
              labelName="อำเภอ"
              margin="normal"
              defaultValue={domicileDistrict}
              onChange={([selected]) => {
                return selected.value;
              }}
              provinceID={
                watchDomicileProvince ? watchDomicileProvince : domicileProvince
              }
            />
          </div>
          <div className="col-lg-3" style={{ marginTop: "12px" }}>
            <Controller
              fullWidth
              as={SubDistrictSelectOptions}
              control={control}
              reactSelectID={"domicileSubDistrict"}
              name={"domicileSubDistrict"}
              labelName="ตำบล"
              margin="normal"
              defaultValue={domicileSubDistrict}
              onChange={([selected]) => {
                return selected.value;
              }}
              provinceID={
                watchDomicileProvince ? watchDomicileProvince : domicileProvince
              }
              districtID={
                watchDomicilDistrict ? watchDomicilDistrict : domicileDistrict
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="domicileZipcode"
              label="รหัสไปรษณีย์"
              defaultValue={domicileZipcode}
              error={!!errors.domicileZipcode}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.domicileZipcode &&
                errors.domicileZipcode.type === "required" && (
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
              name="domicileTel"
              label="หมายเลขโทรศัพท์"
              defaultValue={domicileTel}
              error={!!errors.domicileTel}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.domicileTel &&
                errors.domicileTel.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="domicileFax"
              label="โทรสาร"
              defaultValue={domicileFax}
              error={!!errors.domicileFax}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.domicileFax &&
                errors.domicileFax.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="domicileEmail"
              label="อีเมล์"
              defaultValue={domicileEmail}
              error={!!errors.domicileEmail}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.domicileEmail &&
                errors.domicileEmail.type === "required" && (
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
            <Typography variant="h6">ที่อยู๋ปัจจุบัน</Typography>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <TextFieldCT
              name="addressNo"
              label="บ้านเลขที่"
              defaultValue={addressNo}
              error={!!errors.addressNo}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.addressNo &&
                errors.addressNo.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="addressMoo"
              label="หมู่"
              defaultValue={addressMoo}
              error={!!errors.addressMoo}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.addressMoo &&
                errors.addressMoo.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="addressSoi"
              label="ตรอก/ซอย"
              defaultValue={addressSoi}
              error={!!errors.addressSoi}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.addressSoi &&
                errors.addressSoi.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="addressRoad"
              label="ถนน"
              defaultValue={addressRoad}
              error={!!errors.addressRoad}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.addressRoad &&
                errors.addressRoad.type === "required" && (
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
              reactSelectID={"addressProvince"}
              name={"addressProvince"}
              labelName="จังหวัด"
              margin="normal"
              defaultValue={addressProvince}
              onChange={([selected]) => {
                return selected.value;
              }}
              error={!!errors.addressProvince}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.addressProvince &&
                errors.addressProvince.type === "required" && (
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
              reactSelectID={"addressDistrict"}
              name={"addressDistrict"}
              labelName="อำเภอ"
              margin="normal"
              defaultValue={addressDistrict}
              onChange={([selected]) => {
                return selected.value;
              }}
              provinceID={
                watchAddressProvince ? watchAddressProvince : addressProvince
              }
            />
          </div>
          <div className="col-lg-3" style={{ marginTop: "12px" }}>
            <Controller
              fullWidth
              as={SubDistrictSelectOptions}
              control={control}
              reactSelectID={"addressSubDistrict"}
              name={"addressSubDistrict"}
              labelName="ตำบล"
              margin="normal"
              defaultValue={addressSubDistrict}
              onChange={([selected]) => {
                return selected.value;
              }}
              provinceID={
                watchAddressProvince ? watchAddressProvince : addressProvince
              }
              districtID={
                watchAddressDistrict ? watchAddressDistrict : addressDistrict
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="addressZipcode"
              label="รหัสไปรษณีย์"
              defaultValue={addressZipcode}
              error={!!errors.addressZipcode}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.addressZipcode &&
                errors.addressZipcode.type === "required" && (
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
              name="addressTel"
              label="หมายเลขโทรศัพท์"
              defaultValue={addressTel}
              error={!!errors.addressTel}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.addressTel &&
                errors.addressTel.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="addressFax"
              label="โทรสาร"
              defaultValue={addressFax}
              error={!!errors.addressFax}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.addressFax &&
                errors.addressFax.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="addressEmail"
              label="อีเมล์"
              defaultValue={addressEmail}
              error={!!errors.addressEmail}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.addressEmail &&
                errors.addressEmail.type === "required" && (
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
            <Typography variant="h6">ที่อยู๋ติดต่อ</Typography>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <TextFieldCT
              name="contactNo"
              label="บ้านเลขที่"
              defaultValue={contactNo}
              error={!!errors.contactNo}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.contactNo &&
                errors.contactNo.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="contactMoo"
              label="หมู่"
              defaultValue={contactMoo}
              error={!!errors.contactMoo}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.contactMoo &&
                errors.contactMoo.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="contactSoi"
              label="ตรอก/ซอย"
              defaultValue={contactSoi}
              error={!!errors.contactSoi}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.contactSoi &&
                errors.contactSoi.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="contactRoad"
              label="ถนน"
              defaultValue={contactRoad}
              error={!!errors.contactRoad}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.contactRoad &&
                errors.contactRoad.type === "required" && (
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
              reactSelectID={"contactProvince"}
              name={"contactProvince"}
              labelName="จังหวัด"
              margin="normal"
              defaultValue={contactProvince}
              onChange={([selected]) => {
                return selected.value;
              }}
              error={!!errors.contactProvince}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.contactProvince &&
                errors.contactProvince.type === "required" && (
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
              reactSelectID={"contactDistrict"}
              name={"contactDistrict"}
              labelName="อำเภอ"
              margin="normal"
              defaultValue={contactDistrict}
              onChange={([selected]) => {
                return selected.value;
              }}
              provinceID={
                watchContactProvince ? watchContactProvince : contactProvince
              }
            />
          </div>
          <div className="col-lg-3" style={{ marginTop: "12px" }}>
            <Controller
              fullWidth
              as={SubDistrictSelectOptions}
              control={control}
              reactSelectID={"contactSubDistrict"}
              name={"contactSubDistrict"}
              labelName="ตำบล"
              margin="normal"
              defaultValue={contactSubDistrict}
              onChange={([selected]) => {
                return selected.value;
              }}
              provinceID={
                watchContactProvince ? watchContactProvince : contactProvince
              }
              districtID={
                watchContactDistrict ? watchContactDistrict : contactDistrict
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="contactZipcode"
              label="รหัสไปรษณีย์"
              defaultValue={contactZipcode}
              error={!!errors.contactZipcode}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.contactZipcode &&
                errors.contactZipcode.type === "required" && (
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
              name="contactTel"
              label="หมายเลขโทรศัพท์"
              defaultValue={contactTel}
              error={!!errors.contactTel}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.contactTel &&
                errors.contactTel.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="contactFax"
              label="โทรสาร"
              defaultValue={contactFax}
              error={!!errors.contactFax}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.contactFax &&
                errors.contactFax.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                )
              }
            />
          </div>
          <div className="col-lg-3">
            <TextFieldCT
              name="contactEmail"
              label="อีเมล์"
              defaultValue={contactEmail}
              error={!!errors.contactEmail}
              inputRef={register({
                //required: true,
              })}
              helperText={
                errors.contactEmail &&
                errors.contactEmail.type === "required" && (
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

export default StepAddress;
