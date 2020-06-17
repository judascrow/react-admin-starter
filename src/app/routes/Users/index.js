import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ContainerHeader from "components/ContainerHeader/index";
import IntlMessages from "util/IntlMessages";
import PropTypes from "prop-types";

import { getUsers } from "../../../actions/User";

import MaterialTable from "material-table";
import CircularProgress from "components/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  titleIcon: {
    verticalAlign: "middle",
    margin: theme.spacing(1),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));

const Users = (props) => {
  const classes = useStyles();
  const { getUsers, user } = props;
  const { users, loading } = user;

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const onEdit = () => {};
  const onDelete = () => {};

  const [state] = useState({
    columns: [
      { title: "Username", field: "username" },
      {
        title: "Full Name",
        field: "first_name",
        render: (rowData) => rowData.firstName + " " + rowData.lastName,
      },
      { title: "Court", field: "court.name" },
      {
        title: "Status",
        field: "status",
        render: (rowData) =>
          rowData.status === "A" ? (
            <Chip label="Active" color="secondary" size="small" />
          ) : (
            <Chip label="Inactive" size="small" />
          ),
      },
    ],
    actions: [
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
    ],
    options: {
      showTitle: false,
      actionsColumnIndex: -1,
      pageSize: 10,
      headerStyle: {
        backgroundColor: "#1769aa",
        color: "#fff",
      },
      padding: "dense",
    },
  });

  return (
    <div className="app-wrapper">
      <div className="dashboard animated slideInUpTiny animation-duration-3">
        <ContainerHeader
          match={props.match}
          title={<IntlMessages id="users.main" />}
        />
        <div>
          {users !== null && !loading ? (
            <MaterialTable
              columns={state.columns}
              data={users.data}
              actions={state.actions}
              options={state.options}
            />
          ) : (
            <CircularProgress />
          )}
          <Tooltip title="เพิ่มผู้ใช้งาน" aria-label="Add">
            <Fab
              color="primary"
              aria-label="Add"
              className={classes.fab}
              component={Link}
              to="/users/add"
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers })(withRouter(Users));
