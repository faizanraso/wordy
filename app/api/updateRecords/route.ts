import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const body = await req.json();
  const { userScore, avgResponseTime } = body;

  try {
    if (session) {
      const userInfo = await prisma.user.findFirst({
        where: { email: session?.user?.email },
      });

      const newUserGamesPlayed: number = userInfo?.gamesPlayed
        ? userInfo.gamesPlayed + 1
        : 1;

      const newHighScore: number =
        userInfo?.highScore && userScore > userInfo.highScore
          ? userScore
          : userInfo?.highScore;

      const newAvgResponseTime: number = userInfo?.avgResponseTime
        ? (userInfo.avgResponseTime + avgResponseTime) / 2
        : avgResponseTime;

      const newAvgScore: number =
        newUserGamesPlayed >= 1
          ? (userScore + userInfo?.avgScore) / 2
          : userScore;

      const userUpdate = await prisma.user.update({
        where: {
          email: session?.user?.email!,
        },
        data: {
          gamesPlayed: newUserGamesPlayed,
          highScore: newHighScore,
          avgResponseTime: newAvgResponseTime,
          avgScore: newAvgScore,
        },
      });

      if (userInfo?.role !== "admin") {
        const addGameRecord = await prisma.totalGames.create({});
      }

      return NextResponse.json({ message: "Complete" });
    }

    const addGameRecord = await prisma.totalGames.create({});

    return NextResponse.json({ message: "User not signed in" });
  } catch (e) {
    console.log(e);
  }
}
