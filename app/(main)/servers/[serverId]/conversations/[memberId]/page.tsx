import ChatHeader from "@/components/chat/chat-header";
<<<<<<< HEAD
import { getOrCreateConversation } from "@/lib/conversation";
import { currentProfile } from "@/lib/current-profile";
import db from "@/lib/db";
=======
import ChatInput from "@/components/chat/chat-input";
import ChatMessages from "@/components/chat/chat-messages";
import MediaRoom from "@/components/media-room";
import { getOrCreateConversation } from "@/lib/conversation";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
>>>>>>> v-2
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

type MemberIdPageProps = {
  params: {
    memberId: string;
    serverId: string;
  };
<<<<<<< HEAD
};

const MemberIdPage = async ({ params }: MemberIdPageProps) => {
=======
  searchParams: {
    video?: boolean;
  };
};

const MemberIdPage = async ({ params, searchParams }: MemberIdPageProps) => {
>>>>>>> v-2
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const currentMember = await db.member.findFirst({
    where: {
      serverId: params.serverId,
      profileId: profile.id,
    },
    include: {
      profile: true,
    },
  });

  if (!currentMember) {
    return redirect("/");
  }

  const conversation = await getOrCreateConversation(
    currentMember.id,
    params.memberId
  );

  if (!conversation) {
    return redirect(`/servers/${params.serverId}`);
  }

  const { memberOne, memberTwo } = conversation;

  const otherMember =
    memberOne.profileId === profile.id ? memberTwo : memberOne;

  return (
<<<<<<< HEAD
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
=======
    <div className="bg-background flex flex-col h-full">
>>>>>>> v-2
      <ChatHeader
        imageUrl={otherMember.profile.imageUrl}
        name={otherMember.profile.name}
        serverId={params.serverId}
        type="conversation"
      />
<<<<<<< HEAD
=======
      {searchParams.video && (
        <MediaRoom video={true} audio={true} chatId={conversation.id} />
      )}
      {!searchParams.video && (
        <>
          <ChatMessages
            member={currentMember}
            name={otherMember.profile.name}
            chatId={conversation.id}
            type="conversation"
            apiUrl="/api/direct-messages"
            paramKey="conversationId"
            paramValue={conversation.id}
            socketUrl="/api/socket/direct-messages"
            socketQuery={{
              conversationId: conversation.id,
            }}
          />
          <ChatInput
            name={otherMember.profile.name}
            type="conversation"
            apiUrl="/api/socket/direct-messages"
            query={{
              conversationId: conversation.id,
            }}
          />
        </>
      )}
>>>>>>> v-2
    </div>
  );
};

export default MemberIdPage;
