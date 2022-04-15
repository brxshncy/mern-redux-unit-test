import React from "react";

const Login = React.lazy(() =>
  import("../containers/Login/Login").then(({ Login }) => ({
    default: Login,
  }))
);

const Register = React.lazy(() =>
  import("../containers/Register/Register").then(({ Register }) => ({
    default: Register,
  }))
);

const Tweets = React.lazy(() =>
  import("../containers/Tweets/Tweets").then(({ Tweets }) => ({
    default: Tweets,
  }))
);

export const privateRoutes = [
  {
    path: "/",
    element: <Tweets />,
  },
];
