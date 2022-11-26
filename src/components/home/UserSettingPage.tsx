import { HiOutlinePencil, HiOutlineBadgeCheck } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import {
  BsFillMicFill,
  BsStarFill,
  BsFillPatchCheckFill,
} from "react-icons/bs";
import { NickNameH1, SubInfoH3 } from "@styles/indexStyle/indexHeading";
import { UserSettingSpan } from "@styles/indexStyle/indexSpan";

const UserSettingPage = () => {
  return (
    <div
      className="flex flex-col flex-wrap justify-center items-center 
    w-[26rem] h-[42rem] gap-4 bg-userSetting -z-30"
    >
      {/* 상단 빈공간 */}
      <>
        <div className="w-[90%] h-[12%] flex justify-between">
          <div></div>
          {/* 설정 창 */}
          <FiSettings size="25" color="gray" className="m-1 cursor-pointer" />
        </div>
      </>
      {/* 프로필 사진 */}
      <>
        <div className="absolute text-center left-7 top-6 inline-block">
          <div
            className="rounded-full 
             h-[11.5rem] w-[11.5rem] overflow-hidden"
          >
            <img
              src="https://image.ytn.co.kr/general/jpg/2022/0117/202201171741117266_d.jpg"
              alt=""
              className="rounded-full"
            />
            {/* 회원 정보 수정 클릭 && 연필 */}
            <>
              <div
                className="absolute inline-block rounded-full border-2 h-[2.7rem] cursor-pointer 
               w-[2.7rem] bottom-0 right-3 content-center bg-white"
              >
                <HiOutlinePencil
                  size="30"
                  color="#555555"
                  className="absolute inline-block right-[5px] top-[5px]"
                />
              </div>
            </>
          </div>
        </div>
      </>
      {/* 정보박스 */}
      <div className=" items-start bg-white rounded-lg w-[92%] h-[82%] -z-20">
        {/* 프레임 조정 */}
        <div className="flex flex-col items-start px-6 h-full gap-4">
          {/* 빈공간 */}
          <div className="h-[32%]"></div>
          {/* 닉네임, 지역, 직업 */}
          <div className="h-1/6">
            <NickNameH1 className="flex gap-1">
              밥도둑용고
              <HiOutlineBadgeCheck
                size="26"
                color="gray"
                className="my-1.5 cursor-pointer"
              />
            </NickNameH1>
            <div className="flex gap-1">
              {/* 지역 */}
              <SubInfoH3>광주광역시</SubInfoH3> ·{" "}
              <SubInfoH3>FE개발자</SubInfoH3>
            </div>
          </div>
          {/* 보이스 메세지 */}
          <div className="h-1/5 w-full cursor-pointer">
            <span
              className="flex justify-center border-2 border-gray-200 rounded-2xl 
            text-center py-4 font-medium text-xl w-full"
            >
              <BsFillMicFill size="22" className="m-0.5 mr-3" />내 보이스 메세지
            </span>
          </div>
          {/* 정보 입력 박스 */}
          <div className="h-5/6 w-full">
            {/* 이벤트 창 */}
            <div className="flex flex-col h-[40%] w-full gap-4">
              <UserSettingSpan>
                <BsStarFill color="#e5cf07" className="my-1" />
                미션
              </UserSettingSpan>
              <UserSettingSpan>
                <BsFillPatchCheckFill color="green" className="my-1" />
                인증
              </UserSettingSpan>
            </div>
            {/* 자기 소개 */}
            <div className="flex flex-col gap-2 w-full h-[55%]">
              <span className="text-lg">나의 소개</span>
              <div className="border-2 w-full h-5/6 rounded-lg cursor-pointer">
                {" "}
                ㅁㄴㅇㄹ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettingPage;
