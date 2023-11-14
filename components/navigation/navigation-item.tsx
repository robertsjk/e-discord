"use client";

import { useParams, useRouter } from "next/navigation";
import ActionTooltip from "../action-tooltip";
import Image from "next/image";
import { cn } from "@/lib/utils";

type NavigationItemProps = {
  id: string;
  imageUrl: string;
  name: string;
};

const NavigationItem = ({ id, imageUrl, name }: NavigationItemProps) => {
  const params = useParams();
  const router = useRouter();
  const onClick = () => {
    router.push(`/servers/${id}`);
  };

  return (
    <ActionTooltip label={name} side="right" align="center">
      <button className="group flex items-center relative" onClick={onClick}>
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-1",
            params?.serverId !== id && "group-hover:h-5",
            params?.serverId === id ? "h-9" : "h-2"
          )}
        />
        <div
          className={cn(
            "relative mx-3 h-11 w-11 rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden bg-secondary ",
            params?.serverId === id && "text-primary rounded-[16px]"
          )}
        >
          <Image fill src={imageUrl} alt="channel" />
        </div>
      </button>
    </ActionTooltip>
  );
};

export default NavigationItem;
