"use client";

<<<<<<< HEAD
=======
import { useModal } from "@/hooks/use-modal-store";
>>>>>>> v-2
import { ServerWithMembersWithProfiles } from "@/types";
import { ChannelType, MemberRole } from "@prisma/client";
import ActionTooltip from "../action-tooltip";
import { Plus, Settings } from "lucide-react";
<<<<<<< HEAD
import { useModal } from "@/hooks/use-modal-store";
=======
>>>>>>> v-2

type ServerSectionProps = {
  label: string;
  role?: MemberRole;
  sectionType: "channels" | "members";
  channelType?: ChannelType;
  server?: ServerWithMembersWithProfiles;
};

<<<<<<< HEAD
export const ServerSection = ({
=======
const ServerSection = ({
>>>>>>> v-2
  label,
  role,
  sectionType,
  channelType,
  server,
}: ServerSectionProps) => {
  const { onOpen } = useModal();

  return (
    <div className="flex items-center justify-between py-2">
<<<<<<< HEAD
      <p className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400">
=======
      <p className="text-xs uppercase font-semibold text-card-foreground/90 ">
>>>>>>> v-2
        {label}
      </p>
      {role !== MemberRole.GUEST && sectionType === "channels" && (
        <ActionTooltip label="Create Channel" side="top">
          <button
            onClick={() => onOpen("createChannel", { channelType })}
<<<<<<< HEAD
            className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
=======
            className="text-card-foreground/50 hover:text-card-foreground transition"
>>>>>>> v-2
          >
            <Plus className="h-4 w-4" />
          </button>
        </ActionTooltip>
      )}
      {role === MemberRole.ADMIN && sectionType === "members" && (
        <ActionTooltip label="Manage Members" side="top">
          <button
            onClick={() => onOpen("members", { server })}
<<<<<<< HEAD
            className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
=======
            className="text-card-foreground/50 hover:text-card-foreground transition"
>>>>>>> v-2
          >
            <Settings className="h-4 w-4" />
          </button>
        </ActionTooltip>
      )}
    </div>
  );
};
<<<<<<< HEAD
=======

export default ServerSection;
>>>>>>> v-2
