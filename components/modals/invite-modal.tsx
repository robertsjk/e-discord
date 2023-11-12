"use client";

import { useModal } from "@/hooks/use-modal-store";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useState } from "react";
import { useOrigin } from "@/hooks/use-origin";
import axios from "axios";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check, Copy, RefreshCcw } from "lucide-react";

const InviteModal = () => {
  const { isOpen, type, onClose, onOpen, data } = useModal();
  const origin = useOrigin();

  const isModalOpen = isOpen && type === "invite";
  const { server } = data;

  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const inviteUrl = `${origin}/invite/${server?.inviteCode}`;

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const onNew = async () => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        `/api/servers/${server?.id}/invite-code`
      );

      onOpen("invite", { server: response.data });
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
          <DialogTitle>Invite Friends</DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <Label className="uppercase text-xs text-stone-600">
            Server Invite Link
          </Label>
          <div className="flex items-center mt-2 gap-x-2">
            <Input
              disabled={isLoading}
              value={inviteUrl}
              className="bg-stone-200 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button
              disabled={isLoading}
              size="icon"
              onClick={onCopy}
              className="hover:text-stone-600 transition"
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>
          <Button
            disabled={isLoading}
            onClick={onNew}
            variant="link"
            size="sm"
            className="text-xs text-stone-500 mt-4 hover:no-underline"
          >
            Generate a new link <RefreshCcw className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InviteModal;
