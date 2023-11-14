<<<<<<< HEAD
import { Channel, ChannelType, Member, Server } from "@prisma/client";
=======
import { Channel, ChannelType, Server } from "@prisma/client";
>>>>>>> v-2
import { create } from "zustand";

export type ModalType =
  | "createServer"
  | "invite"
  | "editServer"
  | "members"
  | "createChannel"
  | "leaveServer"
  | "deleteServer"
  | "deleteChannel"
  | "editChannel"
  | "messageFile"
  | "deleteMessage";

<<<<<<< HEAD
interface ModalData {
  server?: Server;
  channel?: Channel;
  channelType?: ChannelType;
  apiUrl?: string;
  query?: Record<string, any>;
}
=======
type ModalData = {
  apiUrl?: string;
  query?: Record<string, any>;
  server?: Server;
  channel?: Channel;
  channelType?: ChannelType;
};
>>>>>>> v-2

type ModalStore = {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
};

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
<<<<<<< HEAD
  onOpen: (type, data) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
=======
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false, data: {} }),
>>>>>>> v-2
}));
