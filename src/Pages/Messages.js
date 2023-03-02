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
    <div className="min-h-screen flex flex-row flex-wrap gap-2 p-5 justify-start items-start">
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
