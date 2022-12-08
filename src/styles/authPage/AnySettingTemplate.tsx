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
    <div className="absolute top-4 w-[90%] h-[30%] flex justify-between">
      <div></div>
      {/* 설정 창 */}
      <FiSettings
        size="25"
        color="#555555"
        className="m-1 cursor-pointer z-10"
        type="button"
        onSubmit={(evt) => evt.preventDefault()}
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
      className="absolute text-center left-7 top-4 inline-block"
      onClick={onClick}
    >
      <div
        className="rounded-[32%] 
     h-[11.7rem] w-[11.7rem] overflow-hidden"
      >
        <img
          src={`${import.meta.env.VITE_S3_BASE_URL}/${img}`}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* 회원 정보 수정 클릭 && 연필 */}
        <>
          <Link to={PATH.MODIFY}>
            <div
              className="absolute inline-block rounded-[40%] border-2 h-[2.7rem] cursor-pointer 
         w-[2.7rem] bottom-[-5px] right-[-5px] content-center bg-white"
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
  const { LIKE_YOU: LIKE_ME } = PATH;
  return (
    <div
      className="absolute top-48 items-start bg-white rounded-lg w-[92%] h-fit -z-20"
      onClick={onClick}
    >
      {/* 프레임 조정 */}
      <div className="flex flex-col items-start px-6 h-full gap-4">
        {/* 빈공간 */}
        <div className="h-[28%]"></div>
        {/* 닉네임, 지역, 직업 */}
        <div className="h-[15%]">
          <NickNameH1 className="flex gap-0.5">
            {username}
            <HiOutlineBadgeCheck size="22" color="gray" className="mt-1.5" />
          </NickNameH1>
          <div className="flex gap-1">
            {/* 지역 */}
            <SubInfoH3>{region}</SubInfoH3>
            <span>·</span>
            <SubInfoH3>{job}</SubInfoH3>
          </div>
        </div>
        {/* 정보 미리보기 박스*/}
        <div className="h-[20rem] w-full">
          {/* 성별, 외모, 성격, 패션스타일 */}
          <div className="flex flex-col w-full h-[8.5rem]">
            {/* 성별 */}
            <div className="flex items-center h-1/4">
              <span className="w-5/6">성별</span>
              <span className="w-full text-blue-600">{gender}</span>
            </div>
            {/* 외모 */}
            <div className="flex items-center h-1/4">
              <span className="w-5/6 ">외모</span>
              <span className="w-full text-blue-600">{appearance}</span>
            </div>
            {/* 성격 */}
            <div className="flex items-center h-1/4 gap-1 text-xs">
              <span className="w-5/6 text-base">성격</span>
              {personality}
            </div>
            {/* 패션스타일 */}
            <div className="flex items-center h-1/4 gap-1 text-xs">
              <span className="w-5/6 text-base">패션 스타일</span>
              {fashion}
            </div>
          </div>
          <hr className="py-1.5" />
          {/* 자기소개 */}
          <div className="flex flex-col w-full">
            <span className=" py-1">소개</span>
            {introduce ? (
              <p className="text-blue-600 text-sm pb-2">{introduce}</p>
            ) : (
              <p className="text-gray-300 text-sm">
                "자신을 나타낼 수 있는 말들로 본인을 표현해보세요"
              </p>
            )}
          </div>
          <hr className="py-1.5" />
          {/* 나의 이상형  */}
          <div className="flex flex-col w-full">
            <span className=" py-1">나의 이상형</span>
            {wanted ? (
              <p className="text-blue-600 text-sm pb-2">{wanted}</p>
            ) : (
              <p className="text-gray-300 text-sm">
                "내가 생각하는 나의 이상형에 대해서 표현해보세요"
              </p>
            )}
          </div>
          <hr className="py-1.5" />
          <Link to={LIKE_ME}>
            <div className="flex justify-between cursor-pointer">
              <span>보낸 관심표현 목록</span>
              <span className="font-bold text-lg text-gray-500 mr-0.5">
                {">"}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
