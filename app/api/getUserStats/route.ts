import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  try {
    if (session) {
      const userInfo = await prisma.user.findFirst({
        where: { email: session.user?.email },
      });

      return NextResponse.json({
        userGamesPlayed: userInfo?.gamesPlayed,
        userHighScore: userInfo?.highScore,
        userAvgScore: userInfo?.avgScore,
        userResponseTime: userInfo?.avgResponseTime,
      });
    }

    return NextResponse.json({ message: "No user logged in" });
  } catch (e) {
    console.log(e);
  }
}
