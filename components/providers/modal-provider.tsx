"use client";

import { useEffect, useState } from "react";
import { CreateServerModal } from "../modals/create-server-modal";

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
    </>
  );
};

export default ModalProvider;
