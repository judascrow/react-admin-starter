import React from "react";
import { connect } from "react-redux";
import ContainerHeader from "components/ContainerHeader";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  span: {
    color: theme.palette.primary.dark,
    //fontWeight: "bold",
  },
  spanDanger: {
    color: theme.palette.secondary.main,
    //fontWeight: "bold",
  },
}));

const Main = (props) => {
  const classes = useStyles();
  const { user } = props;

  const thumb =
    "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg";
  return (
    <div className="app-wrapper">
      <div className="dashboard animated slideInUpTiny animation-duration-3">
        <ContainerHeader match={props.match} title={"หน้าหลัก"} />
        <div className="page-heading d-sm-flex justify-content-sm-between align-items-sm-center">
          <div
            className="row no-gutters col-lg-12"
            // style={{ border: "1px solid" }}
          >
            <div className="col-lg-2 text-center text-lg-left order-lg-1">
              <img
                className="ml-lg-3 mb-4 mb-lg-0 avatar size-120"
                style={{ marginTop: "25px" }}
                src={thumb}
                alt={thumb}
              />
            </div>

            <div className="col-lg-10 d-flex flex-column order-lg-2">
              <div className="row">
                <div className="col-lg-6">
                  {user && (
                    <Typography variant="h5" gutterBottom>
                      ยินดีต้อนรับคุณ{" "}
                      <span className={classes.span}>
                        {user.firstName + " " + user.lastName}
                      </span>
                    </Typography>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <hr />
                  <Typography variant="subtitle2" gutterBottom>
                    ข้อมูลทั่วไป
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    ชื่อผู้ใช้งาน : {user && user.username}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    อีเมล์ : {user && user.email}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    ชื่อ-สกุล : {user && user.firstName + " " + user.lastName}
                  </Typography>
                </div>
                <div className="col-lg-6">
                  <hr />
                  <Typography variant="subtitle2" gutterBottom>
                    ข้อมูลผู้เชี่ยวชาญ
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    สถานะผู้เชี่ยวชาญ :{" "}
                    {user && user.profile.isSpecialist ? (
                      <span>เป็นผู้เชี่ยวชาญ</span>
                    ) : (
                      <span className={classes.spanDanger}>
                        ยังไม่เป็นผู้เชี่ยวชาญ
                      </span>
                    )}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    สถานะการขึ้นทะเบียน :{" "}
                    {user && user.profile ? (
                      <span className={classes.span}>
                        ส่งข้อมูลแล้ว รอการตรวจสอบ
                      </span>
                    ) : (
                      <span className={classes.spanDanger}>
                        ยังไม่ได้ยื่นคำขอขึ้นทะเบียน
                      </span>
                    )}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.authUser,
  };
};

export default connect(mapStateToProps, {})(Main);
