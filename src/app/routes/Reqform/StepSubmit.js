import React, { Fragment } from "react";
import moment from "moment";
import "moment/locale/th";
import Typography from "@material-ui/core/Typography";

const StepSubmit = ({ formProps: { register, errors }, data }) => {
  const { personal, address, work, regis } = data;
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
  } = personal[0];
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
  } = address[0];
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
  } = work[0];
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
  } = regis[0];

  const listsData = [
    {
      title: "ชื่อ-นามสกุล",
      data: prefixName + firstName + " " + lastName,
    },
    {
      title: "เลขบัตรประจำตัวประชาชน",
      data: idCard,
    },
    {
      title: "เลขบัตรประจำตัวข้าราชการ",
      data: govCard,
    },
    {
      title: "บัตรหมดอายุ",
      data: cardExpire
        ? moment(cardExpire)
            .locale("th")
            .format("Do MMMM YYYY")
        : "",
    },
    {
      title: "วันเดือนปีเกิด",
      data: birthDate
        ? moment(birthDate)
            .locale("th")
            .format("Do MMMM YYYY")
        : "",
    },
    {
      title: "เชื้อชาติ",
      data: race,
    },
    {
      title: "สัญชาติ",
      data: nation,
    },
  ];

  return (
    <Fragment>
      <div className="col-lg-12 d-flex flex-column order-lg-2">
        <div className="row">
          <div className="col-lg-12">
            <Typography variant="h6" align="center" gutterBottom>
              ยืนยันคำขอขึ้นทะเบียนและส่งข้อมูล
            </Typography>
          </div>
        </div>
        {listsData.map((d) => {
          return (
            <div className="row">
              <div className="col-lg-12">
                <Typography variant="subtitle2" gutterBottom>
                  {d.title}: <b>{d.data}</b>
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default StepSubmit;
