import React, { Fragment } from "react";
import { Controller } from "react-hook-form";
import AlertText from "app/components/AlertText";
import IntlMessages from "util/IntlMessages";
import ProvinceSelectOptions from "app/routes/Address/ProvinceSelectOptions";
import DistrictSelectOptions from "app/routes/Address/DistrictSelectOptions";
import SubDistrictSelectOptions from "app/routes/Address/SubDistrictSelectOptions";

const StepAddress = ({
  formProps: { register, errors, control, watch },
  data,
}) => {
  const { provinceID, districtID, subDistrictID } = data[0];

  const watchProvince = watch("provinceID");
  const watchDistrict = watch("districtID");

  return (
    <Fragment>
      <div className="col-lg-12 d-flex flex-column order-lg-2">
        <div className="row ">
          <div className="col-lg-4">
            <Controller
              fullWidth
              as={ProvinceSelectOptions}
              control={control}
              reactSelectID={"provinceID"}
              name={"provinceID"}
              labelName="จังหวัด"
              margin="normal"
              defaultValue={provinceID}
              onChange={([selected]) => {
                return selected.value;
              }}
              error={!!errors.provinceID}
              inputRef={register({
                required: true,
              })}
              helperText={[
                errors.provinceID && errors.provinceID.type === "required" && (
                  <AlertText>
                    <IntlMessages id="input.required" />
                  </AlertText>
                ),
              ]}
            />
          </div>
          <div className="col-lg-4">
            <Controller
              fullWidth
              as={DistrictSelectOptions}
              control={control}
              reactSelectID={"districtID"}
              name={"districtID"}
              labelName="อำเภอ"
              margin="normal"
              defaultValue={districtID}
              onChange={([selected]) => {
                return selected.value;
              }}
              provinceID={watchProvince ? watchProvince : provinceID}
            />
          </div>
          <div className="col-lg-4">
            <Controller
              fullWidth
              as={SubDistrictSelectOptions}
              control={control}
              reactSelectID={"subDistrictID"}
              name={"subDistrictID"}
              labelName="ตำบล"
              margin="normal"
              defaultValue={subDistrictID}
              onChange={([selected]) => {
                return selected.value;
              }}
              provinceID={watchProvince ? watchProvince : provinceID}
              districtID={watchDistrict ? watchDistrict : districtID}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StepAddress;
