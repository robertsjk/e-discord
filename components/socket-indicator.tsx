"use client";

<<<<<<< HEAD
import { useSocket } from "@/components/providers/socket-provider";
import { Badge } from "@/components/ui/badge";
=======
import { useSocket } from "./providers/socket-provider";
import { Badge } from "./ui/badge";
>>>>>>> v-2

const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
<<<<<<< HEAD
      <Badge variant="outline" className="bg-yellow-600 text-white border-none">
        Offline: Polling every 1s
=======
      <Badge variant="outline" className="bg-rose-600 text-white border-none">
        Offline
>>>>>>> v-2
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className="bg-emerald-600 text-white border-none">
<<<<<<< HEAD
      Live: Real-time updates
=======
      Live
>>>>>>> v-2
    </Badge>
  );
};

export default SocketIndicator;
