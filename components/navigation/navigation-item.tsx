"use client";

<<<<<<< HEAD
import Image from "next/image";
import ActionTooltip from "../action-tooltip";
import { cn } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
=======
import { useParams, useRouter } from "next/navigation";
import ActionTooltip from "../action-tooltip";
import Image from "next/image";
import { cn } from "@/lib/utils";
>>>>>>> v-2

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
<<<<<<< HEAD
    <ActionTooltip side="right" align="center" label={name}>
      <button className="group relative flex items-center" onClick={onClick}>
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
            params?.serverId !== id && "group-hover:h-[20px]",
=======
    <ActionTooltip label={name} side="right" align="center">
      <button className="group flex items-center relative" onClick={onClick}>
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-1",
            params?.serverId !== id && "group-hover:h-5",
>>>>>>> v-2
            params?.serverId === id ? "h-9" : "h-2"
          )}
        />
        <div
          className={cn(
<<<<<<< HEAD
            "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
            params?.serverId === id &&
              "bg-primary/10 text-primary rounded-[16px]"
          )}
        >
          <Image fill src={imageUrl} alt="Channel" />
=======
            "relative mx-3 h-11 w-11 rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden bg-secondary ",
            params?.serverId === id && "text-primary rounded-[16px]"
          )}
        >
          <Image fill src={imageUrl} alt="channel" />
>>>>>>> v-2
        </div>
      </button>
    </ActionTooltip>
  );
};

export default NavigationItem;
