import { NextProxy, NextResponse } from "next/server";

export const middleware: NextProxy = async (request) => {
  const forwardedFor = request.headers.get('x-forwarded-for')

  const realIp = request.headers.get('x-real-ip')

  return NextResponse.json({
    forwardedFor,
    realIp
  })
};