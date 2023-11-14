<<<<<<< HEAD
import { initialProfile } from "@/lib/initial-profile";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import { InitialModal } from "@/components/modals/initial-modal";
=======
import InitialModal from "@/components/modals/initial-modal";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";
>>>>>>> v-2

const SetupPage = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

<<<<<<< HEAD
  if (server) {
    return redirect(`/servers/${server.id}`);
  }
=======
  if (server) return redirect(`/servers/${server.id}`);
>>>>>>> v-2

  return <InitialModal />;
};

export default SetupPage;
