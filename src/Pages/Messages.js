import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../src/components/Loading";
import MessageCard from "../components/MessageCard";

const Messages = () => {
  const {
    data: messages = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const res = await fetch(
        `https://schedule-app-server.vercel.app/messages`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 md:gap-6 justify-items-center p-3 lg:p-16 items-center min-h-screen">
      {isLoading && <Loading></Loading>}
      {messages.map((message) => (
        <MessageCard key={message._id} data={message}>
          refetch={refetch}
        </MessageCard>
      ))}
    </div>
  );
};

export default Messages;
