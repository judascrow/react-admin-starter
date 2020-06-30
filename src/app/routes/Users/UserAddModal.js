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
import { useForm, Controller } from "react-hook-form";

import { createUser, updateUser } from "actions/User";

import Select from "app/components/SelectOption";
import AlertText from "app/components/AlertText";
import RolesSelectOptions from "app/routes/Roles/RolesSelectOptions";

// Status Options
const statusOptionsList = [
  { value: "A", label: "Active - เปิดใช้งาน" },
  { value: "I", label: "Inactive - ปิดใช้งาน" },
];

const UserAddModal = (props) => {
  const thumb =
    "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg";
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { register, handleSubmit, errors, control, watch } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const watchRoleId = watch("roleId");

  const { open, handleClose, user, createUser, updateUser } = props;

  const onSubmit = async (data) => {
    if (data.roleId.value === undefined) {
      data.roleId = 3;
    } else {
      data.roleId = data.roleId.value;
    }

    data.status = data.status.value;
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
        fullscreen={fullScreen.toString()}
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
                      fullWidth
                      label="ชื่อผู้ใช้งาน"
                      name="username"
                      defaultValue={user && user.username}
                      error={!!errors.username}
                      inputRef={register({
                        required: true,
                        minLength: 6,
                        maxLength: 50,
                      })}
                      helperText={[
                        errors.username &&
                          errors.username.type === "required" && (
                            <AlertText>กรุณากรอกชื่อผู้ใช้</AlertText>
                          ),
                        errors.username &&
                          errors.username.type === "minLength" && (
                            <AlertText>ต้องมีอย่างน้อย 6 ตัวอักษร</AlertText>
                          ),
                        errors.username &&
                          errors.username.type === "maxLength" && (
                            <AlertText>ต้องมีไม่เกิน 20 ตัวอักษร</AlertText>
                          ),
                      ]}
                    />
                  </div>
                  {!user ? (
                    <div className="col-lg-6">
                      <TextField
                        fullWidth
                        type="password"
                        label="รหัสผ่าน"
                        name="password"
                        error={!!errors.password}
                        inputRef={register({
                          required: true,
                          minLength: 6,
                          maxLength: 20,
                        })}
                        helperText={[
                          errors.password &&
                            errors.password.type === "required" && (
                              <AlertText>กรุณากรอกรหัสผ่าน</AlertText>
                            ),
                          errors.password &&
                            errors.password.type === "minLength" && (
                              <AlertText>ต้องมีอย่างน้อย 6 ตัวอักษร</AlertText>
                            ),
                          errors.password &&
                            errors.password.type === "maxLength" && (
                              <AlertText>ต้องมีไม่เกิน 20 ตัวอักษร</AlertText>
                            ),
                        ]}
                      />
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
                      helperText={[
                        errors.password &&
                          errors.password.type === "required" && (
                            <AlertText>กรุณากรอก Email</AlertText>
                          ),
                        errors.password &&
                          errors.password.type === "pattern" && (
                            <AlertText>รูปแบบ Email ไม่ถูกต้อง</AlertText>
                          ),
                      ]}
                    />
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
                      helperText={
                        errors.firstName && <AlertText>กรุณากรอกชื่อ</AlertText>
                      }
                    />
                  </div>
                  <div className="col-lg-6">
                    <TextField
                      fullWidth
                      margin="normal"
                      label="นามสกุล"
                      name="lastName"
                      defaultValue={user && user.lastName}
                      error={!!errors.lastName}
                      helperText={
                        errors.lastName && (
                          <AlertText>กรุณากรอกนามสกุล</AlertText>
                        )
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6" style={{ marginTop: "12px" }}>
                    <Controller
                      as={RolesSelectOptions}
                      control={control}
                      reactSelectID={"roleId"}
                      name={"roleId"}
                      labelName={"สิทธิ์การใช้งาน"}
                      onChange={([selected]) => {
                        return selected;
                      }}
                      // isClearable={true}
                      defaultValue={user && user.roleId ? user.roleId : 3}
                      error={!!errors.roleId}
                      inputRef={register({ required: true })}
                    />
                    {watchRoleId === null && (
                      <Alert style={{ marginTop: "8px" }} severity="error">
                        กรุณาเลือกสิทธิ์การใช้งาน
                      </Alert>
                    )}
                  </div>
                  <div className="col-lg-6" style={{ marginTop: "12px" }}>
                    <Controller
                      as={Select}
                      control={control}
                      options={statusOptionsList}
                      reactSelectID={"status"}
                      name={"status"}
                      labelName={"สถานะ"}
                      onChange={([selected]) => {
                        return selected;
                      }}
                      defaultValue={
                        user && user.roleId
                          ? statusOptionsList.find(
                              (s) => s.value === user.status
                            )
                          : statusOptionsList[0]
                      }
                      inputRef={register({ required: true })}
                    />
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
