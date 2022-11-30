import { HiOutlinePencil, HiOutlineBadgeCheck } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import {
  BsFillMicFill,
  BsStarFill,
  BsFillPatchCheckFill,
} from "react-icons/bs";
import { NickNameH1, SubInfoH3 } from "@styles/indexStyle/indexHeading";
import { UserSettingSpan } from "@styles/indexStyle/indexSpan";
import { useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import useAuth from "@store/useAuth";

const UserSettingPage = () => {
  // FIXME init as undefined
  const [profileImageUri, setProfileImageUri] = useState<string | undefined>(
    `${import.meta.env.VITE_S3_BASE_URL}/yena.jpg`
  );

  const [settingOpen, setSettingOpen] = useState<boolean>(false);
  const [appearSetting, setAppearSetting] = useState<React.ReactNode | null>(
    null
  );
  // const [user, setUser] =
  const auth = useAuth();

  useLayoutEffect(() => {
    setAppearSetting(
      <motion.div
        initial={{ translateX: 50, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute top-12 right-2 flex flex-col justify-center w-[6rem] h-[2rem] shadow-md
      drop-shadow rounded-md bg-white"
      >
        <button onClick={() => auth.logout()}>로그아웃</button>
      </motion.div>
    );

    //  axios.get<Type>()
    //    .then(({data}) => data)
    //    .then((user) => {
    //      /* Codes */
    //      const profileImageUri = `${import.meta.env.VITE_S3_BASE_URL}/user/${user.프로필경로}`;
    //      setProfileImageUri(profile);
    //    })
    //    .catch(console.error);
  }, []);

  return (
    <div
      className="relative flex flex-col flex-wrap justify-center items-center 
    w-[26rem] h-[42rem] gap-4 bg-userSetting -z-30 select-none"
    >
      {/* 상단 빈공간 */}
      <>
        {settingOpen && appearSetting}
        <div className="w-[90%] h-[12%] flex justify-between">
          <div></div>
          {/* 설정 창 */}
          <FiSettings
            size="25"
            color="gray"
            className="m-1 cursor-pointer z-10"
            onClick={() => {
              setSettingOpen(true);
              settingOpen && setSettingOpen(false);
            }}
          />
        </div>
      </>
      {/* 프로필 사진 */}
      <>
        <div
          className="absolute text-center left-7 top-3 inline-block"
          onClick={() => setSettingOpen(false)}
        >
          <div
            className="rounded-full 
             h-[11.5rem] w-[11.5rem] overflow-hidden"
          >
            <img src={profileImageUri} alt="" className="rounded-full" />
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
      <div
        className=" items-start bg-white rounded-lg w-[92%] h-[82%] -z-20"
        onClick={() => setSettingOpen(false)}
      >
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
                user?.소개글 || "입력된 소개글이 없습니다."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettingPage;
