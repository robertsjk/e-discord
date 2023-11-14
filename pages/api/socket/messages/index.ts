<<<<<<< HEAD
import { currentProfilePages } from "@/lib/current-profile-pages";
import db from "@/lib/db";
import { NextApiResponseServerIo } from "@/types";
import { NextApiRequest } from "next";

=======
import { NextApiRequest } from "next";

import { NextApiResponseServerIo } from "@/types";
import currentProfilePages from "@/lib/current-profile-pages";
import { db } from "@/lib/db";

>>>>>>> v-2
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIo
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const profile = await currentProfilePages(req);
<<<<<<< HEAD
    const { content, fileUrl } = req.body;
    const { serverId, channelId } = req.query;

    if (!profile) return res.status(401).json({ error: "Unauthorized" });
    if (!serverId) return res.status(400).json({ error: "Server id missing" });
    if (!channelId)
      return res.status(400).json({ error: "Channel id missing" });
=======

    if (!profile) return res.status(401).json({ error: "Unauthorized" });

    const { content, fileUrl } = req.body;
    const { serverId, channelId } = <{ serverId: string; channelId: string }>(
      req.query
    );

    if (!serverId) return res.status(400).json({ error: "Server ID missing" });
    if (!channelId)
      return res.status(400).json({ error: "Channel ID missing" });
>>>>>>> v-2
    if (!content) return res.status(400).json({ error: "Content missing" });

    const server = await db.server.findFirst({
      where: {
<<<<<<< HEAD
        id: serverId as string,
=======
        id: serverId,
>>>>>>> v-2
        members: {
          some: {
            profileId: profile.id,
          },
        },
      },
      include: {
        members: true,
      },
    });

<<<<<<< HEAD
    if (!server) {
      return res.status(404).json({ message: "Server not found" });
    }

    const channel = await db.channel.findFirst({
      where: {
        id: channelId as string,
        serverId: serverId as string,
      },
    });

    if (!channel) {
      return res.status(404).json({ message: "Channel not found" });
    }
=======
    if (!server) return res.status(404).json({ message: "Server not found" });

    const channel = await db.channel.findFirst({
      where: {
        id: channelId,
        serverId: serverId,
      },
    });

    if (!channel) return res.status(404).json({ message: "Channel not found" });
>>>>>>> v-2

    const member = server.members.find(
      (member) => member.profileId === profile.id
    );

<<<<<<< HEAD
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }
=======
    if (!member) return res.status(404).json({ message: "Member not found" });
>>>>>>> v-2

    const message = await db.message.create({
      data: {
        content,
        fileUrl,
<<<<<<< HEAD
        channelId: channelId as string,
=======
        channelId: channelId,
>>>>>>> v-2
        memberId: member.id,
      },
      include: {
        member: {
          include: {
            profile: true,
          },
        },
      },
    });

    const channelKey = `chat:${channelId}:messages`;

    res?.socket?.server?.io?.emit(channelKey, message);
<<<<<<< HEAD
=======
    res?.socket?.server?.io?.emit(channelKey, message);
>>>>>>> v-2

    return res.status(200).json(message);
  } catch (error) {
    console.log("[MESSAGES_POST]", error);
<<<<<<< HEAD
    res.status(500).json({ messages: "Internal Error" });
=======
    return res.status(500).json({ message: "Internal Error" });
>>>>>>> v-2
  }
}
