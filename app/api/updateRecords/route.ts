import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest, res: NextResponse) {
  const session = await getServerSession(authOptions);
  const body = await req.json();
  const { userScore } = body;

  try {
    if (session) {
      const userInfo = await prisma.user.findFirst({
        where: { email: session?.user?.email },
      });

      const userUpdate = await prisma.user.update({
        where: {
          email: session?.user?.email!,
        },
        data: {
          highScore:
            userInfo?.highScore !== null &&
            userInfo?.highScore !== undefined &&
            userScore > userInfo?.highScore
              ? userScore
              : userInfo?.highScore,
        },
      });
      return NextResponse.json({ message: "Complete" });
    }
    return NextResponse.json({ message: "User not signed in" });
  } catch (e) {
    console.log(e);
  }
}
