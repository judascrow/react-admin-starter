import React from "react";
import { connect } from "react-redux";
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

import { createUser, updateUser } from "actions/User";

const UserAddModal = (props) => {
  const thumb =
    "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg";
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const { open, handleClose, user, createUser, updateUser } = props;

  const onSubmit = async (data) => {
    console.log(data);
    if (user) {
      await updateUser(user.slug, data)
        .then((result) => {
          console.log("Success!", result);
          if (result !== undefined) {
            handleClose();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      await createUser(data)
        .then((result) => {
          console.log("Success!", result);
          if (result !== undefined) {
            handleClose();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <Modal
        disablebackdropclick="true"
        disableescapekeydown="true"
        fullScreen={fullScreen.toString()}
        className="modal-box"
        isOpen={open}
      >
        <ModalHeader className="modal-box-header bg-primary text-white">
          {user ? "แก้ไขผู้ใช้งาน" : "เพิ่มผู้ใช้งาน"}
          <IconButton className="text-white" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </ModalHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-box-content">
            <div className="row no-gutters">
              <div className="col-lg-3 text-center text-lg-left order-lg-1">
                <img
                  className="ml-lg-3 mb-4 mb-lg-0 avatar size-120"
                  src={thumb}
                  alt={thumb}
                />
              </div>

              <div className="col-lg-9 d-flex flex-column order-lg-2">
                <div className="row ">
                  <div className="col-lg-6">
                    <TextField
                      disabled={user ? true : false}
                      fullwidth
                      label="ชื่อผู้ใช้งาน"
                      name="username"
                      defaultValue={user && user.username}
                      error={!!errors.username}
                      inputRef={register({ required: true })}
                    />
                    {errors.username && (
                      <Alert severity="error">กรุณากรอกชื่อผู้ใช้</Alert>
                    )}
                  </div>
                  {!user ? (
                    <div className="col-lg-6">
                      <TextField
                        fullWidth
                        type="password"
                        label="รหัสผ่าน"
                        name="password"
                        error={!!errors.password}
                        inputRef={register({ required: true })}
                      />
                      {errors.password && (
                        <Alert severity="error">กรุณากรอกรหัสผ่าน</Alert>
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="row ">
                  <div className="col-lg-12">
                    <TextField
                      fullWidth
                      label="อีเมล์"
                      margin="normal"
                      name="email"
                      defaultValue={user && user.email}
                      error={!!errors.email}
                      inputRef={register({
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        required: true,
                      })}
                    />
                    {errors.email && errors.email.type === "required" && (
                      <Alert severity="error">กรุณากรอกอีเมล์</Alert>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                      <Alert severity="error">รูปแบบอีเมล์ไม่ถูกต้อง</Alert>
                    )}
                  </div>
                </div>
                <div className="row ">
                  <div className="col-lg-6">
                    <TextField
                      fullWidth
                      margin="normal"
                      label="ชื่อ"
                      name="firstName"
                      defaultValue={user && user.firstName}
                      error={!!errors.firstName}
                      inputRef={register({ required: true })}
                    />
                    {errors.firstName && (
                      <Alert severity="error">กรุณากรอกชื่อ</Alert>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <TextField
                      fullWidth
                      margin="normal"
                      label="นามสกุล"
                      name="lastName"
                      defaultValue={user && user.lastName}
                      error={!!errors.lastName}
                      inputRef={register({ required: true })}
                    />
                    {errors.lastName && (
                      <Alert severity="error">กรุณากรอกนามสกุล</Alert>
                    )}
                  </div>
                </div>
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
  // user: PropTypes.object.isRequired,
  createUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default connect(null, { createUser, updateUser })(UserAddModal);
