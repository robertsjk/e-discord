import { SocketProvider } from "@/components/providers/socket-provider";
import ServerSidebar from "@/components/server/server-sidebar";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const ServerIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { serverId: string };
}) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (!server) {
    return redirect("/");
  }

  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-20">
        <ServerSidebar serverId={params.serverId} />
      </div>
      <SocketProvider>
        <main className="h-full md:pl-60">{children}</main>
      </SocketProvider>
    </div>
  );
};

export default ServerIdLayout;
