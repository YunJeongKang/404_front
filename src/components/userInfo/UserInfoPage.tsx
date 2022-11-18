import UserInfoForm from "@styles/indexForm";
import Age from "./ClientProfileData/Age";
import Gender from "./ClientProfileData/Gender";
import Married from "./ClientProfileData/Married";
import Region from "./ClientProfileData/Region";
import GyungkiInfoRegion from "./ClientProfileData/region_info/GyungkiInfo";
import SeoulInfoRegion from "./ClientProfileData/region_info/SeoulInfo";
import { useState } from "react";
import H2 from "@styles/indexHeading";
import PATH from "@utils/routes/PATH";
import axios from "axios";

const { UI, URL } = PATH;

const UserInfoPage = () => {
  const [info, setInfo] = useState<any>({
    gender: "",
    birth: "",
    region: "",
    gyungkiInfo: "",
    seoulInfo: "",
    married: "",
  });

  const onChange = (evt: any) => {
    const { value, name } = evt.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  function onSubmit() {
    axios.post(`${URL}${UI}`, { ...info });
    console.log({ ...info });
  }

  return (
    <UserInfoForm onSubmit={onSubmit}>
      <H2>성별</H2>
      <Gender onChange={onChange} />
      <H2>생년월일</H2>
      <Age onChange={onChange} value={info.birth} />
      <H2>지역</H2>
      <Region />
      <>
        <H2>지역상세</H2>
        <SeoulInfoRegion />
        <GyungkiInfoRegion />
      </>
      <H2>결혼유무</H2>
      <Married />
      <button
        type="submit"
        className="border shadow rounded-md px-2.5 py-1 active:scale-95"
      >
        제출
      </button>
    </UserInfoForm>
  );
};

export default UserInfoPage;
