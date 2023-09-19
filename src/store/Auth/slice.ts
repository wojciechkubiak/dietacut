import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "@/store/Auth/actions";
import {
  AuthStatus,
  TokenData,
  UserLoginData,
  UserRegisterData,
} from "@/models/Auth";
import { Activity, BodyType, Gender } from "@/models/User";

interface InitialState {
  authStatus: AuthStatus;
  auth: TokenData;
  login: UserLoginData;
  register: UserRegisterData;
  isLoading: boolean;
}

const initialAuthData = {
  token: "",
  refreshToken: "",
  expirationTime: 0,
  error: "",
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
  activity: Activity.MEDIUM,
  proportions: {
    fat: 20,
    carbs: 50,
    proteins: 30,
  },
  birthday: new Date().toISOString(),
};

const initialState: InitialState = {
  authStatus: AuthStatus.CHECKING,
  auth: initialAuthData,
  login: initialLoginData,
  register: initialRegisterData,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeAuthData(state, action: PayloadAction<AuthStatus>) {
      state.authStatus = action.payload;
    },
    changeLoginData(state, action: PayloadAction<Partial<UserLoginData>>) {
      state.login = { ...state.login, ...action.payload };
    },
    changeRegisterData(
      state,
      action: PayloadAction<Partial<UserRegisterData>>
    ) {
      state.register = { ...state.register, ...action.payload };
    },
    logOut(state) {
      state.register = initialRegisterData;
      state.login = initialLoginData;
      state.authStatus = AuthStatus.NOT_AUTHENTICATED;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    addCase(loginUser.fulfilled, (state, { payload }) => {
      state.authStatus = payload.token
        ? AuthStatus.AUTHENTICATED
        : AuthStatus.NOT_AUTHENTICATED;

      state.auth = payload;

      state.login = initialLoginData;
      state.register = initialRegisterData;
      state.isLoading = false;
    });
    addCase(loginUser.rejected, (state, { error }) => {
      state.isLoading = false;
      if (error.message) {
        state.auth.error = error.message;
      }
    });
  },
});

export const { changeAuthData, changeLoginData, changeRegisterData, logOut } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
