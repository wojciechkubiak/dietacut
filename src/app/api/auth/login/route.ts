import { NextResponse } from "next/server";

import { Token } from "@/models/Token";
import { LoginFormData } from "@/models/Login";

import errorResponse from "@/mocks/login/error.json";
import successResponse from "@/mocks/login/success.json";

export const POST = async (request: Request): Promise<NextResponse<Token>> => {
  const loginData: LoginFormData = await request.json();

  const isDataMissing = Object.values(loginData).some(
    (value) => !Boolean(value)
  );

  if (isDataMissing) return NextResponse.json(errorResponse);

  return NextResponse.json(successResponse);
};
