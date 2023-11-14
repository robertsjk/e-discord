import { Hash } from "lucide-react";

type ChatWelcomeProps = {
  name: string;
  type: "channel" | "conversation";
};

const ChatWelcome = ({ name, type }: ChatWelcomeProps) => {
  return (
    <div className="space-y-2 px-4 mb-4">
      {type === "channel" && (
<<<<<<< HEAD
        <div className="h-[75px] w-[75px] rounded-full bg-zinc-500 dark:bg-zinc-700 flex items-center justify-center">
=======
        <div className=" h-16 w-16 rounded-full bg-foreground/10 flex items-center justify-center">
>>>>>>> v-2
          <Hash className="h-12 w-12 text-white" />
        </div>
      )}
      <p className="text-xl md:text-3xl font-bold">
        {type === "channel" ? "Welcome to #" : ""}
        {name}
      </p>
<<<<<<< HEAD
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
=======
      <p className="text-foreground/60 text-sm">
>>>>>>> v-2
        {type === "channel"
          ? `This is the start of the #${name} channel`
          : `This is the start of your conversation with ${name}`}
      </p>
    </div>
  );
};

export default ChatWelcome;
