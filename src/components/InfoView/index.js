import React from "react";
import CircularProgress from "components/CircularProgress/index";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Auxiliary from "util/Auxiliary";
import { connect } from "react-redux";
import { hideMessage } from "actions/Common";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class InfoView extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.error || nextProps.message) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 5000);
    }
  }

  render() {
    const { error, loading, message } = this.props;
    const open = error !== "" || message !== "";
    let showMessage = message;
    if (error) {
      showMessage = error;
    }

    console.log("showMessage, open", showMessage, open);

    return (
      <Auxiliary>
        {loading && (
          <div className="loader-view">
            <CircularProgress />
          </div>
        )}

        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          autoHideDuration={5000}
          TransitionComponent="fade"
          // ContentProps={{
          //   "aria-describedby": "message-id",
          // }}
          // message={<span id="message-id">{showMessage}</span>}
        >
          <Alert severity={error ? "error" : "success"}>
            <span id="message-id">{showMessage}</span>
          </Alert>
        </Snackbar>
      </Auxiliary>
    );
  }
}

const mapStateToProps = ({ commonData }) => {
  const { error, loading, message } = commonData;
  return { error, loading, message };
};

export default connect(mapStateToProps, { hideMessage })(InfoView);
