// support with HTTP method
// GET, POST, PUT,PATCH, DELETE, UPDATE, OPTION, HEADER

import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const cookies = req.cookies.get("koko-secret");
  return NextResponse.json(cookies);
}
