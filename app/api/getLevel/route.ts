import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const levelData = await prisma.levels.findMany();
    return NextResponse.json(levelData);
  } catch (e) {
    return e;
  }
}
