import React, { useEffect, useState } from "react";
import Select from "app/components/SelectOption";
import { getAllSubDistricts } from "app/requests/Address";

const SubDistrictSelectOptions = ({
  onChange,
  value,
  labelName,
  reactSelectID,
  isClearable,
  provinceID,
  districtID,
  ...other
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    loadSubDistrictsData(provinceID, districtID);
    // eslint-disable-next-line
  }, [provinceID, districtID]);

  const loadSubDistrictsData = async (provinceID, districtID) => {
    console.log(provinceID, districtID);
    if (provinceID !== undefined && districtID !== undefined) {
      const result = await getAllSubDistricts(provinceID, districtID);

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
        isClearable={isClearable}
        {...other}
      />
    </div>
  );
};

export default SubDistrictSelectOptions;
