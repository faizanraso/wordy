import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const highScore = await prisma.user.findMany({
      select: {
        name: true,
        highScore: true,
      },
      orderBy: { highScore: "desc" },
      take: 5,
    });

    const avgScore = await prisma.user.findMany({
      select: {
        name: true,
        avgScore: true,
      },
      orderBy: { avgScore: "desc" },
      take: 5,
    });

    const avgResponseTime = await prisma.user.findMany({
      select: {
        name: true,
        avgResponseTime: true,
      },
      orderBy: { avgResponseTime: "asc" },
      take: 5,
    });
    
    return NextResponse.json({
      highScoreData: highScore,
      avgScoreData: avgScore,
      avgResponseTimeData: avgResponseTime,
    });
  } catch (e) {
    console.log(e);
  }
}
