import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IntlMessages from "util/IntlMessages";
import InfoView from "components/InfoView";
import { userSignIn } from "actions/Auth";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "admin",
      password: "password",
    };
  }

  componentDidUpdate() {
    if (this.props.authUser !== null) {
      this.props.history.push("/");
    }
  }

  render() {
    const { username, password } = this.state;
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
            <div className="app-login-header mb-4">
              <h1>
                <IntlMessages id="appModule.signIn" />
              </h1>
            </div>

            <div className="app-login-form">
              <form>
                <fieldset>
                  <TextField
                    label={<IntlMessages id="appModule.username" />}
                    fullWidth
                    onChange={(event) =>
                      this.setState({ username: event.target.value })
                    }
                    defaultValue={username}
                    margin="normal"
                    className="mt-1 my-sm-3"
                  />
                  <TextField
                    type="password"
                    label={<IntlMessages id="appModule.password" />}
                    fullWidth
                    onChange={(event) =>
                      this.setState({ password: event.target.value })
                    }
                    defaultValue={password}
                    margin="normal"
                    className="mt-1 my-sm-3"
                  />

                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <Button
                      onClick={() => {
                        this.props.userSignIn({ username, password });
                      }}
                      variant="contained"
                      color="primary"
                    >
                      <IntlMessages id="appModule.signIn" />
                    </Button>

                    <Link to="/signup">
                      {/* <IntlMessages id="signIn.signUp" /> */}
                      ลงทะเบียนเข้าใช้งาน
                    </Link>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
        <InfoView />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { authUser } = auth;
  return { authUser };
};

export default connect(mapStateToProps, { userSignIn })(SignIn);
