interface RecommendTemplateInterface {
  img: string;
  username: string;
  region: string;
  job: string;
  className?: string;
  ratingDiv: React.ReactNode;
}

const RecUserTemplate = ({
  img,
  job,
  region,
  username,
  className,
  ratingDiv,
}: RecommendTemplateInterface) => {
  return (
    <div
      className={`relative ml-4 h-[35%] w-[75%] rounded-t-2xl flex justify-center ${className}`}
    >
      <>
        {ratingDiv}
        {/* 회원 이미지 영역 */}
        <div className="absolute z-0 w-full h-full rounded-t-2xl top-0 left-0 overflow-hidden">
          <img src={img} alt="" className="absolute top-[-2.5rem]" />
          {/* 그라데이션 필터 */}
          <div className="z-10 absolute w-[101%] h-[101%] rounded-t-2xl top-0 left-0 overflow-hidden bg-gradient-to-b from-transparent  via-transparent to-white" />
        </div>
      </>
      <span className="text-xl absolute top-[7rem] left-4 font-semibold">
        {username}
      </span>
      <span className="text-xl absolute top-[8.5rem] left-4 font-semibold">
        <span>{region}</span> <span className="text-xl">·</span>
        <span>{job}</span>
      </span>
    </div>
  );
};

export default RecUserTemplate;
