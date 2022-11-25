import React from "react";

const UserSettingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[26rem] h-[42rem] gap-4">
      <div className="w-[90%] h-[15%]">위쪽 빈공간</div>
      <div
        className="rounded-full border text-center left-7 top-12
       border-black absolute h-[11.5rem] w-[11.5rem]"
      >
        그림
      </div>
      <div className="border border-gray-300 border-2 rounded-lg w-[90%] h-[75%]">
        박스
      </div>
    </div>
  );
};

export default UserSettingPage;
