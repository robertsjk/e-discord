import { currentProfile } from "@/lib/current-profile";
<<<<<<< HEAD
import db from "@/lib/db";
=======
import { db } from "@/lib/db";
>>>>>>> v-2
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function PATCH(
  req: Request,
  { params }: { params: { serverId: string } }
) {
  try {
    const profile = await currentProfile();

<<<<<<< HEAD
    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!params.serverId) {
      return new NextResponse("Server ID Missing", { status: 400 });
    }
=======
    if (!profile) return new NextResponse("Unauthorized", { status: 401 });
    if (!params.serverId)
      return new NextResponse("Server ID Missing", { status: 400 });
>>>>>>> v-2

    const server = await db.server.update({
      where: {
        id: params.serverId,
        profileId: profile.id,
      },
      data: {
        inviteCode: uuidv4(),
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log("[SERVER_ID]: ", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
