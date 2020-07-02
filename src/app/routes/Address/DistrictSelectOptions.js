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
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    loadDistrictsData(provinceID);
    // eslint-disable-next-line
  }, [provinceID]);

  const loadDistrictsData = async (provinceID) => {
    if (provinceID !== undefined) {
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
        isClearable={isClearable}
      />
    </div>
  );
};

export default DistrictSelectOptions;
