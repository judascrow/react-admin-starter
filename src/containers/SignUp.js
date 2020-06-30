import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import InfoView from "components/InfoView";
import { userSignUp } from "../actions/Auth";
import { useForm } from "react-hook-form";
import AlertText from "app/components/AlertText";

// class SignUp extends React.Component {
const SignUp = (props) => {
  const { authUser, userSignUp } = props;

  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);

    userSignUp(data);
  };

  if (authUser !== null) {
    props.history.push("/");
  }

  // componentDidUpdate() {
  //   if (this.props.showMessage) {
  //     setTimeout(() => {
  //       this.props.hideMessage();
  //     }, 3000);
  //   }
  //   if (this.props.authUser !== null) {
  //     this.props.history.push("/");
  //   }
  // }

  return (
    <div className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
      <div className="app-login-main-content">
        <div className="app-logo-content d-flex align-items-center justify-content-center">
          <Link className="logo-lg" to="/" title="speciailst">
            <img
              src={require("assets/images/logo.png")}
              alt="speciailst"
              title="speciailst"
            />
          </Link>
        </div>

        <div className="app-login-content">
          <div className="app-login-header">
            <h1>ลงทะเบียน</h1>
          </div>

          <div className="mb-4">
            <h2>
              {/* <IntlMessages id="appModule.createAccount" /> */}
              สมัครเป็นผู้เชี่ยวชาญ
            </h2>
          </div>

          <div className="app-login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                type="text"
                name="username"
                label={<IntlMessages id="appModule.username" />}
                fullWidth
                margin="normal"
                className="mt-0 mb-2"
                error={!!errors.username}
                inputRef={register({
                  required: true,
                  minLength: 6,
                  maxLength: 50,
                })}
                helperText={[
                  errors.username && errors.username.type === "required" && (
                    <AlertText>กรุณากรอกชื่อผู้ใช้</AlertText>
                  ),
                  errors.username && errors.username.type === "minLength" && (
                    <AlertText>ต้องมีอย่างน้อย 6 ตัวอักษร</AlertText>
                  ),
                  errors.username && errors.username.type === "maxLength" && (
                    <AlertText>ต้องมีไม่เกิน 20 ตัวอักษร</AlertText>
                  ),
                ]}
              />
              <TextField
                type="password"
                name="password"
                label={<IntlMessages id="appModule.password" />}
                fullWidth
                margin="normal"
                className="mt-0 mb-2"
                error={!!errors.password}
                inputRef={register({
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                helperText={[
                  errors.password && errors.password.type === "required" && (
                    <AlertText>กรุณากรอกรหัสผ่าน</AlertText>
                  ),
                  errors.password && errors.password.type === "minLength" && (
                    <AlertText>ต้องมีอย่างน้อย 6 ตัวอักษร</AlertText>
                  ),
                  errors.password && errors.password.type === "maxLength" && (
                    <AlertText>ต้องมีไม่เกิน 20 ตัวอักษร</AlertText>
                  ),
                ]}
              />
              <TextField
                type="email"
                name="email"
                label={<IntlMessages id="appModule.email" />}
                fullWidth
                margin="normal"
                className="mt-0 mb-2"
                error={!!errors.email}
                inputRef={register({
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  required: true,
                })}
                helperText={[
                  errors.password && errors.password.type === "required" && (
                    <AlertText>กรุณากรอก Email</AlertText>
                  ),
                  errors.password && errors.password.type === "pattern" && (
                    <AlertText>รูปแบบ Email ไม่ถูกต้อง</AlertText>
                  ),
                ]}
              />

              <TextField
                type="text"
                name="firstName"
                label={"ชื่อ"}
                fullWidth
                margin="normal"
                className="mt-0 mb-2"
                error={!!errors.firstName}
                inputRef={register({ required: true })}
                helperText={
                  errors.firstName && <AlertText>กรุณากรอกชื่อ</AlertText>
                }
              />
              <TextField
                type="text"
                name="lastName"
                label={"นามสกุล"}
                fullWidth
                margin="normal"
                className="mt-0 mb-4"
                error={!!errors.lastName}
                inputRef={register({ required: true })}
                helperText={
                  errors.lastName && <AlertText>กรุณากรอกนามสกุล</AlertText>
                }
              />
              <div className="mb-3 d-flex align-items-center justify-content-between">
                <Button type="submit" variant="contained" color="primary">
                  ลงทะเบียน
                </Button>
                <Link to="/signin">เข้าสู่ระบบ</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <InfoView />
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  const { authUser } = auth;
  return { authUser };
};

SignUp.propTypes = {
  userSignUp: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { userSignUp })(SignUp);
