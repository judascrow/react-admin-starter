import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MaterialTable from "material-table";

import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

import CircularProgress from "components/CircularProgress";

import { getUsers, deleteUser } from "actions/User";

import UserAddModal from "./UserAddModal";

const useStyles = makeStyles((theme) => ({
  chip: {
    backgroundColor: theme.palette.success.main,
    color: "#fff",
  },
}));

const UserTable = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [userData, setUserData] = React.useState(null);

  const { getUsers, user, deleteUser } = props;
  const { users, loading } = user;

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const onEdit = (rowData) => {
    setOpen(true);
    setUserData(rowData);
  };
  const onDelete = (rowData) => {
    console.log(rowData.slug);
    deleteUser(rowData.slug);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        switch (rowData.role.name) {
          case "admin":
            return (
              <Chip
                variant="outlined"
                label="Admin"
                color="primary"
                size="small"
              />
            );
          case "staff":
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
          <Chip label="Active" size="small" className={classes.chip} />
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
      onClick: (event, rowData) =>
        window.confirm("Are you sure you wish to delete this item?") &&
        onDelete(rowData),
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
          data={users}
          actions={actions}
          options={options}
        />
      ) : (
        <CircularProgress />
      )}
      <UserAddModal handleClose={handleClose} open={open} user={userData} />
    </div>
  );
};

UserTable.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers, deleteUser })(
  withRouter(UserTable)
);
