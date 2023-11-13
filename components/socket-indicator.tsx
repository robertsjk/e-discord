"use client";

import { useSocket } from "./providers/socket-provider";
import { Badge } from "./ui/badge";

const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge variant="outline" className="bg-rose-600 text-white border-none">
        Offline
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className="bg-emerald-600 text-white border-none">
      Live
    </Badge>
  );
};

export default SocketIndicator;
