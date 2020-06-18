import React from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import IntlMessages from "util/IntlMessages";
import Alert from "@material-ui/lab/Alert";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";

const UserAddModal = (props) => {
  const { open, handleClose, user } = props;
  const thumb =
    "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg";
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Modal
        disableBackdropClick
        disableEscapeKeyDown
        fullScreen={fullScreen}
        className="modal-box"
        isOpen={open}
      >
        <ModalHeader className="modal-box-header bg-primary text-white">
          {user ? (
            <IntlMessages id="users.addUser" />
          ) : (
            <IntlMessages id="users.saveUser" />
          )}
          <IconButton className="text-white" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </ModalHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-box-content">
            <div className="row no-gutters">
              <div className="col-lg-3 text-center text-lg-right order-lg-2">
                <img
                  className="ml-lg-3 mb-4 mb-lg-0 avatar size-120"
                  src={thumb}
                  alt={thumb}
                />
              </div>

              <div className="col-lg-9 d-flex flex-column order-lg-1">
                <TextField
                  required
                  label="ชื่อผู้ใช้งาน"
                  margin="none"
                  inputRef={register}
                />
                <TextField
                  label="อีเมล์"
                  margin="normal"
                  name="email"
                  error={!!errors.email}
                  inputRef={register({ required: true })}
                />
                {errors.email && (
                  <Alert severity="error">email is required</Alert>
                )}
                <TextField
                  label={<IntlMessages id="appModule.phone" />}
                  margin="normal"
                />
                <TextField
                  label={<IntlMessages id="appModule.designation" />}
                  multiline
                  rowsMax="4"
                  margin="normal"
                />
              </div>
            </div>
          </div>

          <div className="modal-box-footer d-flex flex-row">
            <Button type="submit" variant="contained" color="primary">
              <IntlMessages id="users.save" />
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

UserAddModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default UserAddModal;
