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
