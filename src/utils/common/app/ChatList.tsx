import React from "react";

interface ChatListInterface {
  img: string;
  username: string;
  chat: string;
}

const ChatList = ({ img, username, chat }: ChatListInterface) => {
  return (
    <div className="relative flex justify-end items-center w-[95%] h-[14%] min-w-[95%] min-h-[14%] my-3">
      {/* 이미지 영역 */}
      <div className="absolute left-1 flex justify-start items-center rounded-[31px] overflow-hidden w-full h-full max-w-[20%] max-h-[95%]">
        <img
          src={`${import.meta.env.VITE_S3_BASE_URL}/${img}`}
          alt=""
          className="object-cover h-full w-full"
        />
      </div>
      {/* 회원 정보 간략 확인창 */}
      <div className="flex flex-col justify-end items-start w-[77%] px-2">
        {/* 닉네임 */}
        <span className="text-xl font-bold text-black py-1 ">{username}</span>
        <p className="text-gray-500 text-[15px] w-full">{`${chat.slice(0, 50)}${
          chat.length > 50 ? "..." : ""
        }`}</p>
      </div>
    </div>
  );
};

export default ChatList;
