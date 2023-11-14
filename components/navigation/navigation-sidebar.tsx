import { currentProfile } from "@/lib/current-profile";
<<<<<<< HEAD
import db from "@/lib/db";
import { redirect } from "next/navigation";
import { NavigationAction } from "./navigation-action";
=======
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
>>>>>>> v-2
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import NavigationItem from "./navigation-item";
import { ModeToggle } from "../mode-toggle";
import { UserButton } from "@clerk/nextjs";
<<<<<<< HEAD
=======
import NavigationAction from "./navigation-action";
>>>>>>> v-2

const NavigationSidebar = async () => {
  const profile = await currentProfile();

<<<<<<< HEAD
  if (!profile) {
    return redirect("/");
  }
=======
  if (!profile) return redirect("/");
>>>>>>> v-2

  const servers = await db.server.findMany({
    where: {
      members: {
        some: { profileId: profile.id },
      },
    },
  });

  return (
<<<<<<< HEAD
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3">
      <NavigationAction />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
=======
    <div className="bg-secondary space-y-4 h-full w-full  flex flex-col items-center pt-1 text-secondary-foreground">
      <NavigationAction />
      <Separator className="h-[2px] w-10 bg-background rounded-md" />
>>>>>>> v-2
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
<<<<<<< HEAD
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4 h-">
=======
      <div className="pb-3 flex items-center flex-col gap-y-4">
>>>>>>> v-2
        <ModeToggle />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
<<<<<<< HEAD
              avatarBox: "h-12 w-12",
=======
              avatarBox: "h-10 w-10",
>>>>>>> v-2
            },
          }}
        />
      </div>
    </div>
  );
};

export default NavigationSidebar;
