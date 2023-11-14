"use client";

import { cn } from "@/lib/utils";
import { Channel, ChannelType, MemberRole, Server } from "@prisma/client";
import { Edit, Hash, Mic, Trash, Video, Lock } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import ActionTooltip from "../action-tooltip";
import { ModalType, useModal } from "@/hooks/use-modal-store";

type ServerChannelProps = {
  channel: Channel;
  server: Server;
  role?: MemberRole;
};

const iconMap = {
  [ChannelType.TEXT]: Hash,
  [ChannelType.AUDIO]: Mic,
  [ChannelType.VIDEO]: Video,
};

const ServerChannel = ({ channel, server, role }: ServerChannelProps) => {
  const { onOpen } = useModal();
  const params = useParams();
  const router = useRouter();

  const Icon = iconMap[channel.type];

  const onClick = () => {
    router.push(`/servers/${params?.serverId}/channels/${channel.id}`);
  };

  const onAction = (e: React.MouseEvent, action: ModalType) => {
    e.stopPropagation();
    onOpen(action, { channel, server });
  };

  return (
    <button
      onClick={onClick}
      className={cn(

        
        "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-card-foreground/5 transition mb-1",
        params?.channelId === channel.id &&
          "bg-card-foreground/10 hover:bg-card-foreground/10"
      )}
    >
      <Icon className="flex-shrink-0 w-5 h-5 text-stone-500" />
      <p
        className={cn(
          "line-clamp-1 font-semibold text-sm text-card-foreground/80 group-hover:text-card-foreground/90 transition",
          params?.channelId === channel.id && "text-card-foreground/90"
        )}
      >
        {channel.name}
      </p>
      {channel.name !== "general" && role !== MemberRole.GUEST && (
        <div className="ml-auto flex items-center gap-x-2">
          <ActionTooltip label="Edit">
            <Edit
              onClick={(e) => onAction(e, "editChannel")}
              className="hidden group-hover:block w-4 h-4 text-card-foreground/50 hover:text-card-foreground transition"
            />
          </ActionTooltip>
          <ActionTooltip label="Delete">
            <Trash
              onClick={(e) => onAction(e, "deleteChannel")}
              className="hidden group-hover:block w-4 h-4 text-card-foreground/50 hover:text-card-foreground transition"
            />
          </ActionTooltip>
        </div>
      )}
      {channel.name === "general" && (
        <Lock className="ml-auto w-4 h-4 text-card-foreground/30" />
      )}
    </button>
  );
};

export default ServerChannel;
