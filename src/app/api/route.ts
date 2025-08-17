import { NextResponse } from "next/server";
import sales from "@/data/sales.json"

export async function GET() {
  return NextResponse.json(sales);
}