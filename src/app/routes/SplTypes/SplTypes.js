import { useEffect, useState } from "react";
import { GetSplTypeByID, GetSplSubTypeByID } from "app/requests/SplTypes";

export const GetSplType = (id) => {
  const [splTypeName, setSplTypeName] = useState(null);

  useEffect(() => {
    if (id !== "" && id !== null && id !== undefined) {
      loadSplTypeData(id);
      // eslint-disable-next-line
    }
  }, [id]);

  const loadSplTypeData = async (id) => {
    const result = await GetSplTypeByID(id);

    if (result && result.data.data !== undefined) {
      const data = result.data.data;
      setSplTypeName(data.nameTH);
    }
  };

  return splTypeName;
};

export const GetSplSubType = (id) => {
  const [splSubTypeName, setSplSubTypeName] = useState(null);

  useEffect(() => {
    if (id !== "" && id !== null && id !== undefined) {
      loadSplSubTypeData(id);
      // eslint-disable-next-line
    }
  }, [id]);

  const loadSplSubTypeData = async (id) => {
    const result = await GetSplSubTypeByID(id);

    if (result && result.data.data !== undefined) {
      const data = result.data.data;
      setSplSubTypeName(data.nameTH);
    }
  };

  return splSubTypeName;
};
