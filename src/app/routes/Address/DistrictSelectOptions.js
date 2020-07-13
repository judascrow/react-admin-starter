import React, { useEffect, useState } from "react";
import Select from "app/components/SelectOption";
import { getAllDistricts } from "app/requests/Address";

const DistrictSelectOptions = ({
  onChange,
  value,
  labelName,
  reactSelectID,
  isClearable,
  provinceID,
  ...other
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    loadDistrictsData(provinceID);
    // eslint-disable-next-line
  }, [provinceID]);

  const loadDistrictsData = async (provinceID) => {
    if (provinceID !== "" && provinceID !== undefined && provinceID != null) {
      const result = await getAllDistricts(provinceID);

      if (result && result.data.data !== undefined) {
        const options = result.data.data.map((b) => {
          return {
            value: b.id,
            label: b.nameTH,
          };
        });

        setOptions(options);
      }
    } else {
      setOptions([]);
    }
  };

  return (
    <div>
      <Select
        options={options}
        onChange={onChange}
        value={options.find((s) => s.value === value)}
        labelName={labelName}
        reactSelectID={reactSelectID}
        //isClearable={isClearable}
        {...other}
      />
    </div>
  );
};

export default DistrictSelectOptions;
