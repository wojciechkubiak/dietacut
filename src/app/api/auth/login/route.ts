import { ErrorData, TokenData, UserLoginData } from "@/models/Auth";
import { NextResponse } from "next/server";

export const POST = async (
  request: Request,
): Promise<NextResponse<TokenData | ErrorData>> => {
  const loginData: UserLoginData = await request.json();

  const isDataMissing = Object.values(loginData).some(
    (value) => !Boolean(value),
  );

  if (isDataMissing)
    return NextResponse.json({ error: "Missing required data" });

  return NextResponse.json({
    token: "test-token",
    refreshToken: "test-refresh-token",
    expirationTime: 3600,
  });
};
