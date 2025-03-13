import ChatList from "@/components/ChatList";
import ChatPermissionError from "@/components/ChatPermissionError";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat With Anyone | Chats",
  description:
    "You speak your language, they speak their language. Let AI handle the translation",
};

type Props = {
  params: {};
  searchParams: {
    error: string;
  };
};

function ChatPage({ searchParams: { error } }: Props) {
  return (
    <div className="mx-auto max-w-7xl w-full">
      {error && (
        <div className="m-2">
          <ChatPermissionError />
        </div>
      )}
      <ChatList />
    </div>
  );
}

export default ChatPage;
