import { configureStore } from "@reduxjs/toolkit";
import authReducer, {
  checkTokenExpirationMiddleware,
} from "./slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(checkTokenExpirationMiddleware);
  },
});

export default store;
