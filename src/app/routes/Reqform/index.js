import React, { useContext } from "react";
import { connect } from "react-redux";
import ContainerHeader from "components/ContainerHeader";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useForm } from "react-hook-form";

import StepPersonalData from "./StepPersonalData";
import StepAddressData from "./StepAddressData";
import { StoreContextProvider, StoreContext } from "app/context/store";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "ข้อมูลส่วนตัว",
    "ข้อมูลที่อยู่",
    "ข้อมูลการทำงาน",
    "ไฟล์แนบ",
    "ยืนยันและส่งข้อมูล",
  ];
}

const Reqform = (props) => {
  //   const { user } = props;

  const classes = useStyles();
  const { personal, address } = useContext(StoreContext);
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const { register, errors, handleSubmit } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    if (activeStep === 0) {
      //set data ให้ global state
      console.log(personal);
      personal[1](data);
    } else if (activeStep === 1) {
      //set data ให้ global state
      console.log(address);
      address[1](data);
    }
    handleNext();
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  //   const { register, handleSubmit, errors } = useForm({
  //     mode: "onChange",
  //     reValidateMode: "onChange",
  //   });

  //   const onSubmit = async (data) => {};

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <StepPersonalData formProps={{ register, errors }} data={personal} />
        );
      case 1:
        return (
          <StepAddressData formProps={{ register, errors }} data={address} />
        );
      case 2:
        return "This is the bit I really care about!";
      default:
        return "Unknown stepIndex";
    }
  }

  return (
    <StoreContextProvider>
      <div className="app-wrapper">
        <div className="dashboard animated slideInUpTiny animation-duration-3">
          <ContainerHeader
            match={props.match}
            title={"คำขอขึ้นทะเบียนผู้เชี่ยวชาญ"}
          />

          <div className="page-heading d-sm-flex justify-content-sm-between align-items-sm-center">
            <div className={classes.root}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-lg-12">
                    <Stepper activeStep={activeStep} alternativeLabel>
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    {activeStep === steps.length ? (
                      <div>
                        <Typography className={classes.instructions}>
                          All steps completed
                        </Typography>
                        <Button onClick={handleReset}>Reset</Button>
                      </div>
                    ) : (
                      <div>
                        <Typography className={classes.instructions}>
                          {getStepContent(activeStep)}
                        </Typography>
                        <div style={{ marginTop: "40px" }}>
                          <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.backButton}
                          >
                            Back
                          </Button>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            //   onClick={handleNext}
                          >
                            {activeStep === steps.length - 1
                              ? "Finish"
                              : "Next"}
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
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
