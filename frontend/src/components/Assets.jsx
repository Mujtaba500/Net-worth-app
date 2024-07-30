import axiosInstance from "../axios/axios.jsx";
import { useState } from "react";

const Assets = () => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleBtnClick = async () => {
    const token = sessionStorage.getItem("login");
    const data = {
      name,
      value,
    };
    const response = await axiosInstance.post("/asset", data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log("response: ", response);
  };

  return (
    <>
      <h1>Assets</h1>

      <input
        type="text"
        value={name}
        placeholder="Name"
        className="input input-bordered w-full max-w-xs"
        onChange={handleName}
      />
      <input
        type="text"
        placeholder="Enter Value"
        value={value}
        className="input input-bordered w-full max-w-xs"
        onChange={handleChange}
      />
      <button className="btn" onClick={handleBtnClick}>
        Add
      </button>
    </>
  );
};

export default Assets;
