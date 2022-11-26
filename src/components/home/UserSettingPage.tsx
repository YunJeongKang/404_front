import React from "react";
import { FiSettings } from "react-icons/fi";

const UserSettingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[26rem] h-[42rem] gap-4">
      <div className="w-[90%] h-[12%] flex justify-between">
        <div>왼쪽빈공간</div>
        {/* 설정 창 */}
        <FiSettings size="25" color="gray" className="m-2" />
      </div>
      {/* 프로필 사진 */}
      <div
        className="rounded-full border text-center left-7 top-6
       border-black absolute h-[11.5rem] w-[11.5rem]"
      >
        그림
      </div>
      {/* 정보박스 */}
      <div
        className="flex flex-col justify-around items-start border-2 
       border-gray-300 rounded-lg w-[90%] h-[80%]"
      >
        {/* 닉네임, 지역, 직업 */}
        <div className="px-4">
          <span>밥도둑용고</span>
          <div>
            <span>광주광역시</span> - <span>FE개발자</span>
          </div>
        </div>
        {/* 정보 입력 박스 */}
        <div>
          {/* 자기 소개 */}
          <div className="w-full">
            <span>나의 소개</span>
            <div className="border w-5/6 h-1/3"></div>
          </div>
          {/* 나의 이상형 */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default UserSettingPage;
