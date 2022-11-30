import { useState } from "react";
import RecommendTemplate from "@utils/common/app/RecommendTemplate";
import axios from "axios";
import PATH from "@utils/routes/PATH";
import { FaCrown } from "react-icons/fa";
import useClient from "@store/useClient";

const RecommendPage = () => {
  const [isClick, setClick] = useState<boolean>(false);
  const { URL, RECOMMEND } = PATH;
  const client = useClient();

  return (
    <div className="relative flex flex-col items-center w-full h-full max-w-[98%] max-h-[98%] gap-2 py-2 select-none">
      <span
        className="text-4xl text-center w-full h-[14%] font-bold font-sebang drop-shadow-[0.08em_0.08em_0_rgba(255_155_0_/_0.8)]
      active:drop-shadow-[0.08em_0.08em_0_rgba(105_127_255_/_0.8)] active:scale-95 duration-100"
        onClick={() => {
          !isClick && setClick(true);
          const userEmail = client.getUserEmail();
          axios.post(`${URL}${RECOMMEND}`, {
            email: userEmail,
          });
          console.log("보내는 값 :", { email: userEmail });
        }}
      >
        천생연분
      </span>
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
            img="/yena.jpg"
            job="가수"
            region="서울어딘가"
            username="최예나"
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
            img="/Hyewoon.jpg"
            job="배우"
            region="모름"
            username="김혜인?"
            className="!ml-14"
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
            img="/Jien.jpg"
            job="배우"
            region="천원짜리"
            username="변호사"
            className="!ml-24"
          />
        </div>
      )}
    </div>
  );
};

export default RecommendPage;
