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

export const DeleteMessageModal = () => {
  const { isOpen, type, onClose, onOpen, data } = useModal();

  const isModalOpen = isOpen && type === "deleteMessage";
  const { apiUrl, query } = data;
=======
import qs from "query-string";
import { useState } from "react";
import axios from "axios";
import { Button } from "../ui/button";

const DeleteMessageModal = () => {
  const {
    isOpen,
    type,
    onClose,
    onOpen,
    data: { apiUrl, query },
  } = useModal();

  const isModalOpen = isOpen && type === "deleteMessage";
>>>>>>> v-2

  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);
      const url = qs.stringifyUrl({
        url: apiUrl || "",
        query,
      });

      await axios.delete(url);
      onClose();
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
            Delete Message
          </DialogTitle>
<<<<<<< HEAD
          <DialogDescription className="text-center text-zinc-500">
=======
          <DialogDescription className="text-center text-stone-600">
>>>>>>> v-2
            Are you sure you want to do this <br />
            The message will be permanently deleted. ?
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

export default DeleteMessageModal;
>>>>>>> v-2
