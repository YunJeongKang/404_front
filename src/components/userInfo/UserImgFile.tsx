import axios from "axios";
import { useEffect, useState } from "react";
import PATH from "@utils/routes/PATH";
import { motion } from "framer-motion";
import { BsArrowBarUp, BsArrowRight } from "react-icons/bs";
import useClient from "@store/useClient";
import { UserImage } from "@models/user/UserDetail";
import useAuth from "@store/useAuth";

const { USER_IMAGE, URL } = PATH;

const UserImgFile = () => {
  const [image1, setImage1] = useState<any>("");
  const [image2, setImage2] = useState<any>("");
  const [image3, setImage3] = useState<any>("");
  const [image4, setImage4] = useState<any>("");
  const [image5, setImage5] = useState<any>("");
  const [image6, setImage6] = useState<any>("");

  const [fileName, setFileName] = useState<UserImage>({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
  });

  // 백엔드에 보내주는 인코딩 이미지 데이터
  const formData = new FormData();
  // [...Array(6).keys()].forEach((value,index) =>  formData.append(`userImage${index}`, image[index]))
  formData.append("userImage", image1);
  formData.append("userImage", image2);
  formData.append("userImage", image3);
  formData.append("userImage", image4);
  formData.append("userImage", image5);
  formData.append("userImage", image6);

  const isAuth = useAuth();

  const onClick = () => {
    // 보내는 값
    console.log("보내는 값:", {
      "userImage[0]": formData.get("userImage"),
      formData: formData.getAll("userImage"),
      email: email,
      imageName: fileName,
    });
    // axios 통신
    axios.put(`${URL}${USER_IMAGE}`, {
      formData: formData.getAll("userImage"),
      email: email,
      imageName: { ...fileName },
    });
    // .then((res) => isAuth.setAutoLogin(res.data.isAuthenticated));
  };

  const email = useClient().getUserEmail();

  const encode1 = (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve: any) => {
      reader.onload = () => {
        setImage1(reader.result);
        resolve();
      };
    });
  };
  const encode2 = (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve: any) => {
      reader.onload = () => {
        setImage2(reader.result);
        resolve();
      };
    });
  };
  const encode3 = (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve: any) => {
      reader.onload = () => {
        setImage3(reader.result);
        resolve();
      };
    });
  };
  const encode4 = (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve: any) => {
      reader.onload = () => {
        setImage4(reader.result);
        resolve();
      };
    });
  };
  const encode5 = (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve: any) => {
      reader.onload = () => {
        setImage5(reader.result);
        resolve();
      };
    });
  };
  const encode6 = (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve: any) => {
      reader.onload = () => {
        setImage6(reader.result);
        resolve();
      };
    });
  };

  const onImgChange1 = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = (evt.target.files as FileList)[0];
    setImage1(file);
    encode1(file);
    setFileName({
      ...fileName,
      [evt.target.name]: (evt.target.files as FileList)[0].name,
    });
  };
  const onImgChange2 = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = (evt.target.files as FileList)[0];
    setImage2(file);
    encode2(file);
    setFileName({
      ...fileName,
      [evt.target.name]: (evt.target.files as FileList)[0].name,
    });
  };
  const onImgChange3 = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = (evt.target.files as FileList)[0];
    setImage3(file);
    encode3(file);
    setFileName({
      ...fileName,
      [evt.target.name]: (evt.target.files as FileList)[0].name,
    });
  };
  const onImgChange4 = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = (evt.target.files as FileList)[0];
    setImage4(file);
    encode4(file);
    setFileName({
      ...fileName,
      [evt.target.name]: (evt.target.files as FileList)[0].name,
    });
  };
  const onImgChange5 = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = (evt.target.files as FileList)[0];
    setImage5(file);
    encode5(file);
    setFileName({
      ...fileName,
      [evt.target.name]: (evt.target.files as FileList)[0].name,
    });
  };
  const onImgChange6 = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = (evt.target.files as FileList)[0];
    setImage6(file);
    encode6(file);
    setFileName({
      ...fileName,
      [evt.target.name]: (evt.target.files as FileList)[0].name,
    });
  };

  return (
    <motion.div
      initial={{ translateY: 20, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1.0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex flex-col justify-center items-center w-full h-[99%] select-none"
    >
      {/* 프로필 사진 업로드 공간 */}
      <div className="grid grid-cols-3 w-[99%] h-[40%] bg-gray-200">
        <input
          type="file"
          name="image1"
          id="userImgInput1"
          accept="image/*"
          className="hidden"
          onChange={onImgChange1}
        />
        <label
          htmlFor="userImgInput1"
          className="relative flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400 w-full h-full overflow-hidden"
        >
          <div className="absolute flex flex-col justify-center items-center overflow-hidden w-full h-full">
            {image1 ? (
              <img src={image1} alt="" className="h-full w-full object-cover" />
            ) : (
              "이미지를 업로드 해주세요"
            )}
          </div>
        </label>
        <input
          type="file"
          name="image2"
          id="userImgInput2"
          accept="image/*"
          className="hidden"
          onChange={onImgChange2}
        />
        <label
          htmlFor="userImgInput2"
          className="relative flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400 w-full h-full overflow-hidden"
        >
          <div className="absolute flex flex-col justify-center items-center overflow-hidden w-full h-full">
            {image2 ? (
              <img src={image2} alt="" className="h-full w-full object-cover" />
            ) : (
              "이미지를 업로드 해주세요"
            )}
          </div>
        </label>
        <input
          type="file"
          name="image3"
          id="userImgInput3"
          accept="image/*"
          className="hidden"
          onChange={onImgChange3}
        />
        <label
          htmlFor="userImgInput3"
          className="relative flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400 w-full h-full overflow-hidden"
        >
          <div className="absolute flex flex-col justify-center items-center overflow-hidden w-full h-full">
            {image3 ? (
              <img src={image3} alt="" className="h-full w-full object-cover" />
            ) : (
              "이미지를 업로드 해주세요"
            )}
          </div>
        </label>
        <input
          type="file"
          name="image4"
          id="userImgInput4"
          accept="image/*"
          className="hidden"
          onChange={onImgChange4}
        />
        <label
          htmlFor="userImgInput4"
          className="relative flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400 w-full h-full overflow-hidden"
        >
          <div className="absolute flex flex-col justify-center items-center overflow-hidden w-full h-full">
            {image4 ? (
              <img src={image4} alt="" className="h-full w-full object-cover" />
            ) : (
              "이미지를 업로드 해주세요"
            )}
          </div>
        </label>
        <input
          type="file"
          name="image5"
          id="userImgInput5"
          accept="image/*"
          className="hidden"
          onChange={onImgChange5}
        />
        <label
          htmlFor="userImgInput5"
          className="relative flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400 w-full h-full overflow-hidden"
        >
          <div className="absolute flex flex-col justify-center items-center overflow-hidden w-full h-full">
            {image5 ? (
              <img src={image5} alt="" className="h-full w-full object-cover" />
            ) : (
              "이미지를 업로드 해주세요"
            )}
          </div>
        </label>
        <input
          type="file"
          name="image6"
          id="userImgInput6"
          accept="image/*"
          className="hidden"
          onChange={onImgChange6}
        />
        <label
          htmlFor="userImgInput6"
          className="relative flex justify-center items-center border-2 border-white text-[0.5rem] text-gray-400 w-full h-full overflow-hidden"
        >
          <div className="absolute flex flex-col justify-center items-center overflow-hidden w-full h-full">
            {image6 ? (
              <img src={image6} alt="" className="h-full w-full object-cover" />
            ) : (
              "이미지를 업로드 해주세요"
            )}
          </div>
        </label>
      </div>
      {/* 안내 버튼 */}
      <motion.div
        initial={{ translateY: 5 }}
        animate={{ translateY: 0 }}
        transition={{
          repeat: Infinity,
          ease: "easeInOut",
          duration: 0.8,
          repeatType: "mirror",
        }}
        className="flex items-center h-[7%] pt-3"
      >
        {!fileName.image1 &&
          !fileName.image2 &&
          !fileName.image3 &&
          !fileName.image4 &&
          !fileName.image5 &&
          !fileName.image6 && (
            <div className="flex items-center gap-2">
              <BsArrowBarUp size="20" />
              <span className="text-sm "> 사진을 한개 이상 올려주세요!</span>
            </div>
          )}
      </motion.div>
      {/* 제출 버튼 */}
      <div className="flex items-center justify-center w-full h-[14%]">
        <button
          className="flex py-2 px-4 text-lg font-bold w-[65%] justify-around rounded-3xl h-fit border-2 border-blue-400
         text-blue-500 duration-150 active:scale-95 active:text-blue-600 active active:border-blue-500 text-center"
          onClick={onClick}
        >
          <span>After Like 시작하기</span> <BsArrowRight size="27" />
        </button>
      </div>
    </motion.div>
  );
};

export default UserImgFile;
