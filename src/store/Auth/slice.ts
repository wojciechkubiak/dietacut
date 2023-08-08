import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAuthToken } from "@/store/Auth/actions";

const initialState = {
  email: "",
  password: "",
  token: "",
  error: "",
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    changePassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchAuthToken.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(fetchAuthToken.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = "";

      if (payload && typeof payload !== "string") {
        state.token = payload;
      } else if (payload === "string") {
        state.error = payload;
      }
    });
    addCase(fetchAuthToken.rejected, (state, result) => {
      state.isLoading = false;
      if (result.error.message) {
        state.error = result.error.message;
      }
    });
  },
});

export const { changeEmail, changePassword } = authSlice.actions;
export const authReducer = authSlice.reducer;
