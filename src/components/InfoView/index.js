import React, { useEffect } from "react";
import CircularProgress from "components/CircularProgress/index";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Fade from "@material-ui/core/Fade";
import Auxiliary from "util/Auxiliary";
import { connect } from "react-redux";
import { hideMessage } from "actions/Common";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const InfoView = (props) => {
  const { error, loading, message } = props;
  const open = error !== "" || message !== "";
  let showMessage = message;
  if (error) {
    showMessage = error;
  }

  useEffect(() => {
    if (error || message) {
      setTimeout(() => {
        props.hideMessage();
      }, 5000);
    }
  }, [error, message, props]);

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
        TransitionComponent={Fade}
      >
        <Alert severity={error ? "error" : "success"}>
          <span id="message-id">{showMessage}</span>
        </Alert>
      </Snackbar>
    </Auxiliary>
  );
};

const mapStateToProps = ({ commonData }) => {
  const { error, loading, message } = commonData;
  return { error, loading, message };
};

export default connect(mapStateToProps, { hideMessage })(InfoView);
