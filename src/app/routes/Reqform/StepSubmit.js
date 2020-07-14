import React, { Fragment } from "react";
import moment from "moment";
import "moment/locale/th";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import {
  GetProvinceName,
  GetDistrictName,
  GetSubDistrictName,
} from "app/routes/Address/Address";

import { GetSplType, GetSplSubType } from "app/routes/SplTypes/SplTypes";

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
    splTypeID,
    splSubTypeID,
    regisQualification,
    regisDocument,
    regisEver,
    regisEverYear,
    // regisEverPass,
    regisEverPassNo,
    // regisEverNopass,
    regisEverNopassDesc,
  } = regis[0];

  const listsDataPersonal = [
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

  const listsDataAddressDomicile = [
    {
      title: "บ้านเลขที่",
      data: domicileNo,
    },
    {
      title: "หมู่",
      data: domicileMoo,
    },
    {
      title: "ตรอก/ซอย",
      data: domicileSoi,
    },
    {
      title: "ถนน",
      data: domicileRoad,
    },
    {
      title: "ตำบล",
      data: GetSubDistrictName(domicileSubDistrict),
    },
    {
      title: "อำเภอ",
      data: GetDistrictName(domicileDistrict),
    },
    {
      title: "จังหวัด",
      data: GetProvinceName(domicileProvince),
    },
    {
      title: "รหัสไปรษณีย์",
      data: domicileZipcode,
    },
    {
      title: "หมายเลขโทรศัพท์",
      data: domicileTel,
    },
    {
      title: "โทรสาร",
      data: domicileFax,
    },
    {
      title: "อีเมล์",
      data: domicileEmail,
    },
  ];

  const listsDataAddressAddress = [
    {
      title: "บ้านเลขที่",
      data: addressNo,
    },
    {
      title: "หมู่",
      data: addressMoo,
    },
    {
      title: "ตรอก/ซอย",
      data: addressSoi,
    },
    {
      title: "ถนน",
      data: addressRoad,
    },
    {
      title: "ตำบล",
      data: GetSubDistrictName(addressSubDistrict),
    },
    {
      title: "อำเภอ",
      data: GetDistrictName(addressDistrict),
    },
    {
      title: "จังหวัด",
      data: GetProvinceName(addressProvince),
    },
    {
      title: "รหัสไปรษณีย์",
      data: addressZipcode,
    },
    {
      title: "หมายเลขโทรศัพท์",
      data: addressTel,
    },
    {
      title: "โทรสาร",
      data: addressFax,
    },
    {
      title: "อีเมล์",
      data: addressEmail,
    },
  ];

  const listsDataAddressContact = [
    {
      title: "บ้านเลขที่",
      data: contactNo,
    },
    {
      title: "หมู่",
      data: contactMoo,
    },
    {
      title: "ตรอก/ซอย",
      data: contactSoi,
    },
    {
      title: "ถนน",
      data: contactRoad,
    },
    {
      title: "ตำบล",
      data: GetSubDistrictName(contactSubDistrict),
    },
    {
      title: "อำเภอ",
      data: GetDistrictName(contactDistrict),
    },
    {
      title: "จังหวัด",
      data: GetProvinceName(contactProvince),
    },
    {
      title: "รหัสไปรษณีย์",
      data: contactZipcode,
    },
    {
      title: "หมายเลขโทรศัพท์",
      data: contactTel,
    },
    {
      title: "โทรสาร",
      data: contactFax,
    },
    {
      title: "อีเมล์",
      data: contactEmail,
    },
  ];

  const listsDataWorkWork = [
    {
      title: "อาชีพ",
      data: workOccupation,
    },
    {
      title: "ตำแหน่ง",
      data: workPosition,
    },
    {
      title: "สถานที่ทำงาน",
      data: workPlaces,
    },
    {
      title: "ถนน",
      data: workRoad,
    },
    {
      title: "ตำบล",
      data: GetSubDistrictName(workSubDistrict),
    },
    {
      title: "อำเภอ",
      data: GetDistrictName(workDistrict),
    },
    {
      title: "จังหวัด",
      data: GetProvinceName(workProvince),
    },
    {
      title: "รหัสไปรษณีย์",
      data: workZipcode,
    },
    {
      title: "หมายเลขโทรศัพท์",
      data: workTel,
    },
    {
      title: "โทรสาร",
      data: workFax,
    },
    {
      title: "อีเมล์",
      data: workEmail,
    },
  ];

  const listsDataWorkBoss = [
    {
      title: "ชื่อ-นามสกุล",
      data: bossFirstName + " " + bossLastName,
    },
    {
      title: "บ้านเลขที่",
      data: bossNo,
    },
    {
      title: "หมู่",
      data: bossMoo,
    },
    {
      title: "ตรอก/ซอย",
      data: bossSoi,
    },
    {
      title: "ถนน",
      data: bossRoad,
    },
    {
      title: "ตำบล",
      data: GetSubDistrictName(bossSubDistrict),
    },
    {
      title: "อำเภอ",
      data: GetDistrictName(bossDistrict),
    },
    {
      title: "จังหวัด",
      data: GetProvinceName(bossProvince),
    },
    {
      title: "รหัสไปรษณีย์",
      data: bossZipcode,
    },
    {
      title: "หมายเลขโทรศัพท์",
      data: bossTel,
    },
    {
      title: "โทรสาร",
      data: bossFax,
    },
    {
      title: "อีเมล์",
      data: bossEmail,
    },
  ];

  const listsDataRegis = [
    {
      title: "ด้าน",
      data: GetSplType(splTypeID),
    },
    {
      title: "สาขา",
      data: GetSplSubType(splSubTypeID),
    },
    {
      title: "โดยมีคุณวุฒิ",
      data: regisQualification,
    },
    {
      title: "และได้แสดงหลักฐานพร้อมผลงานประกอบคำขอขึ้นทะเบียนดังนี้",
      data: "\n" + regisDocument,
    },
    {
      title: "เคยขอขึ้นทะเบียนแล้วในสาขา",
      data: regisEver,
    },
    {
      title: "ปี พ.ศ.",
      data: regisEverYear,
    },
    {
      title: "ได้รับขึ้นทะเบียนเลขที่",
      data: regisEverPassNo,
    },
    {
      title: "ไม่ได้รับขึ้นทะเบียนเนื่องจาก",
      data: regisEverNopassDesc,
    },
  ];

  return (
    <Fragment>
      <div className="col-lg-12 d-flex flex-column order-lg-2">
        <div className="row">
          <div className="col-lg-12" style={{ marginTop: "20px" }}>
            <Typography variant="h5" align="center" gutterBottom>
              ยืนยันคำขอขึ้นทะเบียนและส่งข้อมูล
            </Typography>
          </div>
        </div>
        <Typography
          color="primary"
          variant="h6"
          style={{ marginTop: "15px" }}
          gutterBottom
        >
          ข้อมูลส่วนตัว
        </Typography>
        {listsDataPersonal.map((d, i) => {
          return (
            <div className="row" key={i}>
              <div className="col-lg-12">
                <Typography variant="body1" gutterBottom>
                  {d.title}: <b>{d.data}</b>
                </Typography>
              </div>
            </div>
          );
        })}
        <Divider style={{ marginTop: "15px" }} />
        <Typography
          color="primary"
          variant="h6"
          style={{ marginTop: "15px" }}
          gutterBottom
        >
          ข้อมูลที่อยู่
        </Typography>
        <div className="row">
          <div className="col-lg-4">
            <Typography color="secondary" variant="body1" gutterBottom>
              ภูมิลำเนา
            </Typography>
            {listsDataAddressDomicile.map((d, i) => {
              return (
                <div className="row" key={i}>
                  <div className="col-lg-12">
                    <Typography variant="body2" gutterBottom>
                      {d.title}: <b>{d.data}</b>
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-4">
            <Typography color="secondary" variant="body1" gutterBottom>
              ที่อยู่ปัจจุบัน
            </Typography>
            {listsDataAddressAddress.map((d, i) => {
              return (
                <div className="row" key={i}>
                  <div className="col-lg-12">
                    <Typography variant="body2" gutterBottom>
                      {d.title}: <b>{d.data}</b>
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-4">
            <Typography color="secondary" variant="body1" gutterBottom>
              ที่อยู่ที่สามารถติดต่อได้สะดวก
            </Typography>
            {listsDataAddressContact.map((d, i) => {
              return (
                <div className="row" key={i}>
                  <div className="col-lg-12">
                    <Typography variant="body2" gutterBottom>
                      {d.title}: <b>{d.data}</b>
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Divider style={{ marginTop: "15px" }} />
        <Typography
          color="primary"
          variant="h6"
          style={{ marginTop: "15px" }}
          gutterBottom
        >
          ข้อมูลการทำงาน
        </Typography>
        <div className="row">
          <div className="col-lg-4">
            <Typography color="secondary" variant="body1" gutterBottom>
              ข้อมูลการทำงาน
            </Typography>
            {listsDataWorkWork.map((d, i) => {
              return (
                <div className="row" key={i}>
                  <div className="col-lg-12">
                    <Typography variant="body2" gutterBottom>
                      {d.title}: <b>{d.data}</b>
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-4">
            <Typography color="secondary" variant="body1" gutterBottom>
              ข้อมูลหัวหน้า/ผู้บังคับบัญชา
            </Typography>
            {listsDataWorkBoss.map((d, i) => {
              return (
                <div className="row" key={i}>
                  <div className="col-lg-12">
                    <Typography variant="body2" gutterBottom>
                      {d.title}: <b>{d.data}</b>
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-4">
            <Typography color="secondary" variant="body1" gutterBottom>
              ประวัติการทำงาน
            </Typography>
            <div className="row">
              <div className="col-lg-12">
                <Typography
                  variant="body2"
                  style={{ whiteSpace: "pre-line" }}
                  gutterBottom
                >
                  {workExperience}
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <Divider style={{ marginTop: "15px" }} />
        <Typography
          color="primary"
          variant="h6"
          style={{ marginTop: "15px" }}
          gutterBottom
        >
          ข้อมูลการขอขึ้นทะเบียน
        </Typography>
        <div className="row">
          <div className="col-lg-12">
            <Typography color="secondary" variant="body1" gutterBottom>
              มีความประสงค์จะขอขึ้นทะเบียนเป็นผู้เชี่ยวชาญของศาล
            </Typography>
            {listsDataRegis.map((d, i) => {
              return (
                <div className="row" key={i}>
                  <div className="col-lg-12">
                    <Typography
                      variant="body2"
                      style={{ whiteSpace: "pre-line" }}
                      gutterBottom
                    >
                      {d.title}: <b>{d.data}</b>
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Divider style={{ marginTop: "15px" }} />
      </div>
    </Fragment>
  );
};

export default StepSubmit;
