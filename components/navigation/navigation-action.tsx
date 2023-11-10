"use client";
import { Plus } from "lucide-react";
import ActionTooltip from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

const NavigationAction = () => {
  const { onOpen } = useModal();

  return (
    <ActionTooltip label="Add a server" align="center" side="right">
      <button
        className="group flex items-center"
        onClick={() => onOpen("createServer")}
      >
        <div className=" h-11 w-11 flex items-center justify-center bg-background rounded-[24px] group-hover:bg-emerald-500 group-hover:rounded-[16px] transition-all delay-100 overflow-hidden">
          <Plus size={25} />
        </div>
      </button>
    </ActionTooltip>
  );
};

export default NavigationAction;
