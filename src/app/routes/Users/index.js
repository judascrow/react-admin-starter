import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import ContainerHeader from "components/ContainerHeader/index";
import IntlMessages from "util/IntlMessages";
import InfoView from "components/InfoView";

import UserTable from "./UserTable";
import UserAddModal from "./UserAddModal";

const useStyles = makeStyles((theme) => ({
  titleIcon: {
    verticalAlign: "middle",
    margin: theme.spacing(1),
  },
  fab: {
    position: "fixed",
    zIndex: 1000,
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    backgroundColor: theme.palette.success.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
    },
  },
}));

const Users = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="app-wrapper">
      <div className="dashboard animated slideInUpTiny animation-duration-3">
        <ContainerHeader
          match={props.match}
          title={<IntlMessages id="users.main" />}
        />
        <div>
          <UserTable />
        </div>

        <UserAddModal handleClose={handleClose} open={open} user={null} />
      </div>
      <InfoView />
      <Tooltip title="เพิ่มผู้ใช้งาน" aria-label="Add">
        <Fab
          color="primary"
          aria-label="Add"
          className={classes.fab}
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default Users;
