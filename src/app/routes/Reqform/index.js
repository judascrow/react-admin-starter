import "date-fns";
import React from "react";
import { connect } from "react-redux";
import ContainerHeader from "components/ContainerHeader";

import { StoreContextProvider } from "app/context/store";
import StepperForm from "./StepperForm";

const Reqform = (props) => {
  return (
    <StoreContextProvider user={props.user}>
      <div className="app-wrapper">
        <div className="dashboard animated slideInUpTiny animation-duration-3">
          <ContainerHeader
            match={props.match}
            title={"คำขอขึ้นทะเบียนผู้เชี่ยวชาญ"}
          />

          <div className="page-heading d-sm-flex justify-content-sm-between align-items-sm-center">
            <StepperForm />
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
