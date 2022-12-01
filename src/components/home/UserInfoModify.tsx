import { motion } from "framer-motion";

const UserInfoModify = () => {
  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative flex flex-col justify-center items-center w-full h-[99%] scrollbar-hide"
    >
      {/* 이미지 영역 */}
      <div className="grid grid-cols-3 w-[99%] h-[45%] bg-gray-200">
        <input
          type="file"
          name="image1"
          id="imgInput1"
          accept="image/*"
          className="hidden"
        />
        <label
          htmlFor="imgInput1"
          className="flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400"
        >
          이미지를 올려주세요
        </label>
        <input
          type="file"
          name="image2"
          id="imgInput2"
          accept="image/*"
          className="hidden"
        />
        <label
          htmlFor="imgInput2"
          className="flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400"
        >
          이미지를 올려주세요
        </label>
        <input
          type="file"
          name="image3"
          id="imgInput3"
          accept="image/*"
          className="hidden"
        />
        <label
          htmlFor="imgInput3"
          className="flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400"
        >
          이미지를 올려주세요
        </label>
        <input
          type="file"
          name="image4"
          id="imgInput4"
          accept="image/*"
          className="hidden"
        />
        <label
          htmlFor="imgInput4"
          className="flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400"
        >
          이미지를 올려주세요
        </label>
        <input
          type="file"
          name="image5"
          id="imgInput5"
          accept="image/*"
          className="hidden"
        />
        <label
          htmlFor="imgInput5"
          className="flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400"
        >
          이미지를 올려주세요
        </label>
        <input
          type="file"
          name="image6"
          id="imgInput6"
          accept="image/*"
          className="hidden"
        />
        <label
          htmlFor="imgInput6"
          className="flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400"
        >
          이미지를 올려주세요
        </label>
      </div>
      {/* 회원 정보창 영역 */}
      <div className="flex flex-col w-[92%] h-[60%] mt-4">
        {/* 닉네임, 성별, 생일, 위치 */}
        <div className="flex flex-col w-full h-[45%]">
          {/* 닉네임 */}
          <div className="flex items-center h-1/4">
            <span className="w-full font-bold">닉네임</span>
            <span className="w-full text-blue-600">용고</span>
          </div>
          {/* 성별 */}
          <div className="flex items-center h-1/4">
            <span className="w-full font-bold">성별</span>
            <span className="w-full text-blue-600">남자</span>
          </div>
          {/* 생일 */}
          <div className="flex items-center h-1/4">
            <span className="w-full font-bold">생일</span>
            <span className="w-full text-blue-600">1999-06-05</span>
          </div>
          {/* 위치 */}
          <div className="flex items-center h-1/4">
            <span className="w-full font-bold">위치</span>
            <span className="w-full text-blue-600">광주광역시</span>
          </div>
        </div>
        <hr className="py-2" />
        {/* 자기소개 */}
        <div className="flex flex-col w-full h-1/4">
          <span className="font-bold py-1">소개</span>
          <p className="text-blue-600 text-sm">
            여기는 니가 어떤 사람이고 뭘 어필할 수 있는지 쓰는 곳
          </p>
        </div>
        <hr className="py-2" />
        {/* 나의 이상형  */}
        <div className="flex flex-col w-full h-1/4">
          <span className="font-bold py-1">나의 이상형</span>
          <p className="text-blue-600 text-sm">
            여기는 니가 니 이상형에 대해 글을쓰는 곳입니다
          </p>
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default UserInfoModify;
