const initialState = {
  auth: false,
  email: "",
  check: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      const { email } = action.payload;
      return { email, auth: true, check: false };
    case "LOGOUT":
      return { ...initialState, check: false };
    default:
      return initialState;
  }
};

export default userReducer;
