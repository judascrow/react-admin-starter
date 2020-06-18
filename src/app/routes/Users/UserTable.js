import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MaterialTable from "material-table";

import Chip from "@material-ui/core/Chip";

import CircularProgress from "components/CircularProgress";

import { getUsers } from "actions/User";

const UserTable = (props) => {
  const { getUsers, user } = props;
  const { users, loading } = user;

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const onEdit = () => {};
  const onDelete = () => {};

  const [columns] = useState([
    { title: "ชื่อผู้ใช้งาน", field: "username" },
    {
      title: "ชื่อ - นามสกุล",
      field: "first_name",
      render: (rowData) => rowData.firstName + " " + rowData.lastName,
    },
    {
      title: "อีเมล์",
      field: "email",
    },
    {
      title: "สิทธิ์การใช้งาน",
      field: "roles[0].name",
      render: (rowData) => {
        switch (rowData.roles[0].name) {
          case "ROLE_ADMIN":
            return (
              <Chip
                variant="outlined"
                label="Admin"
                color="primary"
                size="small"
              />
            );
          case "ROLE_STAFF":
            return (
              <Chip
                variant="outlined"
                label="Staff"
                color="secondary"
                size="small"
              />
            );
          default:
            return <Chip variant="outlined" label="User" size="small" />;
        }
      },
    },
    {
      title: "สถานะ",
      field: "status",
      render: (rowData) =>
        rowData.status === "A" ? (
          <Chip label="Active" color="primary" size="small" />
        ) : (
          <Chip label="Inactive" size="small" />
        ),
    },
  ]);

  const [actions] = useState([
    {
      icon: "edit",
      iconProps: { color: "primary" },
      tooltip: "แก้ไขผู้ใช้งาน",
      onClick: (event, rowData) => onEdit(rowData),
    },
    (rowData) => ({
      icon: "delete",
      iconProps: { color: "error" },
      tooltip: "ลบผู้ใช้งาน",
      onClick: (event, rowData) => onDelete(rowData),
    }),
  ]);

  const [options] = useState({
    showTitle: false,
    actionsColumnIndex: -1,
    pageSize: 10,
    headerStyle: {
      backgroundColor: "#1769aa",
      color: "#fff",
    },
    padding: "dense",
  });

  return (
    <div>
      {users !== null && !loading ? (
        <MaterialTable
          columns={columns}
          data={users.data}
          actions={actions}
          options={options}
        />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

UserTable.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers })(withRouter(UserTable));
