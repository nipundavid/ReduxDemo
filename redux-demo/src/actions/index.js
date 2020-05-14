export const increment = (arg) => {
  return {
    type: "INCREMENT",
    payload: arg,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const SignIn = () => {
  return {
    type: "SIGN_IN",
  };
};