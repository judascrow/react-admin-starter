import React, { useEffect, useState } from "react";
import Select from "app/components/SelectOption";
import { getAllSplSubTypes } from "app/requests/SplTypes";

const SplSubTypeSelectOptions = ({
  onChange,
  value,
  labelName,
  reactSelectID,
  isClearable,
  splTypeID,
  ...other
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    loadSplSubTypesData(splTypeID);
    // eslint-disable-next-line
  }, [splTypeID]);

  const loadSplSubTypesData = async (splTypeID) => {
    if (splTypeID !== undefined) {
      const result = await getAllSplSubTypes(splTypeID);

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
        // isClearable={isClearable}
        {...other}
      />
    </div>
  );
};

export default SplSubTypeSelectOptions;
