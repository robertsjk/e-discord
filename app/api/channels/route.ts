import { currentProfile } from "@/lib/current-profile";
<<<<<<< HEAD
import db from "@/lib/db";
=======
import { db } from "@/lib/db";
>>>>>>> v-2
import { MemberRole } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
<<<<<<< HEAD
=======
    console.log(1);

>>>>>>> v-2
    const profile = await currentProfile();
    const { name, type } = await req.json();
    const { searchParams } = new URL(req.url);

    const serverId = searchParams.get("serverId");

<<<<<<< HEAD
    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!searchParams) {
      return new NextResponse("Missing server ID", { status: 400 });
    }
    if (!serverId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (name == "general") {
      return new NextResponse("Name cannot be 'general'", { status: 400 });
    }
=======
    if (!profile) return new NextResponse("Unauthorized", { status: 401 });
    if (!searchParams)
      return new NextResponse("Missing server ID", { status: 400 });
    if (!serverId) return new NextResponse("Unauthorized", { status: 401 });
    if (name == "general")
      return new NextResponse("Name cannot be 'general'", { status: 400 });
>>>>>>> v-2

    const server = await db.server.update({
      where: {
        id: serverId,
        members: {
          some: {
            profileId: profile.id,
            role: {
              in: [MemberRole.ADMIN, MemberRole.MODERATOR],
            },
          },
        },
      },
      data: {
        channels: {
          create: {
            profileId: profile.id,
            name,
            type,
          },
        },
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log("CHANNELS_POST", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
