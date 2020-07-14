import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { useForm } from "react-hook-form";

import { StoreContext } from "app/context/store";
import { createReqform } from "actions/Reqform";

import StepPersonal from "./StepPersonal";
import StepAddress from "./StepAddress";
import StepWork from "./StepWork";
import StepRegis from "./StepRegis";
import StepSubmit from "./StepSubmit";

import { getUser } from "actions/Auth";

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
    "ข้อมูลการขอขึ้นทะเบียน",
    "ยืนยันและส่งข้อมูล",
  ];
}

const StepperForm = (props) => {
  const classes = useStyles();
  const { createReqform, getUser } = props;
  const { personal, address, work, regis } = useContext(StoreContext);
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  const { register, errors, handleSubmit, control, watch, setValue } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (data) => {
    data.cardExpire = new Date(data.cardExpire).toJSON();
    data.birthDate = data.birthDate ? new Date(data.birthDate).toJSON() : null;
    if (activeStep === 0) {
      personal[1](data);
      handleNext();
    } else if (activeStep === 1) {
      address[1](data);
      handleNext();
    } else if (activeStep === 2) {
      work[1](data);
      handleNext();
    } else if (activeStep === 3) {
      regis[1](data);
      handleNext();
    } else if (activeStep === 4) {
      // personal[1](data);
      // address[1](data);
      // work[1](data);
      // regis[1](data);
      console.log(personal[0]);
      const reqFormData = {
        ...personal[0],
        ...address[0],
        ...work[0],
        ...regis[0],
      };
      reqFormData.cardExpire = personal[0].cardExpire;
      reqFormData.birthDate = personal[0].birthDate;
      console.log(reqFormData);
      const formData = new FormData();
      const reqFormDataArray = Object.keys(reqFormData);

      reqFormDataArray.map((key) => {
        formData.append(key, reqFormData[key]);
        return key;
      });

      createReqform(formData)
        .then((result) => {
          if (result !== undefined) {
            getUser();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <StepPersonal
            formProps={{ register, errors, control, watch }}
            data={personal}
          />
        );
      case 1:
        return (
          <StepAddress
            formProps={{ register, errors, control, watch, setValue }}
            data={address}
          />
        );
      case 2:
        return (
          <StepWork
            formProps={{ register, errors, control, watch }}
            data={work}
          />
        );
      case 3:
        return (
          <StepRegis
            formProps={{ register, errors, control, watch }}
            data={regis}
          />
        );
      case 4:
        return (
          <StepSubmit
            formProps={{ register, errors, control, watch }}
            data={{ personal, address, work, regis }}
          />
        );
      default:
        return "Unknown stepIndex";
    }
  }

  return (
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
            <div>
              <Typography component={"span"} className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div style={{ marginTop: "40px" }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  ย้อนกลับ
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  {activeStep === steps.length - 1 ? "ส่งข้อมูล" : "ถัดไป"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

StepperForm.propTypes = {
  createReqform: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.authUser,
});

export default connect(mapStateToProps, { createReqform, getUser })(
  withRouter(StepperForm)
);
