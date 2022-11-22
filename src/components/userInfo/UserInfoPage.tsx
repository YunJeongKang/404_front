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
  MainInfoInterface,
  RegionInfoInterface,
} from "@models/user/UserDetail";
import { SelectInput, SelectInputTypeProto } from "@styles/indexSelect";
import { OptionInput } from "@styles/indexOption";
import { kangwonList } from "@data/region_info/kangwon";

const { UI, URL } = PATH;

const UserInfoPage = () => {
  // 메인 프로파일 데이터
  const [mainInfo, setMainInfo] = useState<MainInfoInterface>({
    gender: "",
    birth: "",
    region: "",
    married: "",
    sisBro: "",
  });

  // 지역 상세 데이터
  const [regionInfo, setRegionInfo] = useState<RegionInfoInterface>({
    region_kangwon: "",
    region_gyungki: "",
    region_gyungnam: "",
    region_gyungbuk: "",
    region_gwangju: "",
    region_daegu: "",
    region_daejeon: "",
    region_busan: "",
    region_seoul: "",
    region_sejong: "",
    region_ulsan: "",
    region_incheon: "",
    region_jeonnam: "",
    region_jeonbuk: "",
    region_jeju: "",
    region_chungnam: "",
    region_chungbuk: "",
    region_global: "",
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
    axios.post(`${URL}${UI}`, {
      ...mainInfo,
      regionInfo: { ...regionInfo },
    });
    console.log({ ...mainInfo, regionInfo: { ...regionInfo } });
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
      <>
        <SelectInput
          labelQuery="지역을 선택하세요"
          name="region"
          value={mainInfo.region}
          onChange={mainInfoChange}
        >
          {regionList.map(({ value, regionInfoName }) => (
            <OptionInput value={value} key={value}>
              {regionInfoName}
            </OptionInput>
          ))}
        </SelectInput>
      </>
      <article>
        <H2>지역상세</H2>
        {/* 서울 */}
        <>
          <SelectInput
            labelQuery="서울 상세지역을 선택하세요"
            name="region_seoul"
            value={regionInfo.region_seoul}
            onChange={regionInfoChange}
          >
            {seoulList.map(({ value, regionInfoName }) => (
              <OptionInput value={value} key={value}>
                {regionInfoName}
              </OptionInput>
            ))}
          </SelectInput>
        </>
        {/* 경기 */}
        <>
          <SelectInput
            labelQuery="경기 상세지역을 선택하세요"
            name="region_gyungki"
            value={regionInfo.region_gyungki}
            onChange={regionInfoChange}
          >
            {gyungkiList.map(({ value, regionInfoName }) => (
              <OptionInput value={value} key={value}>
                {regionInfoName}
              </OptionInput>
            ))}
          </SelectInput>
        </>
        {/* 강원 */}
        <>
          <SelectInput
            labelQuery="강원 상세지역을 선택하세요"
            name="region_kangwon"
            value={regionInfo.region_kangwon}
            onChange={regionInfoChange}
          >
            {kangwonList.map(({ value, regionInfoName }) => (
              <OptionInput value={value} key={value}>
                {regionInfoName}
              </OptionInput>
            ))}
          </SelectInput>
        </>
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
