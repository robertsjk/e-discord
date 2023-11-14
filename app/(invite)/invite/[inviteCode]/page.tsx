import { currentProfile } from "@/lib/current-profile";
<<<<<<< HEAD
import db from "@/lib/db";
=======
import { db } from "@/lib/db";
>>>>>>> v-2
import { initialProfile } from "@/lib/initial-profile";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

type InviteCodePageProps = {
  params: {
    inviteCode: string;
  };
};

<<<<<<< HEAD
const InviteCodePage = async ({ params }: InviteCodePageProps) => {
=======
const inviteCodePage = async ({ params }: InviteCodePageProps) => {
>>>>>>> v-2
  let profile = await currentProfile();

  if (!profile) {
    const { userId } = auth();
<<<<<<< HEAD
    if (userId) {
      profile = await initialProfile();
    } else {
      return redirectToSignIn();
    }
=======
    if (!userId) return redirectToSignIn();
    profile = await initialProfile();
>>>>>>> v-2
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

<<<<<<< HEAD
export default InviteCodePage;
=======
export default inviteCodePage;
>>>>>>> v-2
