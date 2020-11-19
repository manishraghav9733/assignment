export const loginUser = () => {
  return {
    type: "LOGIN_USER"
  };
};
export const setUserAuthValue = (formValues) => {
  return {
    type: "SET_USER_AUTH",
    payload: formValues,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER"
  };
};
