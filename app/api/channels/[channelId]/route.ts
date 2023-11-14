import { NextResponse } from "next/server";
import { currentProfile } from "@/lib/current-profile";
<<<<<<< HEAD
import db from "@/lib/db";
=======
import { db } from "@/lib/db";
>>>>>>> v-2
import { MemberRole } from "@prisma/client";

export async function DELETE(
  req: Request,
  { params }: { params: { channelId: string } }
) {
  try {
    const profile = await currentProfile();
    const { searchParams } = new URL(req.url);

    const serverId = searchParams.get("serverId");

<<<<<<< HEAD
    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!serverId) {
      return new NextResponse("Server ID missing", { status: 400 });
    }
    if (!params.channelId) {
      return new NextResponse("Channel ID missing", { status: 400 });
    }
=======
    if (!profile) return new NextResponse("Unauthorized", { status: 401 });
    if (!serverId)
      return new NextResponse("Server ID missing", { status: 400 });
    if (!params.channelId)
      return new NextResponse("Channel ID missing", { status: 400 });
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
          delete: {
            id: params.channelId,
            name: {
              not: "general",
            },
          },
        },
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log("[CHANNEL_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
<<<<<<< HEAD
=======

>>>>>>> v-2
export async function PATCH(
  req: Request,
  { params }: { params: { channelId: string } }
) {
  try {
    const profile = await currentProfile();
    const { name, type } = await req.json();
    const { searchParams } = new URL(req.url);

    const serverId = searchParams.get("serverId");

<<<<<<< HEAD
    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!serverId) {
      return new NextResponse("Server ID missing", { status: 400 });
    }
    if (!params.channelId) {
      return new NextResponse("Channel ID missing", { status: 400 });
    }
    if (name === "general") {
      return new NextResponse("Name cannot be 'general'", { status: 400 });
    }
=======
    if (!profile) return new NextResponse("Unauthorized", { status: 401 });
    if (!serverId)
      return new NextResponse("Server ID missing", { status: 400 });
    if (!params.channelId)
      return new NextResponse("Channel ID missing", { status: 400 });
    if (name === "general")
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
          update: {
            where: {
              id: params.channelId,
              NOT: {
                name: "general",
              },
            },
            data: {
              name,
              type,
            },
          },
        },
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log("[CHANNEL_ID_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
