import { useEffect, useState } from "react";
import {
  getProviceByID,
  getDistrictByID,
  getSubDistrictByID,
} from "app/requests/Address";

export const GetProvinceName = (id) => {
  const [provinceName, setProvinceName] = useState(null);

  useEffect(() => {
    loadProvicesData(id);
    // eslint-disable-next-line
  }, [id]);

  const loadProvicesData = async (id) => {
    const result = await getProviceByID(id);

    if (result && result.data.data !== undefined) {
      const data = result.data.data;
      setProvinceName(data.nameTH);
    }
  };

  return provinceName;
};

export const GetDistrictName = (id) => {
  const [districtName, setDistrictName] = useState(null);

  useEffect(() => {
    loadDistrictData(id);
    // eslint-disable-next-line
  }, [id]);

  const loadDistrictData = async (id) => {
    const result = await getDistrictByID(id);

    if (result && result.data.data !== undefined) {
      const data = result.data.data;
      setDistrictName(data.nameTH);
    }
  };

  return districtName;
};

export const GetSubDistrictName = (id) => {
  const [subDistrictName, setSubDistrictName] = useState(null);

  useEffect(() => {
    loadSubDistrictData(id);
    // eslint-disable-next-line
  }, [id]);

  const loadSubDistrictData = async (id) => {
    const result = await getSubDistrictByID(id);

    if (result && result.data.data !== undefined) {
      const data = result.data.data;
      setSubDistrictName(data.nameTH);
    }
  };

  return subDistrictName;
};
