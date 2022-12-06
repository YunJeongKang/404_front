import useClient from "@store/useClient";
import PATH from "@utils/routes/PATH";
import axios from "axios";
import { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface MainPageTemplateState {
  img: string;
  username: string;
  age: string;
  region: string;
  appearance: string;
  personality: string;
  introSelf: string;
  wanted: string;
}

const MainPageTemplate = ({
  img,
  username,
  age,
  region,
  appearance,
  personality,
  introSelf,
  wanted,
}: MainPageTemplateState) => {
  const [heart, setHeart] = useState<boolean | null>(null);
  const { URL, HOME } = PATH;

  const client = useClient();
  useEffect(() => {
    heart &&
      axios.post(`${URL}${HOME}`, {
        email: client.getUserEmail(),
        username: username,
      });
    heart &&
      console.log("관심표현시 보내지는 데이터 :", {
        email: client.getUserEmail(),
        username: username,
      });

    heart !== null &&
      !heart &&
      axios.delete(`${URL}${HOME}`, {
        data: {
          email: client.getUserEmail(),
          username: username,
        },
      });

    heart !== null &&
      !heart &&
      console.log("관심표현 제거시 보내지는 데이터 :", {
        email: client.getUserEmail(),
        username: username,
      });
  }, [heart]);

  return (
    <div className="flex flex-col items-center w-full h-[80%] bg-white rounded-xl text-xl my-2">
      {/* 이미지 부분 */}
      <div className="relative w-[97%] h-[70%] bg-black rounded-xl m-1">
        <div className="relative rounded-t-xl w-full h-full rounded-b-xl z-0 overflow-hidden">
          {/* 관심표현 */}
          <button
            className="absolute top-2 z-20 left-2"
            onClick={() => {
              setHeart(true);
              heart && setHeart(false);
            }}
          >
            {heart ? (
              <AiFillHeart size="30" color="#FF2202" />
            ) : (
              <AiOutlineHeart size="30" color="#FF2202" />
            )}
          </button>
          {/* 회원 대표사진 */}
          <img
            src={`${import.meta.env.VITE_S3_BASE_URL}/${img}`}
            className="absolute z-0 top-[-45px] object-cover"
            alt=""
          />
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black" />
        </div>
        {/* 유저 Image in 텍스트 UI창 */}
        <div className="absolute z-20 w-[98%] flex flex-col justify-start text-white bottom-2 left-4">
          <span className="absolute bottom-7 text-3xl">{username}</span>
          <div className="absolute bottom-0 flex gap-1 w-full">
            <span className="w-[6%]">{age}</span>
            <span className="w-[1.5%]">·</span>
            <span className="w-[31%]">{region}</span>
            <div className="absolute right-4 flex text-base ml-28 w-[40%] mt-1 gap-2">
              <span>#{personality}</span>
              <span>#{appearance}</span>
            </div>
          </div>
        </div>
      </div>
      {/* 텍스트 영역 */}
      <div className="flex flex-col items-center h-1/3 w-full gap-1 mb-2">
        {/* 자기소개 */}
        <div className="relative flex flex-col items-start h-[48%] w-[97%] rounded-lg border-2 shadow-md">
          <span className="text-sm m-0.5 left-4 top-1 z-10 underline underline-offset-[3px]">
            저는 이런 사람이에요
          </span>
          <p className="w-[95%] h-[90%] text-xs pl-1 text-gray-500">
            {`${introSelf.slice(0, 115)}${introSelf.length > 115 ? "..." : ""}`}
          </p>
        </div>
        {/* 원하는 이상형 정보 */}
        <div className="relative flex flex-col items-start h-[50%] w-[97%] rounded-lg border-2 shadow-md">
          <span className="text-sm m-0.5 left-4 top-1 z-10 underline underline-offset-[3px]">
            저는 이런사람이 이상형이에요
          </span>
          <p className="w-[95%] h-[90%] text-xs pl-1 text-gray-500">{`${wanted.slice(
            0,
            115
          )}${wanted.length > 115 ? "..." : ""}`}</p>
        </div>
      </div>
    </div>
  );
};

export default MainPageTemplate;
