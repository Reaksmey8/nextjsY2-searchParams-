import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get("category");
  console.log(`===> Category query: `, category);

  try {
    const url = category
      ? `${process.env.DUMMY_BASE_URL}/products/category/${category}`
      : `${process.env.DUMMY_BASE_URL}/products/categories`;
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
