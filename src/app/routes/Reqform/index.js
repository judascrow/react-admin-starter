import "date-fns";
import React from "react";
import { connect } from "react-redux";
import ContainerHeader from "components/ContainerHeader";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import { StoreContextProvider } from "app/context/store";
import StepperForm from "./StepperForm";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "100%",
  },
}));

const Reqform = (props) => {
  const classes = useStyles();
  const { user, match } = props;

  return (
    <StoreContextProvider user={user}>
      <div className="app-wrapper">
        <div className="dashboard animated slideInUpTiny animation-duration-3">
          <ContainerHeader
            match={match}
            title={"คำขอขึ้นทะเบียนผู้เชี่ยวชาญ"}
          />

          <div className="page-heading d-sm-flex justify-content-sm-between align-items-sm-center">
            {user?.profile ? (
              <Typography
                className={classes.root}
                color="primary"
                align="center"
                variant="h6"
              >
                <CheckCircleOutlineIcon fontSize="large" /> <br />
                ส่งข้อมูลคำขอขึ้นทะเบียนของท่านเรียบร้อยแล้ว
                <br />
                กรุณาตรวจสอบสถานะการขึ้นทะเบียนจากหน้าหลัก
              </Typography>
            ) : (
              <StepperForm />
            )}
          </div>
        </div>
      </div>
    </StoreContextProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.authUser,
  };
};

export default connect(mapStateToProps, {})(Reqform);
