import useClient from "@store/useClient";
import PATH from "@utils/routes/PATH";
import axios from "axios";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const { URL, LIKE } = PATH;
interface LikePageInterface {
  img: string;
  username: string;
  job: string;
  region: string;
  married: string;
  marriagePlan: string;
}

const LikePageTemplate = ({
  img,
  username,
  job,
  region,
  married,
  marriagePlan,
}: LikePageInterface) => {
  const client = useClient();
  const [checkUsername, setCheckUsername] = useState<string>("");
  const [pass, setPass] = useState<boolean>(false);

  const heartClick = () => {
    axios
      .put(`${URL}${LIKE}`, {
        email: client.getUserEmail(),
        username: username,
        like: true,
        unlike: false,
      })
      .then((res) => res.data)
      .then((data) => {
        console.log("받는 데이터:", data);
        setCheckUsername(data.username);
      });
    console.log("보내는 값 :", {
      email: client.getUserEmail(),
      username: username,
      like: true,
      unlike: false,
    });
  };

  const passClick = () => {
    setPass(true);
    axios.put(`${URL}${LIKE}`, {
      email: client.getUserEmail(),
      username: username,
      unlike: true,
      like: false,
    });
    console.log("보내는 값 :", {
      email: client.getUserEmail(),
      username: username,
      unlike: true,
      like: false,
    });
  };

  return (
    <AnimatePresence>
      {checkUsername !== username && !pass && (
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 40, opacity: 0 }}
          transition={{ duration: 0.25, ease: "linear" }}
          className={`relative flex justify-center items-center w-[95%] h-[18%] my-3 $`}
        >
          {/* 이미지 영역 */}
          <div className="absolute left-2 flex justify-start items-center rounded-[32px] overflow-hidden w-[25%] h-[95%]">
            <img
              src={`${import.meta.env.VITE_S3_BASE_URL}/${img}`}
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
          {/* 회원 정보 간략 확인창 */}
          <div className="flex flex-col justify-start items-start w-1/2 h-[95%] px-2 ml-5 text-blue-600">
            {/* 닉네임 */}
            <span className="flex flex-col text-[22px] h-2/3 font-bold text-black py-2">
              <span className="h-[55%]">{username}</span>
              <div className="flex gap-0.5 text-base font-normal mb-2">
                {/* 직업, 지역 */}
                <span>{region}</span>·<span>{job}</span>
              </div>
            </span>
            {/* 학력, 연봉 */}
            <div className="flex gap-1.5">
              <span>#{married}</span>
              <span>#{marriagePlan}</span>
            </div>
          </div>
          {/* 버튼 영역 */}
          <div className="absolute flex h-1/2 gap-2 right-0 top-6">
            <button
              className="rounded text-white bg-red-500 px-3 h-[60%] active:scale-90 duration-150"
              onClick={heartClick}
            >
              하트
            </button>
            <button
              className="rounded text-gray-600 border-2 px-2 h-[60%] active:scale-90 duration-150"
              onClick={passClick}
            >
              패스
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LikePageTemplate;
