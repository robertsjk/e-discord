"use client";

<<<<<<< HEAD
import { cn } from "@/lib/utils";
=======
>>>>>>> v-2
import { Member, MemberRole, Profile, Server } from "@prisma/client";
import { ShieldAlert, ShieldCheck } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import UserAvatar from "../user-avatar";
<<<<<<< HEAD
=======
import { cn } from "@/lib/utils";
>>>>>>> v-2

type ServerMemberProps = {
  member: Member & { profile: Profile };
  server: Server;
};

const roleIconMap = {
  [MemberRole.GUEST]: null,
  [MemberRole.MODERATOR]: (
    <ShieldCheck className="w-4 h-4 m;-2 text-indigo-500" />
  ),
  [MemberRole.ADMIN]: <ShieldAlert className="w-4 h-4 m;-2 text-rose-500" />,
};

const ServerMember = ({ member, server }: ServerMemberProps) => {
  const params = useParams();
  const router = useRouter();

  const icon = roleIconMap[member.role];

  const onClick = () => {
    router.push(`/servers/${params?.serverId}/conversations/${member.id}`);
  };

  return (
    <button
      onClick={onClick}
      className={cn(
<<<<<<< HEAD
        "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
        params?.memberId === member.id && "bg-zinc-700/20 dark:bg-zinc-700"
=======
        "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-card-foreground/5 transition mb-1",
        params?.memberId === member.id &&
          "bg-card-foreground/10 hover:bg-card-foreground/10"
>>>>>>> v-2
      )}
    >
      <UserAvatar
        src={member.profile.imageUrl}
        className="h-8 w-8 md:h-8 md:w-8"
      />
      <p
        className={cn(
<<<<<<< HEAD
          "font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition",
          params?.memberId === member.id &&
            "text-primary dark:text-zinc-200 dark:group-hover:text-white"
=======
          "line-clamp-2 font-medium text-sm text-card-foreground/80 group-hover:text-card-foreground/90 transition",
          params?.memberId === member.id && "text-card-foreground/90"
>>>>>>> v-2
        )}
      >
        {member.profile.name}
      </p>
      {icon}
    </button>
  );
};

export default ServerMember;
