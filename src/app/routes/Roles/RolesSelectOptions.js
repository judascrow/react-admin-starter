import React, { useEffect, useState } from "react";
import Select from "app/common/SelectOption";
import { getAllRoles } from "app/requests/Roles";

const RolesSelectOptions = ({
  onChange,
  value,
  labelName,
  reactSelectID,
  isClearable,
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    loadRolesData();
    // eslint-disable-next-line
  }, []);

  const loadRolesData = async () => {
    const result = await getAllRoles();

    if (result.data.data !== undefined) {
      const options = result.data.data.map((b) => {
        return {
          value: b.id,
          label: b.name,
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
        // value={options.length > 0 ? options.find((s) => s.value === value) : {}}
        labelName={labelName}
        reactSelectID={reactSelectID}
        isClearable={isClearable}
      />
    </div>
  );
};

export default RolesSelectOptions;
