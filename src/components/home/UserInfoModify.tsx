import ModalH2, {
  OutsideModal,
  SettingModalCloseButton,
} from "@styles/modal/ModalStyle";
import { IntroModal, WantedModal } from "@styles/modal/SettingModal";
import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import PATH from "@utils/routes/PATH";
import API_PATH from "@utils/routes/api/API_PATH";
import useClient from "@store/useClient";

const { URL } = API_PATH;
const { MODIFY } = PATH;

const UserInfoModify = () => {
  const [introModalOpen, setIntroModalOpen] = useState<boolean>(false);
  const [wantedModalOpen, setWantedModalOpen] = useState<boolean>(false);
  const [introduce, setIntroduce] = useState<string>("");
  const [wanted, setWanted] = useState<string>("");
  const [data, setData] = useState<any>(null);

  const introChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduce(evt.target.value);
  };

  const WantedChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWanted(evt.target.value);
  };

  const introClick = () => {
    setIntroModalOpen(true);
  };

  const WantedClick = () => {
    setWantedModalOpen(true);
  };

  const client = useClient();
  const AWS_S3_URL = import.meta.env.VITE_S3_BASE_URL;

  useEffect(() => {
    // 다른 데이터 axios
    axios
      .post(`${URL}${MODIFY}`, { email: client.getUserEmail() })
      .then((res) => res.data)
      .then((user) => {
        console.log("받는 데이터 :", { data: user });
        user.map((items: any) =>
          setData([
            {
              ...items,
            },
          ])
        );
      })
      .catch(console.error);
    console.log("보내는 데이터 :", { email: client.getUserEmail() });
    // 소개, 나의 이상형 axios
    axios
      .get(`${URL}${MODIFY}`, { data: { email: client.getUserEmail() } })
      .then((res) => res.data)
      .then((data) => {
        console.log("소개 받아오는 데이터:", data);
        setIntroduce(data.introduce);
        setWanted(data.wanted);
      });
  }, []);

  return (
    <motion.div
      initial={{ translateY: 600, opacity: 0.5 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="relative flex flex-col justify-center items-center w-full h-[99%] max-h-[200rem] select-none scrollbar-hide"
    >
      {data &&
        data.map((items: any) => (
          <>
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
                className="relative flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400 w-full h-full overflow-hidden"
              >
                <div className="absolute flex flex-col justify-center items-center overflow-hidden w-full h-full">
                  {items.image.image1 !== "default" && items.image.image1 ? (
                    <img
                      src={`${AWS_S3_URL}/${items.image.image1}`}
                      alt=""
                      key={items.image.image1}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    "이미지를 업로드 해주세요"
                  )}
                </div>
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
                className="relative flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400 w-full h-full overflow-hidden"
              >
                <div className="absolute flex flex-col justify-center items-center overflow-hidden w-full h-full">
                  {items.image.image2 !== "default" && items.image.image2 ? (
                    <img
                      src={`${AWS_S3_URL}/${items.image.image2}`}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    "이미지를 업로드 해주세요"
                  )}
                </div>
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
                className="relative flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400 w-full h-full overflow-hidden"
              >
                <div className="absolute flex flex-col justify-center items-center overflow-hidden w-full h-full">
                  {items.image.image3 !== "default" && items.image.image3 ? (
                    <img
                      src={`${AWS_S3_URL}/${items.image.image3}`}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    "이미지를 업로드 해주세요"
                  )}
                </div>
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
                className="relative flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400 w-full h-full overflow-hidden"
              >
                <div className="absolute flex flex-col justify-center items-center overflow-hidden w-full h-full">
                  {items.image.image4 !== "default" && items.image.image4 ? (
                    <img
                      src={`${AWS_S3_URL}/${items.image.image4}`}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    "이미지를 업로드 해주세요"
                  )}
                </div>
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
                className="relative flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400 w-full h-full overflow-hidden"
              >
                {" "}
                <div className="absolute flex flex-col justify-center items-center overflow-hidden w-full h-full">
                  {items.image.image5 !== "default" && items.image.image5 ? (
                    <img
                      src={`${AWS_S3_URL}/${items.image.image5}`}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    "이미지를 업로드 해주세요"
                  )}
                </div>
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
                className="relative flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400 w-full h-full overflow-hidden"
              >
                {" "}
                <div className="absolute flex flex-col justify-center items-center overflow-hidden w-full h-full">
                  {items.image.image6 !== "default" && items.image.image6 ? (
                    <img
                      src={`${AWS_S3_URL}/${items.image.image6}`}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    "이미지를 업로드 해주세요"
                  )}
                </div>
              </label>
            </div>
            {/* 회원 정보창 영역 */}
            <div className="absolute top-64 flex flex-col w-[92%] h-[165%] mt-10">
              {/* 닉네임, 성별, 생일, 위치 */}
              <div className="flex flex-col w-full h-[15%]">
                {/* 닉네임 */}
                <div className="flex items-center h-1/4">
                  <span className="w-full font-bold">닉네임</span>
                  <span className="w-full text-blue-600">{items.nickname}</span>
                </div>
                {/* 성별 */}
                <div className="flex items-center h-1/4">
                  <span className="w-full font-bold">성별</span>
                  <span className="w-full text-blue-600">{items.gender}</span>
                </div>
                {/* 생일 */}
                <div className="flex items-center h-1/4">
                  <span className="w-full font-bold">생일</span>
                  <span className="w-full text-blue-600">{items.birth}</span>
                </div>
                {/* 위치 */}
                <div className="flex items-center h-1/4">
                  <span className="w-full font-bold">위치</span>
                  <span className="w-full text-blue-600">{items.region}</span>
                </div>
              </div>
              <hr className="py-2" />
              {/* 자기소개 */}
              <div
                className="flex flex-col w-full h-fit mb-4"
                onClick={introClick}
              >
                <div className="flex items-end gap-1">
                  <span className="font-bold py-1">소개</span>
                  <span className="text-xs text-gray-400 py-1.5">
                    (300자 미만으로 작성하세요)
                  </span>
                </div>
                <IntroModal isIntroOpen={introModalOpen}>
                  <OutsideModal>
                    <ModalH2>소개</ModalH2>
                    <textarea
                      spellCheck
                      placeholder="글을 입력해주세요"
                      maxLength={300}
                      onChange={introChange}
                      className="flex justify-start border rounded-md w-5/6 h-1/2 text break-all text-ellipsis outline-none p-1 resize-none scrollbar-hide"
                    >
                      {introduce}
                    </textarea>
                    <SettingModalCloseButton
                      onClick={() => {
                        setIntroModalOpen(false);
                        axios.put(`${URL}${MODIFY}`, {
                          introduce: introduce,
                          wanted: wanted,
                          email: client.getUserEmail(),
                        });
                        console.log("소개 - 보내는 데이터 :", {
                          introduce: introduce,
                          wanted: wanted,
                          email: client.getUserEmail(),
                        });
                      }}
                    />
                  </OutsideModal>
                </IntroModal>
                {introduce ? (
                  <p className="text-blue-600 text-sm">{introduce}</p>
                ) : (
                  <p className="text-gray-300 text-sm">
                    "자신을 나타낼 수 있는 말들로 본인을 표현해보세요"
                  </p>
                )}
              </div>
              <hr className="py-2" />
              {/* 나의 이상형  */}
              <div
                className="flex flex-col w-full h-fit mb-4"
                onClick={WantedClick}
              >
                <div className="flex items-end gap-1">
                  <span className="font-bold py-1">나의 이상형</span>
                  <span className="text-xs text-gray-400 py-1.5">
                    (300자 미만으로 작성하세요)
                  </span>
                </div>
                <WantedModal isWantedOpen={wantedModalOpen}>
                  <OutsideModal>
                    <ModalH2>나의 이상형</ModalH2>
                    <textarea
                      spellCheck
                      placeholder="글을 입력해주세요"
                      maxLength={300}
                      onChange={WantedChange}
                      className="flex justify-start border rounded-md w-5/6 h-1/2 text break-all text-ellipsis outline-none p-1 resize-none scrollbar-hide"
                    >
                      {wanted}
                    </textarea>
                    <SettingModalCloseButton
                      onClick={() => {
                        setWantedModalOpen(false);
                        axios.put(`${URL}${MODIFY}`, {
                          wanted: wanted,
                          introduce: introduce,
                          email: client.getUserEmail(),
                        });
                        console.log("나의 이상형 - 보내는 데이터 :", {
                          wanted: wanted,
                          introduce: introduce,
                          email: client.getUserEmail(),
                        });
                      }}
                    />
                  </OutsideModal>
                </WantedModal>
                {wanted ? (
                  <p className="text-blue-600 text-sm">{wanted}</p>
                ) : (
                  <p className="text-gray-300 text-sm">
                    "내가 생각하는 나의 이상형에 대해서 표현해보세요"
                  </p>
                )}
              </div>
              <hr className="py-2" />
              {/* 혈액형, 운동, 음주, 흡연, 결혼유무, 결혼계획 */}
              <div className="flex flex-col w-full h-[24%]">
                {/* 혈액형 */}
                <div className="flex items-center h-1/6">
                  <span className="w-full font-bold">혈액형</span>
                  <span className="w-full text-blue-600">{items.blood!}</span>
                </div>
                {/* 운동 */}
                <div className="flex items-center h-1/6">
                  <span className="w-full font-bold">운동</span>
                  <span className="w-full text-blue-600">{items.health!}</span>
                </div>
                {/* 음주 */}
                <div className="flex items-center h-1/6">
                  <span className="w-full font-bold">음주</span>
                  <span className="w-full text-blue-600">{items.drink!}</span>
                </div>
                {/* 흡연 */}
                <div className="flex items-center h-1/6">
                  <span className="w-full font-bold">흡연</span>
                  <span className="w-full text-blue-600">{items.smoke!}</span>
                </div>
                {/* 결혼유무 */}
                <div className="flex items-center h-1/6">
                  <span className="w-full font-bold">결혼유무</span>
                  <span className="w-full text-blue-600">{items.married!}</span>
                </div>
                {/* 결혼계획 */}
                <div className="flex items-center h-1/6">
                  <span className="w-full font-bold">결혼계획</span>
                  <span className="w-full text-blue-600">
                    {items.married_plan!}
                  </span>
                </div>
              </div>
              <hr className="py-2" />
              {/* 학력, 직업, 연봉, 자산, 차량 */}
              <div className="flex flex-col w-full h-[18%]">
                {/* 학력 */}
                <div className="flex items-center h-1/5">
                  <span className="w-full font-bold">학력</span>
                  <span className="w-full text-blue-600">
                    {items.education!}
                  </span>
                </div>
                {/* 직업 */}
                <div className="flex items-center h-1/5">
                  <span className="w-full font-bold">직업</span>
                  <span className="w-full text-blue-600">{`${items.job!} (${
                    items.job_info
                  })`}</span>
                </div>
                {/* 연봉 */}
                <div className="flex items-center h-1/5">
                  <span className="w-full font-bold">연봉</span>
                  <span className="w-full text-blue-600">{items.salary!}</span>
                </div>
                {/* 자산 */}
                <div className="flex items-center h-1/5">
                  <span className="w-full font-bold">자산</span>
                  <span className="w-full text-blue-600">{items.asset!}</span>
                </div>
                {/* 차량 */}
                <div className="flex items-center h-1/5">
                  <span className="w-full font-bold">차량</span>
                  <span className="w-full text-blue-600">{items.car!}</span>
                </div>
              </div>
              <hr className="py-2" />
              {/* 외모, 성격, 패션스타일 */}
              <div className="flex flex-col w-full h-[20%]">
                {/* 외모 */}
                <div className="flex items-center h-[20%]">
                  <span className="w-full font-bold">외모</span>
                  <div className="flex w-full text-sm">
                    <span className="w-fit text-center text-blue-600 border-2 border-blue-400 rounded-md px-1">
                      #{items.style!}
                    </span>
                  </div>
                </div>
                {/* 성격 */}
                <div className="flex items-center h-[40%]">
                  <span className="w-full font-bold">성격</span>
                  <div className="flex flex-wrap w-full text-sm gap-2">
                    {items.character!.map((item: string) => (
                      <span className="w-fit text-center text-blue-600 border-2 border-blue-400 rounded-md px-1">
                        {`#${item}`}
                      </span>
                    ))}
                  </div>
                </div>
                {/* 패션스타일 */}
                <div className="flex items-center h-[40%]">
                  <span className="w-full font-bold">패션스타일</span>
                  <div className="flex flex-wrap w-full text-sm gap-2">
                    {items.fashion!.map((item: string) => (
                      <span className="w-fit text-center text-blue-600 border-2 border-blue-400 rounded-md px-1">
                        {`#${item}`}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
    </motion.div>
  );
};

export default UserInfoModify;
