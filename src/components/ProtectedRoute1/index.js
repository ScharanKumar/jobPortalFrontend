import { Route } from "react-router-dom";
// import { Redirect } from "react-router-dom";
// import Cookies from "js-cookie";

const ProtectedRoute1 = (props) => {
//   const token = Cookies.get("jwt_token1");
//   if (token === undefined) {
//     return <Redirect to="/admin/login" />;
//   }
  return <Route {...props} />;
};

export default ProtectedRoute1;