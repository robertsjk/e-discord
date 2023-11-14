import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import NavigationItem from "./navigation-item";
import { ModeToggle } from "../mode-toggle";
import { UserButton } from "@clerk/nextjs";
import NavigationAction from "./navigation-action";

const NavigationSidebar = async () => {
  const profile = await currentProfile();

  if (!profile) return redirect("/");

  const servers = await db.server.findMany({
    where: {
      members: {
        some: { profileId: profile.id },
      },
    },
  });

  return (
    <div className="bg-secondary space-y-4 h-full w-full  flex flex-col items-center pt-1 text-secondary-foreground">
      <NavigationAction />
      <Separator className="h-[2px] w-10 bg-background rounded-md" />
      <ScrollArea className="flex-1 w-full">
        {servers.map((server) => (
          <div key={server.id} className="mb-4">
            <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
      <div className="pb-3 flex items-center flex-col gap-y-4">
        <ModeToggle />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-10 w-10",
            },
          }}
        />
      </div>
    </div>
  );
};

export default NavigationSidebar;
