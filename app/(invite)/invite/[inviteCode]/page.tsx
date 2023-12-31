import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

type InviteCodePageProps = {
  params: {
    inviteCode: string;
  };
};

const inviteCodePage = async ({ params }: InviteCodePageProps) => {
  let profile = await currentProfile();

  if (!profile) {
    const { userId } = auth();
    if (!userId) return redirectToSignIn();
    profile = await initialProfile();
  }

  if (!profile) return redirectToSignIn();
  if (!params.inviteCode) return redirect("/");

  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: params.inviteCode,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (existingServer) return redirect(`/servers/${existingServer.id}`);

  const server = await db.server.update({
    where: {
      inviteCode: params.inviteCode,
    },
    data: {
      members: {
        create: [
          {
            profileId: profile.id,
          },
        ],
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return null;
};

export default inviteCodePage;
