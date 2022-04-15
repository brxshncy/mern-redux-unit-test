import React from "react";
import { useSelector } from "react-redux";

export const Login = () => {
  const tweets = useSelector(({ tweets }) => tweets);

  console.log("tweets", tweets);
  return <div>Login</div>;
};
