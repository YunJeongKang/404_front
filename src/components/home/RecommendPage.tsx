import { useState } from "react";
import RecommendTemplate from "@utils/common/app/RecommendTemplate";
import axios from "axios";
import PATH from "@utils/routes/PATH";

const RecommendPage = () => {
  const [isClick, setClick] = useState<boolean>(false);
  const { URL, RECOMMEND } = PATH;

  return (
    <div className="relative flex flex-col items-center w-full h-full max-w-[98%] max-h-[98%] gap-2 py-2 select-none">
      <span
        className="text-4xl text-center w-full h-[14%] font-bold font-chosun drop-shadow-[0.08em_0.08em_0_rgba(255_155_0_/_0.8)]
      active:drop-shadow-[0.08em_0.08em_0_rgba(105_127_255_/_0.8)] active:scale-95 duration-100"
        onClick={() => {
          setClick(true);
          axios.post(`${URL}${RECOMMEND}`, { isClick: isClick });
        }}
      >
        천생연분
      </span>
      {/* 추천 1, 2, 3등 큰 박스 */}
      <div className="relative flex flex-col items-start w-full h-5/6">
        {/* 유저 정보 박스 */}
        <RecommendTemplate
          ratingDiv={
            <div className="absolute z-20 left-[-15px] top-[-20px] flex justify-center border-2 rounded-full h-1/4 w-[13.5%] text-center">
              <p className="relative text-center py-1.5 font-bold">1위</p>
            </div>
          }
          img={`${import.meta.env.VITE_S3_BASE_URL}/yena.jpg`}
          job="직업"
          region="지역"
          username="닉네임"
        />
        <RecommendTemplate
          ratingDiv={
            <div className="absolute z-20 right-[-14px] top-[-17px] flex justify-center border-2 rounded-full h-1/4 w-[13.5%] text-center">
              <p className="relative text-center py-1.5 font-bold">2위</p>
            </div>
          }
          img={`${import.meta.env.VITE_S3_BASE_URL}/yena.jpg`}
          job="직업"
          region="지역"
          username="닉네임"
          className="ml-14"
        />
        <RecommendTemplate
          ratingDiv={
            <div className="absolute z-20 right-[-9px] top-[-20px] flex justify-center border-2 rounded-full h-1/4 w-[13.5%] text-center">
              <p className="relative text-center py-1.5 font-bold">3위</p>
            </div>
          }
          img={`${import.meta.env.VITE_S3_BASE_URL}/yena.jpg`}
          job="직업"
          region="지역"
          username="닉네임"
          className="ml-24"
        />
      </div>
    </div>
  );
};

export default RecommendPage;
