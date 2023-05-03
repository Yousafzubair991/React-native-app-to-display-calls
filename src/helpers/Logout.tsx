import { Dispatch } from "@reduxjs/toolkit";
import authToken from "../api/authToken";
import { removeJwtToken } from "../store/jwt.slice";

export const LogoutFun = async (dispatch: Dispatch) => {
  console.log("called");
  await authToken.removeToken();
  dispatch(removeJwtToken());
};
