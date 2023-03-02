import React from "react";

const MessageCard = ({ data }) => {
  const { userName, userImage, userEmail, message, createdAt } = data;
  return (
    <div className="">
      <article class="rounded-md bg-[#191825] lg:p-4 p-2 lg:w-96 w-64 h-[270px] ">
        <div class="flex items-center gap-4">
          <img
            alt="Developer"
            src={userImage}
            class="h-16 w-16 rounded-full object-cover"
          />

          <div>
            <h3 class="text-lg font-medium text-white">{userName}</h3>
            <p className="text-sm font-medium text-gray-400 my-1">
              {userEmail}
            </p>
            <p className="text-sm font-medium text-gray-400 my-1">
              {new Date(createdAt).toLocaleString()}
            </p>
          </div>
        </div>

        <ul class="mt-4 space-y-2">
          <li>
            <strong class="font-medium text-white">Message</strong>

            <p class="h-[110px]  scrollbar-thumb-slate-100 scrollbar-track-[#A09B9D] scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-thin mt-1 text-xs font-medium text-gray-200 rounded-md border border-gray-700 p-2 hover:border-pink-600">
              {message}
            </p>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default MessageCard;
