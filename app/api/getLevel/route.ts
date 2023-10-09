import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const levelData = await prisma.synonymLevels.findMany();
    return NextResponse.json(levelData);
  } catch (e) {
    return e;
  }
}
