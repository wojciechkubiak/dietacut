import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "@/store/Auth/actions";
import {
  AuthStatus,
  BodyType,
  Gender,
  Proportions,
  TokenData,
  UserLoginData,
  UserRegisterData,
} from "@/models/Auth";

interface InitialState {
  auth: TokenData;
  login: UserLoginData;
  register: UserRegisterData;
  error: string;
  isLoading: boolean;
}

const initialAuthData = {
  token: "",
  refreshToken: "",
  authStatus: AuthStatus.CHECKING,
};

const initialLoginData = {
  email: "",
  password: "",
};

const initialRegisterData = {
  email: "",
  password: "",
  name: "",
  gender: Gender.FEMALE,
  weight: 85,
  targetWeight: 79,
  reducedKcal: 500,
  height: 175,
  bodyType: BodyType.ECTOMORPH,
  proportions: {
    fat: 20,
    carbs: 50,
    proteins: 30,
  },
  birthday: new Date().toISOString(),
};

const initialState: InitialState = {
  auth: initialAuthData,
  login: initialLoginData,
  register: initialRegisterData,
  error: "",
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeAuthData(state, action: PayloadAction<Partial<TokenData>>) {
      state.auth = { ...state.auth, ...action.payload };
    },
    changeLoginData(state, action: PayloadAction<Partial<UserLoginData>>) {
      state.login = { ...state.login, ...action.payload };
    },
    changeRegisterData(
      state,
      action: PayloadAction<Partial<UserRegisterData>>,
    ) {
      state.register = { ...state.register, ...action.payload };
    },
    logOut(state) {
      state.register = initialRegisterData;
      state.login = initialLoginData;
      state.auth = {
        ...initialAuthData,
        authStatus: AuthStatus.NOT_AUTHENTICATED,
      };
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(loginUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = "";

      if (payload && typeof payload !== "string") {
        state.auth = payload;
        state.register = initialRegisterData;
        state.login = initialLoginData;
      } else if (payload === "string") {
        state.error = payload;
      }
    });
    addCase(loginUser.rejected, (state, result) => {
      state.isLoading = false;
      if (result.error.message) {
        state.error = result.error.message;
      }
    });
  },
});

export const { changeAuthData, changeLoginData, changeRegisterData, logOut } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
