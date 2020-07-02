import React, { useEffect, useState } from "react";
import Select from "app/components/SelectOption";
import { getAllProvices } from "app/requests/Address";

const ProvinceSelectOptions = ({
  onChange,
  value,
  labelName,
  reactSelectID,
  isClearable,
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    loadProvicesData();
    // eslint-disable-next-line
  }, []);

  const loadProvicesData = async () => {
    const result = await getAllProvices();

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
        isClearable={isClearable}
      />
    </div>
  );
};

export default ProvinceSelectOptions;
