import React from "react";
import { connect } from "react-redux";
import ContainerHeader from "components/ContainerHeader";

const Main = (props) => {
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
                  <h2>
                    ยินดีต้อนรับคุณ{" "}
                    {user && user.firstName + " " + user.lastName}
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <hr />
                  <h3>ข้อมูลทั่วไป</h3>
                  <p>Username : {user && user.username}</p>
                  <p>Email : {user && user.email}</p>
                  <p>
                    ชื่อ-สกุล : {user && user.firstName + " " + user.lastName}
                  </p>
                </div>
                <div className="col-lg-6">
                  <hr />
                  <h3>ข้อมูลผู้เชี่ยวชาญ</h3>
                  <p>สถานะ : ยังไม่เป็นผู้เชี่ยวชาญ</p>
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
