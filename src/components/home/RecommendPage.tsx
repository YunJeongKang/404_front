import { useState, useLayoutEffect } from "react";
import RecommendTemplate from "@utils/common/app/RecommendTemplate";
import axios from "axios";
import PATH from "@utils/routes/PATH";
import { FaCrown } from "react-icons/fa";
import useClient from "@store/useClient";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import LoadingSpinner from "@utils/common/app/LoadingSpinner";

const RecommendPage = () => {
  const { URL, RECOMMEND } = PATH;
  const client = useClient();

  // 기존 페이지에 있는 상태관리 변수
  const [isClick, setClick] = useState<boolean>(false);
  const [username, setUsername] = useState<string[]>([]);
  const [region, setRegion] = useState<string[]>([]);
  const [job, setJob] = useState<string[]>([]);
  const [image, setImage] = useState<string[]>([]);

  // 추천 상세보기 상태관리 변수
  const [isInfo, setInfo] = useState<boolean>(false);
  const [infoComponent, setInfoComponent] = useState<React.ReactNode | null>(
    null
  );
  const [myName, setMyName] = useState<string>("");

  useLayoutEffect(() => {
    setInfoComponent(
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, y: -50 }}
        className="absolute flex flex-col items-center justify-center top-32 left-10 w-5/6 h-1/2 rounded-3xl shadow-md drop-shadow-xl bg-white opacity-10 z-30"
      >
        {/* 정보 박스 부분 */}
        <div className="flex flex-col w-[90%] justify-center items-center h-5/6">
          <div className="flex items-start justify-start gap-1">
            <p>
              <p className="whitespace-pre-wrap pb-5">
                {`회원님이 열람하고 관심표현을 보낸\n상대회원 데이터를 기반으로 인공지능\n기술이 적용되었습니다.`}
              </p>
              {/* 로고 부분 */}
              <div className="flex gap-1 items-start justify-start text-lg w-full h-1/2">
                <span className="text-white font-medium drop-shadow-[0.08em_0.08em_0_rgba(0_0_0_/_0.8)] opacity-90">
                  <span className="text-red-400">A</span>fter
                </span>
                <span className="flex text-blue-400 font-medium justify-end drop-shadow-[0.08em_0.08em_0_rgba(0_0_0_/_0.8)] opacity-90">
                  Like
                </span>
                <p className="text-base mt-1">의</p>
              </div>
              인공지능이 추천해주는{" "}
              <span className="text-white bg-sky-500 rounded-sm p-0.5">
                {myName}
              </span>
              님과 가장 어울리는 회원님은{" "}
              <span className="text-white bg-pink-500 rounded-sm p-0.5">
                {username[0]}
              </span>
              님 입니다.
            </p>
          </div>
        </div>
        <button
          onClick={() => setInfo(false)}
          className="bg-blue-500 rounded-md w-5/6 py-1 text-white text"
        >
          확인
        </button>
      </motion.div>
    );
  }, [isInfo]);

  const InfoClick = () => {
    setInfo(true);
  };

  useLayoutEffect(() => {
    const userEmail = client.getUserEmail();
    axios
      .post(`${URL}${RECOMMEND}`, {
        email: userEmail,
      })
      .then((res) => res.data)
      .then((user) => {
        console.log("받아오는 값 :", user);
        setUsername([...user.map((items: any) => items.nickname)]);
        setRegion([...user.map((items: any) => items.region)]);
        setJob([...user.map((items: any) => items.job)]);
        setImage([...user.map((items: any) => items.image)]);
        setMyName(user[3].myName);
      });
    console.log("보내는 값 :", { email: userEmail });
  }, []);

  const recommendClick = () => {
    !isClick && setClick(true);
  };

  return (
    <>
      {!job && !username && !region && !image && !myName && <LoadingSpinner />}
      <AnimatePresence>{isInfo && infoComponent}</AnimatePresence>
      <div
        className={`relative flex flex-col items-center w-full h-full max-w-[98%] max-h-[98%] gap-2 py-2 select-none ${
          isInfo && "blur-lg "
        }`}
      >
        <span
          className="text-4xl text-center w-full h-[12%] font-bold font-sebang drop-shadow-[0.08em_0.08em_0_rgba(255_155_0_/_0.8)]
        active:drop-shadow-[0.08em_0.08em_0_rgba(105_127_255_/_0.8)] active:scale-95 duration-100"
          onClick={recommendClick}
        >
          천생연분
        </span>
        {isClick && (
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.7,
            }}
            className="absolute right-5 top-2 cursor-help"
          >
            <HiOutlineInformationCircle
              size="35"
              color="#1e88e5"
              onClick={InfoClick}
            />
          </motion.div>
        )}
        {!isClick && (
          <span className="absolute text-xs top-12">위 글씨를 클릭하세요!</span>
        )}
        {/* 추천 1, 2, 3등 큰 박스 */}
        {isClick && (
          <div className="relative flex flex-col items-start gap-2 w-full h-5/6">
            {/* 유저 정보 박스 */}
            <RecommendTemplate
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              ratingDiv={
                <>
                  <FaCrown
                    className="absolute top-[-45px] left-[-20px] z-20 rotate-[340deg]"
                    size="28"
                    color="yellow"
                  />
                  <div className=" absolute z-20 left-[-15px] top-[-30px] flex justify-center h-1/4 w-[13.5%] text-center">
                    <p className="relative text-center py-1.5 font-bold">1위</p>
                  </div>
                </>
              }
              img={image[0] === "default" ? `${image[0]}.png` : image[0]}
              job={job[0]}
              region={region[0]}
              username={username[0]}
            />
            <RecommendTemplate
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.15,
              }}
              ratingDiv={
                <>
                  <div className="absolute z-20 right-[-14px] top-[-27px] flex justify-center rounded-full h-1/4 w-[13.5%] text-center">
                    <p className="relative text-center py-1.5 font-bold">2위</p>
                  </div>
                  <FaCrown
                    className="absolute top-[-40px] right-[-22px] z-20 rotate-[20deg]"
                    size="28"
                    color="silver"
                  />
                </>
              }
              img={image[1] === "default" ? `${image[1]}.png` : image[1]}
              job={job[1]}
              region={region[1]}
              username={username[1]}
              className="top-40 left-8"
            />
            <RecommendTemplate
              initial={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.3,
              }}
              ratingDiv={
                <>
                  <div className="absolute z-20 right-0 top-[-30px] flex justify-center rounded-full h-1/4 w-[13.5%] text-center">
                    <p className="relative text-center py-1.5 font-bold">3위</p>
                  </div>
                  <FaCrown
                    className="absolute top-[-45px] right-[-8px] z-20 rotate-[20deg]"
                    size="28"
                    color="#bf360c"
                  />
                </>
              }
              img={image[2] === "default" ? `${image[2]}.png` : image[2]}
              job={job[2]}
              region={region[2]}
              username={username[2]}
              className="top-80 left-16"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default RecommendPage;
