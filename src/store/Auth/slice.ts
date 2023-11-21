import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "@/store/Auth/actions";
import { AuthStatus } from "@/models/Auth";
import { Token } from "@/models/Token";
import { Activity, Gender } from "@/models/User";
import { LoginFormData } from "@/models/Login";
import { RegisterFormData } from "@/models/Register";

interface InitialState {
  authStatus: AuthStatus;
  auth: Token;
  login: LoginFormData;
  register: RegisterFormData;
  isLoading: boolean;
}

const initialAuthData = {
  token: "",
  refreshToken: "",
  expirationTime: 0,
  error: "",
};

const initialLoginFormData = {
  email: "",
  password: "",
};

const initialRegisterFormData: RegisterFormData = {
  email: "",
  password: "",
  name: "",
  gender: Gender.FEMALE,
  reducedKcal: 0,
  activityLevel: Activity.MEDIUM,
  proportions: {
    fat: {
      grams: 0,
      percentage: 20,
    },
    carbs: {
      grams: 0,
      percentage: 50,
    },
    proteins: {
      grams: 0,
      percentage: 30,
    },
  },
  birthday: new Date().toISOString(),
};

const initialState: InitialState = {
  authStatus: AuthStatus.CHECKING,
  auth: initialAuthData,
  login: initialLoginFormData,
  register: initialRegisterFormData,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeAuthData(state, action: PayloadAction<AuthStatus>) {
      state.authStatus = action.payload;
    },
    changeLoginData(state, action: PayloadAction<Partial<LoginFormData>>) {
      state.login = { ...state.login, ...action.payload };
    },
    changeRegisterData(
      state,
      action: PayloadAction<Partial<RegisterFormData>>
    ) {
      state.register = { ...state.register, ...action.payload };
    },
    logOut(state) {
      state.register = initialRegisterFormData;
      state.login = initialLoginFormData;
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

      state.login = initialLoginFormData;
      state.register = initialRegisterFormData;
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
