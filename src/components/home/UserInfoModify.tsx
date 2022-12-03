import ModalH2, {
  OutsideModal,
  SettingModalCloseButton,
} from "@styles/modal/ModalStyle";
import { IntroModal } from "@styles/modal/SettingModal";
import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";

const UserInfoModify = () => {
  const [introModalOpen, setIntroModalOpen] = useState<boolean>(false);

  const introClick = () => {
    setIntroModalOpen(true);
  };
  return (
    <motion.div
      initial={{ translateY: 600, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="relative flex flex-col justify-center items-center w-full h-[99%] max-h-[200rem] scrollbar-hide"
    >
      {/* 이미지 영역 */}
      <div className="absolute top-0 grid grid-cols-3 w-[99%] h-[45%] max-h-full bg-gray-200">
        <input
          type="file"
          name="imageInfo1"
          id="imgInput1"
          accept="image/*"
          className="hidden"
        />
        <label
          htmlFor="imgInput1"
          className="flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400 cursor-pointer"
        >
          이미지를 올려주세요
        </label>
        <input
          type="file"
          name="imageInfo2"
          id="imgInput2"
          accept="image/*"
          className="hidden"
        />
        <label
          htmlFor="imgInput2"
          className="flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400 cursor-pointer"
        >
          이미지를 올려주세요
        </label>
        <input
          type="file"
          name="imageInfo3"
          id="imgInput3"
          accept="image/*"
          className="hidden"
        />
        <label
          htmlFor="imgInput3"
          className="flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400 cursor-pointer"
        >
          이미지를 올려주세요
        </label>
        <input
          type="file"
          name="imageInfo4"
          id="imgInput4"
          accept="image/*"
          className="hidden"
        />
        <label
          htmlFor="imgInput4"
          className="flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400 cursor-pointer"
        >
          이미지를 올려주세요
        </label>
        <input
          type="file"
          name="imageInfo5"
          id="imgInput5"
          accept="image/*"
          className="hidden"
        />
        <label
          htmlFor="imgInput5"
          className="flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400 cursor-pointer"
        >
          이미지를 올려주세요
        </label>
        <input
          type="file"
          name="imageInfo6"
          id="imgInput6"
          accept="image/*"
          className="hidden"
        />
        <label
          htmlFor="imgInput6"
          className="flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400 cursor-pointer"
        >
          이미지를 올려주세요
        </label>
      </div>
      {/* 회원 정보창 영역 */}
      <div className="absolute top-64 flex flex-col w-[92%] h-[165%] mt-10">
        {/* 닉네임, 성별, 생일, 위치 */}
        <div className="flex flex-col w-full h-[15%]">
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
        <div className="flex flex-col w-full h-fit mb-4" onClick={introClick}>
          <span className="font-bold py-1">소개</span>
          <IntroModal isIntroOpen={introModalOpen}>
            <OutsideModal>
              <ModalH2>소개</ModalH2>
              <SettingModalCloseButton
                onClick={() => setIntroModalOpen(false)}
              />
            </OutsideModal>
          </IntroModal>
          <p className="text-blue-600 text-sm">
            여기는 니가 어떤 사람이고 뭘 어필할 수 있는지 쓰는 곳
          </p>
        </div>
        <hr className="py-2" />
        {/* 나의 이상형  */}
        <div className="flex flex-col w-full h-fit mb-4">
          <span className="font-bold py-1">나의 이상형</span>
          <p className="text-blue-600 text-sm">
            여기는 니가 니 이상형에 대해 글을쓰는 곳입니다
          </p>
        </div>
        <hr className="py-2" />
        {/* 혈액형, 운동, 음주, 흡연, 결혼유무, 결혼계획 */}
        <div className="flex flex-col w-full h-[24%]">
          {/* 혈액형 */}
          <div className="flex items-center h-1/6">
            <span className="w-full font-bold">혈액형</span>
            <span className="w-full text-blue-600">B형</span>
          </div>
          {/* 운동 */}
          <div className="flex items-center h-1/6">
            <span className="w-full font-bold">운동</span>
            <span className="w-full text-blue-600">주3회 이상</span>
          </div>
          {/* 음주 */}
          <div className="flex items-center h-1/6">
            <span className="w-full font-bold">음주</span>
            <span className="w-full text-blue-600">즐기는 편</span>
          </div>
          {/* 흡연 */}
          <div className="flex items-center h-1/6">
            <span className="w-full font-bold">흡연</span>
            <span className="w-full text-blue-600">비흡연</span>
          </div>
          {/* 결혼유무 */}
          <div className="flex items-center h-1/6">
            <span className="w-full font-bold">결혼유무</span>
            <span className="w-full text-blue-600">미혼</span>
          </div>
          {/* 결혼계획 */}
          <div className="flex items-center h-1/6">
            <span className="w-full font-bold">결혼계획</span>
            <span className="w-full text-blue-600">언제든지</span>
          </div>
        </div>
        <hr className="py-2" />
        {/* 학력, 직업, 연봉, 자산, 차량 */}
        <div className="flex flex-col w-full h-[18%]">
          {/* 학력 */}
          <div className="flex items-center h-1/5">
            <span className="w-full font-bold">학력</span>
            <span className="w-full text-blue-600">고등학교</span>
          </div>
          {/* 직업 */}
          <div className="flex items-center h-1/5">
            <span className="w-full font-bold">직업</span>
            <span className="w-full text-blue-600">FE개발자</span>
          </div>
          {/* 연봉 */}
          <div className="flex items-center h-1/5">
            <span className="w-full font-bold">연봉</span>
            <span className="w-full text-blue-600">3000만원대</span>
          </div>
          {/* 자산 */}
          <div className="flex items-center h-1/5">
            <span className="w-full font-bold">자산</span>
            <span className="w-full text-blue-600">개털</span>
          </div>
          {/* 차량 */}
          <div className="flex items-center h-1/5">
            <span className="w-full font-bold">차량</span>
            <span className="w-full text-blue-600">준중형</span>
          </div>
        </div>
        <hr className="py-2" />
        {/* 닉네임, 성별, 생일, 위치 */}
        <div className="flex flex-col w-full h-[20%]">
          {/* 닉네임 */}
          <div className="flex items-center h-[20%]">
            <span className="w-full font-bold">외모</span>
            <div className="flex w-full text-sm">
              <span className="w-fit text-center text-blue-600 border-2 border-blue-400 rounded-md px-1">
                #듬직함
              </span>
            </div>
          </div>
          {/* 성별 */}
          <div className="flex items-center h-[40%]">
            <span className="w-full font-bold">성격</span>
            <div className="flex flex-wrap w-full text-sm gap-2">
              <span className="w-fit text-center text-blue-600 border-2 border-blue-400 rounded-md px-1">
                #열정적
              </span>
              <span className="w-fit text-center text-blue-600 border-2 border-blue-400 rounded-md px-1">
                #자유분방
              </span>
              <span className="w-fit text-center text-blue-600 border-2 border-blue-400 rounded-md px-1">
                #매사긍정
              </span>
            </div>
          </div>
          {/* 생일 */}
          <div className="flex items-center h-[40%]">
            <span className="w-full font-bold">패션스타일</span>
            <div className="flex flex-wrap w-full text-sm gap-2">
              <span className="w-fit text-center text-blue-600 border-2 border-blue-400 rounded-md px-1">
                #평범한 데일리룩
              </span>
              <span className="w-fit text-center text-blue-600 border-2 border-blue-400 rounded-md px-1">
                #트랜디 캐쥬얼
              </span>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default UserInfoModify;
