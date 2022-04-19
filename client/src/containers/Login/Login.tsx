import React, { useState } from "react";
import { useSelector } from "react-redux";
import { REST } from "../../service/REST/rest";

export const Login = () => {
  const tweets = useSelector(({ tweets }) => tweets);

  const [lognFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  console.log("tweets", tweets);

  const login = async () => {
    try {
      const { data } = await REST.post(`/api/login`, lognFormData);
      console.log("data >>", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <input
        type={"text"}
        onChange={(e) =>
          setLoginFormData({
            ...lognFormData,
            email: e.target.value,
          })
        }
      />
      <input
        type={"password"}
        onChange={(e) =>
          setLoginFormData({
            ...lognFormData,
            password: e.target.value,
          })
        }
      />

      <button onClick={login}>Login</button>
    </>
  );
};
