import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;
  console.log(`===> Fetching category: `, category);

  try {
    const response = await fetch(
      `${process.env.DUMMY_BASE_URL}/products/category/${category}`
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch category products", details: error },
      { status: 500 }
    );
  }
}
