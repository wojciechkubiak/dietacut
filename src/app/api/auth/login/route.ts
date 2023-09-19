import { ErrorData, TokenData, UserLoginData } from "@/models/Auth";
import { NextResponse } from "next/server";

const DEFAULT_RESPONSE: TokenData = {
  error: "",
  token: "",
  refreshToken: "",
  expirationTime: 0,
};

export const POST = async (
  request: Request
): Promise<NextResponse<TokenData>> => {
  const loginData: UserLoginData = await request.json();

  const isDataMissing = Object.values(loginData).some(
    (value) => !Boolean(value)
  );

  if (isDataMissing)
    return NextResponse.json({
      ...DEFAULT_RESPONSE,
      error: "Missing required data",
    });

  return NextResponse.json({
    ...DEFAULT_RESPONSE,
    token: "test-token",
    refreshToken: "test-refresh-token",
    expirationTime: 3600,
  });
};
