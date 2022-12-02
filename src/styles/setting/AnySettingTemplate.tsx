import { NickNameH1, SubInfoH3 } from "@styles/indexStyle/indexHeading";
import PATH from "@utils/routes/PATH";
import { BsFillMicFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiOutlineBadgeCheck, HiOutlinePencil } from "react-icons/hi";
import { Link } from "react-router-dom";

interface SettingButtonInterface {
  onClick: () => void;
}

export const SettingButton = ({ onClick }: SettingButtonInterface) => {
  return (
    <div className="w-[90%] h-[10%] flex justify-between" onClick={onClick}>
      <div onClick={onClick}></div>
      {/* 설정 창 */}
      <FiSettings
        size="25"
        color="#555555"
        className="m-1 cursor-pointer z-10"
        onClick={onClick}
      />
    </div>
  );
};

interface LinkModifyInterface {
  img: string | undefined;
  onClick: () => void;
}

export const LinkModify = ({ img, onClick }: LinkModifyInterface) => {
  return (
    <div
      className="absolute text-center left-7 top-2 inline-block"
      onClick={onClick}
    >
      <div
        className="rounded-full 
     h-[11.7rem] w-[11.7rem] overflow-hidden"
      >
        <img
          src={`${import.meta.env.VITE_S3_BASE_URL}/${img}`}
          alt=""
          className="rounded-full"
        />
        {/* 회원 정보 수정 클릭 && 연필 */}
        <>
          <Link to={PATH.MODIFY}>
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
          </Link>
        </>
      </div>
    </div>
  );
};

interface UserSettingInfoState {
  onClick: () => void;
  username: string;
  region: string;
  job: string;
  gender: string;
  appearance: string;
  personality: string;
  fashion: string;
  introduce: string;
  wanted: string;
}

export const UserSettingInfo = ({
  appearance,
  fashion,
  gender,
  introduce,
  job,
  onClick,
  personality,
  region,
  username,
  wanted,
}: UserSettingInfoState) => {
  return (
    <div
      className=" items-start bg-white rounded-lg w-[92%] h-[82%] -z-20"
      onClick={onClick}
    >
      {/* 프레임 조정 */}
      <div className="flex flex-col items-start px-6 h-full gap-4">
        {/* 빈공간 */}
        <div className="h-[28%]"></div>
        {/* 닉네임, 지역, 직업 */}
        <div className="h-[15%]">
          <NickNameH1 className="flex gap-1">
            {username}
            <HiOutlineBadgeCheck
              size="26"
              color="gray"
              className="my-1 cursor-pointer"
            />
          </NickNameH1>
          <div className="flex gap-1">
            {/* 지역 */}
            <SubInfoH3>{region}</SubInfoH3>
            <span>·</span>
            <SubInfoH3>{job}</SubInfoH3>
          </div>
        </div>
        {/* 보이스 메세지 */}
        <div className="h-[14%] w-full cursor-pointer">
          <span
            className="flex justify-center border-2 border-gray-200 rounded-2xl 
      text-center py-3 font-medium text-xl w-full"
          >
            <BsFillMicFill size="22" className="m-0.5 mr-3" />내 보이스 메세지
          </span>
        </div>

        {/* 정보 미리보기 박스*/}
        <div className="h-5/6 w-full">
          {/* 닉네임, 성별, 생일, 위치 */}
          <div className="flex flex-col w-full h-[42%]">
            {/* 닉네임 */}
            <div className="flex items-center h-1/4">
              <span className="w-full ">성별</span>
              <span className="w-full text-blue-600">{gender}</span>
            </div>
            {/* 성별 */}
            <div className="flex items-center h-1/4">
              <span className="w-full ">외모</span>
              <span className="w-full text-blue-600">{appearance}</span>
            </div>
            {/* 생일 */}
            <div className="flex items-center h-1/4">
              <span className="w-full ">성격</span>
              <span className="w-full text-blue-600">{personality}</span>
            </div>
            {/* 위치 */}
            <div className="flex items-center h-1/4">
              <span className="w-full ">패션 스타일</span>
              <span className="w-full text-blue-600">{fashion}</span>
            </div>
          </div>
          <hr className="py-2" />
          {/* 자기소개 */}
          <div className="flex flex-col w-full h-1/4">
            <span className=" py-1">소개</span>
            <p className="text-blue-600 text-xs">
              {`${introduce.slice(0, 110)}${
                introduce.length > 110 ? "..." : ""
              }`}
            </p>
          </div>
          <hr className="py-2" />
          {/* 나의 이상형  */}
          <div className="flex flex-col w-full h-1/4">
            <span className=" py-1">나의 이상형</span>
            <p className="text-blue-600 text-xs">
              {`${wanted.slice(0, 110)}${wanted.length > 110 ? "..." : ""}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
