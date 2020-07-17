import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
import "moment/locale/th";
import MaterialTable from "material-table";

import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

import CircularProgress from "components/CircularProgress";

import { getReqforms } from "actions/Reqform";

const useStyles = makeStyles((theme) => ({
  chip: {
    backgroundColor: theme.palette.success.main,
    color: "#fff",
  },
}));

const ReqformTable = (props) => {
  const classes = useStyles();

  const { getReqforms, reqform } = props;
  const { reqforms, loading } = reqform;

  useEffect(() => {
    getReqforms();
  }, [getReqforms]);

  const onEdit = (rowData) => {};
  const onDelete = (rowData) => {};

  const [columns] = useState([
    { title: "เลขบัตร ปชช.", field: "idCard" },
    {
      title: "ชื่อ - นามสกุล",
      field: "first_name",
      render: (rowData) =>
        rowData.prefixName + rowData.firstName + " " + rowData.lastName,
    },
    {
      title: "วันที่ส่งคำขอฯ",
      field: "CreatedAt",
      render: (rowData) =>
        moment(rowData.CreatedAt)
          .locale("th")
          .format("lll"),
    },
    {
      title: "ผู้เชี่ยวชาญ",
      field: "isSpecialist",
      render: (rowData) =>
        rowData.isSpecialist === true ? (
          <Chip
            label="เป็นผู้เชี่ยวชาญ"
            size="small"
            className={classes.chip}
          />
        ) : (
          <Chip label="ยังไม่เป็นผู้เชี่ยวชาญ" size="small" />
        ),
    },
    {
      title: "คำขอขึ้นทะเบียน",
      field: "statusReqform",
      render: (rowData) =>
        rowData.statusReqform === "" ? (
          <Chip label="อนุมัติ" size="small" className={classes.chip} />
        ) : (
          <Chip label="ยื่นเอกสารแล้ว" size="small" />
        ),
    },
  ]);

  const [actions] = useState([
    {
      icon: "search",
      iconProps: { color: "action" },
      tooltip: "ดูข้อมูล",
      onClick: (event, rowData) => {},
    },
    {
      icon: "edit",
      iconProps: { color: "primary" },
      tooltip: "แก้ไขข้อมูล",
      onClick: (event, rowData) => onEdit(rowData),
    },
    (rowData) => ({
      icon: "delete",
      iconProps: { color: "error" },
      tooltip: "ลบข้อมูล",
      onClick: (event, rowData) =>
        window.confirm("Are you sure you wish to delete this item?") &&
        onDelete(rowData),
    }),
  ]);

  const [options] = useState({
    showTitle: true,
    actionsColumnIndex: -1,
    pageSize: 5,
    headerStyle: {
      backgroundColor: "#1769aa",
      color: "#fff",
    },
    padding: "dense",
  });

  return (
    <div>
      {reqforms !== null && !loading ? (
        <MaterialTable
          columns={columns}
          data={reqforms}
          title={"คำขอขึ้นทะเบียนเป็นผู้เชี่ยวชาญ"}
          actions={actions}
          options={options}
        />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

ReqformTable.propTypes = {
  getReqforms: PropTypes.func.isRequired,
  reqform: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  reqform: state.reqform,
});

export default connect(mapStateToProps, { getReqforms })(
  withRouter(ReqformTable)
);
