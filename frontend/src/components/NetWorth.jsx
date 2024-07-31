import { useState, useEffect } from "react";
import axiosInstance from "../axios/axios.jsx";
import Areachart from "./Areachart.jsx";

const NetWorth = () => {
  const [networth, setNetworth] = useState("");

  const calcNetworth = (assets, liabilities) => {
    let totalAssets = 0;
    let totalLiabs = 0;
    assets.data.data.forEach((asset) => {
      totalAssets += asset.value;
    });

    liabilities.data.data.forEach((liab) => {
      totalLiabs += liab.value;
    });

    const newNetworth = totalAssets - totalLiabs;

    setNetworth(newNetworth);
  };

  useEffect(() => {
    let assets = {};
    let liabilities = {};
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("login");
        assets = await axiosInstance.get("/assets", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        liabilities = await axiosInstance.get("/liabilities", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        calcNetworth(assets, liabilities);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-center text-6xl">Networth</h1>
      <h1 className="text-center text-6xl">{networth}</h1>
      <Areachart data={networth} />
    </>
  );
};

export default NetWorth;
