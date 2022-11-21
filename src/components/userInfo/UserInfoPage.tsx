import UserInfoForm from "@styles/indexForm";
import Age from "./ClientProfileData/main_info/Age";
import { useState } from "react";
import H2 from "@styles/indexHeading";
import PATH from "@utils/routes/PATH";
import axios from "axios";
import { RadioInputTemplate } from "@styles/indexInput";
import { RadioLabelTemplate } from "@styles/indexLabel";
import { genderList } from "@data/main_info/gender";
import { regionList } from "@data/main_info/region";
import { seoulList } from "@data/region_info/seoul";
import { gyungkiList } from "@data/region_info/gyungki";
import { marriedList } from "@data/main_info/married";
import {
  mainInfoInterface,
  regionInfoInterface,
} from "@models/user/UserDetail";

const { UI, URL } = PATH;

const UserInfoPage = () => {
  const [mainInfo, setMainInfo] = useState<mainInfoInterface>({
    gender: "",
    birth: "",
    region: "",
    married: "",
    sisBro: "",
  });

  const [regionInfo, setRegionInfo] = useState<regionInfoInterface>({
    kangwon: "",
    gyungki: "",
    gyungnam: "",
    gyungbuk: "",
    gwangju: "",
    daegu: "",
    daejeon: "",
    busan: "",
    seoul: "",
    sejong: "",
    ulsan: "",
    incheon: "",
    jeonnam: "",
    jeonbuk: "",
    jeju: "",
    chungnam: "",
    chungbuk: "",
    foreign: "",
  });

  const mainInfoChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { value, name } = evt.target;
    setMainInfo({
      ...mainInfo,
      [name]: value,
    });
  };

  const regionInfoChange: React.ChangeEventHandler<HTMLInputElement> = (
    evt
  ) => {
    const { value, name } = evt.target;
    setRegionInfo({
      ...regionInfo,
      [name]: value,
    });
  };

  function onSubmit() {
    axios.post(`${URL}${UI}`, { ...mainInfo, ...regionInfo });
    console.log({ ...mainInfo, ...regionInfo });
  }

  return (
    <UserInfoForm onSubmit={onSubmit}>
      <H2>성별</H2>
      <RadioInputTemplate
        query="성별을 입력하세요"
        RadioLabelTemplate={
          <>
            {genderList.map(({ htmlFor, labelName, value }) => (
              <RadioLabelTemplate
                checked={value === mainInfo.gender}
                onChange={mainInfoChange}
                key={htmlFor}
                inputID={htmlFor}
                name="gender"
                value={value}
                labelChild={labelName}
                htmlFor={htmlFor}
              />
            ))}
          </>
        }
      />
      <H2>생년월일</H2>
      <Age onChange={mainInfoChange} value={mainInfo.birth} />
      <H2>지역</H2>
      <RadioInputTemplate
        query="지역을 선택 하세요"
        RadioLabelTemplate={
          <>
            {regionList.map(({ htmlFor, labelName, value }) => (
              <RadioLabelTemplate
                checked={value === mainInfo.region}
                onChange={mainInfoChange}
                key={htmlFor}
                inputID={htmlFor}
                name="region"
                value={value}
                labelChild={labelName}
                htmlFor={htmlFor}
              />
            ))}
          </>
        }
      />
      <article>
        <H2>지역상세</H2>
        {/* 서울 */}
        <RadioInputTemplate
          query="서울 상세지역을 선택하세요"
          RadioLabelTemplate={
            <>
              {seoulList.map(({ htmlFor, labelName, value }) => (
                <RadioLabelTemplate
                  checked={value === regionInfo.seoul}
                  onChange={regionInfoChange}
                  key={htmlFor}
                  inputID={htmlFor}
                  name="seoul"
                  value={value}
                  labelChild={labelName}
                  htmlFor={htmlFor}
                />
              ))}
            </>
          }
        />
        {/* 경기 */}
        <RadioInputTemplate
          query="경기도 상세지역을 선택하세요"
          RadioLabelTemplate={
            <>
              {gyungkiList.map(({ htmlFor, labelName, value }) => (
                <RadioLabelTemplate
                  checked={value === regionInfo.gyungki}
                  onChange={regionInfoChange}
                  key={htmlFor}
                  inputID={htmlFor}
                  name="gyungki"
                  value={value}
                  labelChild={labelName}
                  htmlFor={htmlFor}
                />
              ))}
            </>
          }
        />
      </article>
      <H2>결혼유무</H2>
      <RadioInputTemplate
        query="결혼유무를 선택해주세요"
        RadioLabelTemplate={
          <>
            {marriedList.map(({ htmlFor, labelName, value }) => (
              <RadioLabelTemplate
                checked={value === mainInfo.married}
                onChange={mainInfoChange}
                key={htmlFor}
                inputID={htmlFor}
                name="married"
                value={value}
                labelChild={labelName}
                htmlFor={htmlFor}
              />
            ))}
          </>
        }
      />
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
