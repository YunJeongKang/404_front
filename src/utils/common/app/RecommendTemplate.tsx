import { motion } from "framer-motion";

interface RecommendTemplateInterface {
  img: string;
  username: string;
  region: string;
  job: string;
  className?: string;
  ratingDiv: React.ReactNode;
  initial: any;
  animate: any;
  transition: any;
}

const RecUserTemplate = ({
  img,
  job,
  region,
  username,
  className,
  ratingDiv,
  initial,
  animate,
  transition,
}: RecommendTemplateInterface) => {
  return (
    <motion.div
      className={`relative ml-4 h-[33%] w-[75%] rounded-t-2xl flex justify-center ${className}`}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <>
        {ratingDiv}
        {/* 회원 이미지 영역 */}
        <div className="absolute z-0 w-full h-full rounded-t-2xl top-0 left-0 overflow-hidden">
          <img
            src={`${import.meta.env.VITE_S3_BASE_URL}${img}`}
            alt=""
            className="absolute top-[-2.5rem] object-cover"
          />
          {/* 그레디언트 필터 */}
          <div className="z-10 absolute w-[101%] h-[110%] rounded-t-2xl top-[-10px] left-0 overflow-hidden bg-gradient-to-b from-transparent  via-transparent to-white" />
        </div>
      </>
      <span className="text-xl absolute top-[7rem] left-4 font-semibold">
        {username}
      </span>
      <span className="text-md absolute top-[8.3rem] left-4 font-semibold z-10">
        <span>{region}</span> <span className="text-xl">·</span>
        <span>{job}</span>
      </span>
    </motion.div>
  );
};

export default RecUserTemplate;
