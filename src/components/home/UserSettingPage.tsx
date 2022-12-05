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

const UserSettingPage = () => {
  const { MODIFY, USER } = PATH;
  const { URL } = API_PATH;

  // FIXME init as undefined
  const [profileImageUri, setProfileImageUri] = useState<string | undefined>(
    "yena.jpg"
  );

  const [settingOpen, setSettingOpen] = useState<boolean | null>(null);
  const [appearSetting, setAppearSetting] = useState<React.ReactNode | null>(
    null
  );
  const [disAppearSetting, setDisAppearSetting] =
    useState<React.ReactNode | null>(null);

  const [settingComponent, setSettingComponent] =
    useState<React.ReactNode | null>(null);
  const auth = useAuth();
  const client = useClient();

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
        <button onClick={() => auth.logout()}>로그아웃</button>
        <hr className="py-[3px]" />
        <button
          onClick={() => {
            axios
              .delete(`${URL}${USER}`, {
                data: { email: client.getUserEmail() },
              })
              .then((res) => {
                auth.logout();
                console.log(res.data);
              })
              .catch(() => {
                console.log("err");
              });
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
      .then((user) => {
        //settingUserInfo
        setSettingComponent(
          <>
            {/* 세팅버튼 */}
            <SettingButton
              onClick={() => {
                setSettingOpen(true);
                settingOpen && setSettingOpen(false);
              }}
            />
            {/* 프로필 사진 */}
            <LinkModify
              img={user.image}
              onClick={() => setSettingOpen(false)}
            />
            {/* 정보박스 */}
            <UserSettingInfo
              onClick={() => setSettingOpen(false)}
              gender={user.gender}
              job={user.job}
              wanted={user.wanted}
              username={user.username}
              region={user.region}
              introduce={user.introduce}
              appearance={`#${user.appearance}`}
              fashion={`#${user.fashion}`}
              personality={user.personality.map((items: string) => `#${items}`)}
            />
          </>
        );
      });
    console.log("보내는 데이터 :", { email: client.getUserEmail() });
  }, []);

  return (
    <div
      className="relative flex flex-col flex-wrap justify-center items-center 
      w-[26rem] h-[42rem] gap-4 -z-30 select-none"
    >
      <AnimatePresence>{settingOpen && appearSetting}</AnimatePresence>
      {/* 세팅버튼 */}
      <SettingButton
        onClick={() => {
          setSettingOpen(true);
          settingOpen && setSettingOpen(false);
        }}
      />
      {/* 프로필 사진 */}
      <LinkModify img={profileImageUri} onClick={() => setSettingOpen(false)} />
      {/* 정보박스 */}
      <UserSettingInfo
        onClick={() => setSettingOpen(false)}
        gender="여자"
        job="가수"
        wanted="나의 이상형은 오큘러스 하는 너드남"
        username="최예나"
        region="서울특별시"
        introduce="And I say hey! I'm gonna make it Smile, smile, smile away
          예쁘게 웃고 넘겨버릴래 Just smile away Just smile awa-y 아픔, 슬픔, 외로움 잊게"
        appearance="#귀여움"
        fashion="#아무거나 잘 어울림"
        personality="#쿨함 #오리 #이쁨"
      />
    </div>
  );
};

export default UserSettingPage;
