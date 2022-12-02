import React from "react";
interface LikePageInterface {
  img: string;
  username: string;
  job: string;
  region: string;
  education: string;
  salary: string;
}

const LikePageTemplate = ({
  img,
  username,
  job,
  region,
  education,
  salary,
}: LikePageInterface) => {
  return (
    <div className="relative flex justify-center  items-center w-[95%] h-[18%] my-3">
      {/* 이미지 영역 */}
      <div className="absolute left-2 flex justify-start items-center rounded-full overflow-hidden w-[25%] h-[95%]">
        <img
          src={`${import.meta.env.VITE_S3_BASE_URL}/${img}`}
          alt=""
          className="object-cover h-full w-full"
        />
      </div>
      {/* 회원 정보 간략 확인창 */}
      <div className="flex flex-col justify-start items-start w-1/2 px-2 ml-5 text-blue-600">
        {/* 닉네임 */}
        <span className="text-2xl font-bold text-black py-1 ">
          {username}
          <div className="flex gap-0.5 text-base font-normal">
            {/* 직업, 지역 */}
            <span>{job}</span>·<span>{region}</span>
          </div>
        </span>
        {/* 학력, 연봉 */}
        <div className="flex gap-1.5">
          <span>#{education}</span>
          <span>#{salary}</span>
        </div>
      </div>
      {/* 버튼 영역 */}
      <div className="absolute flex h-1/2 gap-2 right-0 top-6">
        <button className="rounded text-white bg-red-500 px-3 h-[60%] active:scale-90 duration-150">
          하트
        </button>
        <button className="rounded text-gray-600 border-2 px-2 h-[60%] active:scale-90 duration-150">
          패스
        </button>
      </div>
    </div>
  );
};

export default LikePageTemplate;
