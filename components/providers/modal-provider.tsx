"use client";

import { useEffect, useState } from "react";
import { CreateServerModal } from "../modals/create-server-modal";
import { InviteModal } from "../modals/invite-modal";
import { EditServerModal } from "../modals/edit-server-modal";
import { MembersModal } from "../modals/members-modal";
import { CreateChannelModal } from "../modals/create-channel-modal";
import { LeaveServerModal } from "../modals/leave-server-modal";
import { DeleteServerModal } from "../modals/delete-server-modal";

const ModalProvider = () => {
  // hydration error handling
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
    </>
  );
};

export default ModalProvider;
