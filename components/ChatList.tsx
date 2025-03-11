import { chatMembersCollectionGroupRef } from "@/lib/converters/ChatMembers";
import { authOptions } from "@/public/auth";
import { getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";
import React from "react";
import ChatListRows from "./ChatListRows";

async function ChatList() {
  const session = await getServerSession(authOptions);

  const chatsSnapshot = await getDocs(
    chatMembersCollectionGroupRef(session?.user.id!)
  );

  const initialChats = chatsSnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));

  return <ChatListRows initialChats={initialChats} />;
}

export default ChatList;
