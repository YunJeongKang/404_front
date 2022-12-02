import { useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import useAuth from "@store/useAuth";
import PATH from "@utils/routes/PATH";
import {
  LinkModify,
  SettingButton,
  UserSettingInfo,
} from "@styles/setting/AnySettingTemplate";

const UserSettingPage = () => {
  const { MODIFY } = PATH;

  // FIXME init as undefined
  const [profileImageUri, setProfileImageUri] = useState<string | undefined>(
    "yena.jpg"
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
    //      setProfileImageUri(profile)import { Link } from 'react-router-dom';

    //    })
    //    .catch(console.error);
  }, []);

  return (
    <div
      className="relative flex flex-col flex-wrap justify-center items-center 
    w-[26rem] h-[42rem] gap-4 -z-30 select-none"
    >
      {settingOpen && appearSetting}
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
