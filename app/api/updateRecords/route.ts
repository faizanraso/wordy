import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import {
  updateAvgScore,
  updateUserAvgResponseTime,
  updateUserGamesPlayed,
  updateUserHighScore,
} from "@/app/utils/game-end";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const body = await req.json();
  const { userScore, avgResponse } = body;

  try {
    if (session) {
      const userInfo = await prisma.user.findFirst({
        where: { email: session?.user?.email },
      });

      const newUserGamesPlayed: number = updateUserGamesPlayed(
        userInfo?.gamesPlayed!
      );

      const newHighScore: number = updateUserHighScore(
        userInfo?.highScore!,
        userScore
      );

      const newavgResponse: number = updateUserAvgResponseTime(
        userInfo?.avgResponseTime!,
        avgResponse
      );
      const newAvgScore: number = updateAvgScore(
        userInfo?.avgScore!,
        userScore
      );

      const userUpdate = await prisma.user.update({
        where: {
          email: session?.user?.email!,
        },
        data: {
          gamesPlayed: newUserGamesPlayed,
          highScore: newHighScore,
          avgResponseTime: newavgResponse,
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
