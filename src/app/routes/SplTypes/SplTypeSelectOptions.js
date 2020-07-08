import React, { useEffect, useState } from "react";
import Select from "app/components/SelectOption";
import { getAllSplTypes } from "app/requests/SplTypes";

const SplTypeSelectOptions = ({
  onChange,
  value,
  labelName,
  reactSelectID,
  isClearable,
  ...other
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    loadSplTypesData();
    // eslint-disable-next-line
  }, []);

  const loadSplTypesData = async () => {
    const result = await getAllSplTypes();

    if (result && result.data.data !== undefined) {
      const options = result.data.data.map((b) => {
        return {
          value: b.id,
          label: b.nameTH,
        };
      });

      setOptions(options);
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
        // isClearable={isClearable}
        {...other}
      />
    </div>
  );
};

export default SplTypeSelectOptions;
