import { NextResponse } from "next/server";

import { TokenData } from "@/models/Auth";
import errorResponse from "@/mocks/loading-error.json";
import successResponse from "@/mocks/loading-success.json";
import { UserLoginData } from "@/models/Login";

export const POST = async (
  request: Request
): Promise<NextResponse<TokenData>> => {
  const loginData: UserLoginData = await request.json();

  const isDataMissing = Object.values(loginData).some(
    (value) => !Boolean(value)
  );

  if (isDataMissing) return NextResponse.json(errorResponse);

  return NextResponse.json(successResponse);
};
