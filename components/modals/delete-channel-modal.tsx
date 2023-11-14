"use client";
<<<<<<< HEAD

import qs from "query-string";
=======
import { useModal } from "@/hooks/use-modal-store";
>>>>>>> v-2
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
<<<<<<< HEAD
import { useModal } from "@/hooks/use-modal-store";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

export const DeleteChannelModal = () => {
  const { isOpen, type, onClose, onOpen, data } = useModal();
  const router = useRouter();

  const isModalOpen = isOpen && type === "deleteChannel";
  const { server, channel } = data;
=======
import { useRouter } from "next/navigation";
import { useState } from "react";
import qs from "query-string";
import axios from "axios";
import { Button } from "../ui/button";

const DeleteChannelModal = () => {
  const {
    isOpen,
    type,
    onClose,
    onOpen,
    data: { server, channel },
  } = useModal();
  const router = useRouter();

  const isModalOpen = isOpen && type === "deleteChannel";
>>>>>>> v-2

  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);
      const url = qs.stringifyUrl({
        url: `/api/channels/${channel?.id}`,
        query: {
          serverId: server?.id,
        },
      });

      await axios.delete(url);
<<<<<<< HEAD
      onClose();
      router.refresh();
=======
      router.refresh();
      onClose();
>>>>>>> v-2
      router.push(`/servers/${server?.id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden rounded-md">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Delete Channel
          </DialogTitle>
<<<<<<< HEAD
          <DialogDescription className="text-center text-zinc-500">
=======
          <DialogDescription className="text-center text-stone-600">
>>>>>>> v-2
            Are you sure you want to do this{" "}
            <span className="font-semibold text-indigo-500">
              #{channel?.name}
            </span>{" "}
            will be permanently deleted. ?
          </DialogDescription>
        </DialogHeader>
<<<<<<< HEAD
        <DialogFooter className="bg-gray-100 px-6 py-4">
=======
        <DialogFooter className="px-6 py-4">
>>>>>>> v-2
          <div className="flex items-center justify-between w-full">
            <Button disabled={isLoading} onClick={onClose} variant="ghost">
              Cancel
            </Button>
            <Button disabled={isLoading} onClick={onClick} variant="primary">
              Confirm
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
<<<<<<< HEAD
=======

export default DeleteChannelModal;
>>>>>>> v-2
