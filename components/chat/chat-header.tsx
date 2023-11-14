import { Hash } from "lucide-react";
import MobileToggle from "../mobile-toggle";
import UserAvatar from "../user-avatar";
import SocketIndicator from "../socket-indicator";
import { ChatVideoButton } from "./chat-video-button";

type ChatHeaderProps = {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
  imageUrl?: string;
};

const ChatHeader = ({ serverId, name, type, imageUrl }: ChatHeaderProps) => {
  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 border-secondary border-b-2">
      <div className="md:hidden">
        <MobileToggle serverId={serverId} />
      </div>
      {type === "channel" && (
        <Hash className="w-5 h-5 text-foreground/50 mr-2" />
      )}
      {type === "conversation" && (
        <UserAvatar src={imageUrl} className="h-8 w-8 mr-2" />
      )}
      <p className="font-semibold text-md text-foreground">{name}</p>
      <div className="ml-auto flex items-center">
        {type === "conversation" && <ChatVideoButton />}
        <SocketIndicator />
      </div>
    </div>
  );
};

export default ChatHeader;
