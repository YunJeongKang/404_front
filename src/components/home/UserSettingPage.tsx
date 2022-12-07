import { useState, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import useAuth from "@store/useAuth";
import PATH from "@utils/routes/PATH";
import {
  LinkModify,
  SettingButton,
  UserSettingInfo,
} from "@styles/authPage/AnySettingTemplate";
import API_PATH from "@utils/routes/api/API_PATH";
import useClient from "@store/useClient";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "@utils/common/app/LoadingSpinner";

const UserSettingPage = () => {
  const { MODIFY, USER, EASY_AUTH } = PATH;
  const { URL } = API_PATH;
  const navigate = useNavigate();
  const auth = useAuth();
  const client = useClient();

  //일반 상태관리

  const [data, setData] = useState<any>(null);
  const [settingOpen, setSettingOpen] = useState<boolean | null>(null);
  const [appearSetting, setAppearSetting] = useState<React.ReactNode | null>(
    null
  );

  //회원탈퇴 상태관리
  const [isLoading, setLoading] = useState<boolean>(false);

  // settingDiv State
  useLayoutEffect(() => {
    // change openClick setting BTN state
    setAppearSetting(
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          type: "linear",
        }}
        exit={{ x: 50, opacity: 0 }}
        className="absolute font-eland top-14 right-3 flex flex-col justify-center w-[6rem] h-[4.5rem] shadow-md
        drop-shadow rounded-md bg-white"
      >
        <button
          onClick={() => {
            setLoading(true);
            navigate(`${URL}${EASY_AUTH}`);
            auth.logout();
          }}
        >
          로그아웃
        </button>
        <hr className="py-[3px]" />
        {/* 회원탈퇴 */}
        <button
          onClick={() => {
            setLoading(true);
            axios
              .delete(`${URL}${USER}`, {
                data: { email: client.getUserEmail() },
              })
              .then((res) => {
                navigate(`${URL}${EASY_AUTH}`);
                auth.logout();
                console.log(res.data);
              })
              .catch(console.error);
          }}
        >
          회원탈퇴
        </button>
      </motion.div>
    );
  }, [settingOpen]);

  useLayoutEffect(() => {
    axios
      .post(`${URL}${USER}`, { email: client.getUserEmail() })
      .then((res) => res.data)
      .then((data) => {
        console.log("내가 받아오는 데이터:", data);
        data.map((items: any) => setData([{ ...items }]));
      });
    console.log("보내는 데이터 :", { email: client.getUserEmail() });
  }, []);

  return (
    <div
      className="relative flex flex-col flex-wrap justify-center items-center 
      w-[26rem] h-[42rem] gap-4 -z-30 select-none"
    >
      {isLoading && (
        <LoadingSpinner className="bg-white opacity-50 z-50" color="black" />
      )}
      {!data && <LoadingSpinner />}
      <AnimatePresence>{settingOpen && appearSetting}</AnimatePresence>
      {/* 세팅버튼 */}
      {data && (
        <SettingButton
          onClick={() => {
            setSettingOpen(true);
            settingOpen && setSettingOpen(false);
          }}
        />
      )}
      {data &&
        data.map((data: any) => (
          <>
            {/* 프로필 사진 */}
            <LinkModify
              img={data.image}
              onClick={() => setSettingOpen(false)}
            />
            {/* 정보박스 */}
            <UserSettingInfo
              onClick={() => setSettingOpen(false)}
              gender={data.gender ? data.gender : ""}
              job={data.job ? data.job : ""}
              wanted={data.wanted ? data.wanted : ""}
              username={data.nickname ? data.nickname : ""}
              region={data.region ? data.region : ""}
              introduce={data.introduce ? data.introduce : ""}
              appearance={data.style ? data.style : ""}
              fashion={
                data.fashion && data.fashion.length < 2
                  ? data.fashion
                  : data.fashion.map((items: string) => (
                      <span className="text-blue-600 w-[55%] h-full pt-2">{`#${items}`}</span>
                    ))
              }
              personality={
                data.character && data.character.length < 2
                  ? data.character
                  : data.character.map((items: string) => (
                      <span className="w-[35%] text-blue-600 pt-0.5">{`#${items}`}</span>
                    ))
              }
            />
          </>
        ))}
    </div>
  );
};

export default UserSettingPage;
