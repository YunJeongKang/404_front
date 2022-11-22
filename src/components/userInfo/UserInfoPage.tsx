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
import { gwangjuList } from "@data/region_info/gwangju";
import { daejeonList } from "@data/region_info/daejeon";
import { daeguList } from "@data/region_info/daegu";
import { incheonList } from "@data/region_info/incheon";
import { busanList } from "@data/region_info/busan";
import { jeonbukList } from "@data/region_info/jeonbuk";
import { jeonnamList } from "@data/region_info/jeonnam";
import { chungnamList } from "@data/region_info/chungnam";
import { chungbukList } from "@data/region_info/chungbuk";
import { gyungnamList } from "@data/region_info/gyungnam";
import { gyungbukList } from "@data/region_info/gyungbuk";
import { globalList } from "@data/region_info/global";
import { sejongList } from "@data/region_info/sejong";

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
        <hr className="py-0.5 my-1" />
      </>
      {/* 지역상세 */}
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
        {/* 광주 */}
        <>
          <SelectInput
            labelQuery="광주 상세지역을 선택하세요"
            name="region_gwangju"
            value={regionInfo.region_gwangju}
            onChange={regionInfoChange}
          >
            {gwangjuList.map(({ value, regionInfoName }) => (
              <OptionInput value={value} key={value}>
                {regionInfoName}
              </OptionInput>
            ))}
          </SelectInput>
        </>
        {/* 대전 */}
        <>
          <SelectInput
            labelQuery="대전 상세지역을 선택하세요"
            name="region_daejeon"
            value={regionInfo.region_daejeon}
            onChange={regionInfoChange}
          >
            {daejeonList.map(({ value, regionInfoName }) => (
              <OptionInput value={value} key={value}>
                {regionInfoName}
              </OptionInput>
            ))}
          </SelectInput>
        </>
        {/* 대구 */}
        <>
          <SelectInput
            labelQuery="대구 상세지역을 선택하세요"
            name="region_daegu"
            value={regionInfo.region_daegu}
            onChange={regionInfoChange}
          >
            {daeguList.map(({ value, regionInfoName }) => (
              <OptionInput value={value} key={value}>
                {regionInfoName}
              </OptionInput>
            ))}
          </SelectInput>
        </>
        {/* 인천 */}
        <>
          <SelectInput
            labelQuery="인천 상세지역을 선택하세요"
            name="region_incheon"
            value={regionInfo.region_incheon}
            onChange={regionInfoChange}
          >
            {incheonList.map(({ value, regionInfoName }) => (
              <OptionInput value={value} key={value}>
                {regionInfoName}
              </OptionInput>
            ))}
          </SelectInput>
        </>
        {/* 부산 */}
        <>
          <SelectInput
            labelQuery="부산 상세지역을 선택하세요"
            name="region_busan"
            value={regionInfo.region_busan}
            onChange={regionInfoChange}
          >
            {busanList.map(({ value, regionInfoName }) => (
              <OptionInput value={value} key={value}>
                {regionInfoName}
              </OptionInput>
            ))}
          </SelectInput>
        </>
        {/* 세종 */}
        <>
          <SelectInput
            labelQuery="세종 상세지역을 선택하세요"
            name="region_sejong"
            value={regionInfo.region_sejong}
            onChange={regionInfoChange}
          >
            {sejongList.map(({ value, regionInfoName }) => (
              <OptionInput value={value} key={value}>
                {regionInfoName}
              </OptionInput>
            ))}
          </SelectInput>
        </>
        {/* 전남 */}
        <>
          <SelectInput
            labelQuery="전남 상세지역을 선택하세요"
            name="region_jeonnam"
            value={regionInfo.region_jeonnam}
            onChange={regionInfoChange}
          >
            {jeonnamList.map(({ value, regionInfoName }) => (
              <OptionInput value={value} key={value}>
                {regionInfoName}
              </OptionInput>
            ))}
          </SelectInput>
        </>
        {/* 전북 */}
        <>
          <SelectInput
            labelQuery="전북 상세지역을 선택하세요"
            name="region_jeonbuk"
            value={regionInfo.region_jeonbuk}
            onChange={regionInfoChange}
          >
            {jeonbukList.map(({ value, regionInfoName }) => (
              <OptionInput value={value} key={value}>
                {regionInfoName}
              </OptionInput>
            ))}
          </SelectInput>
        </>
        {/* 충남 */}
        <>
          <SelectInput
            labelQuery="충남 상세지역을 선택하세요"
            name="region_chungnam"
            value={regionInfo.region_chungnam}
            onChange={regionInfoChange}
          >
            {chungnamList.map(({ value, regionInfoName }) => (
              <OptionInput value={value} key={value}>
                {regionInfoName}
              </OptionInput>
            ))}
          </SelectInput>
        </>
        {/* 충북 */}
        <>
          <SelectInput
            labelQuery="충북 상세지역을 선택하세요"
            name="region_chungbuk"
            value={regionInfo.region_chungbuk}
            onChange={regionInfoChange}
          >
            {chungbukList.map(({ value, regionInfoName }) => (
              <OptionInput value={value} key={value}>
                {regionInfoName}
              </OptionInput>
            ))}
          </SelectInput>
        </>
        {/* 경남 */}
        <>
          <SelectInput
            labelQuery="경남 상세지역을 선택하세요"
            name="region_gyungnam"
            value={regionInfo.region_gyungnam}
            onChange={regionInfoChange}
          >
            {gyungnamList.map(({ value, regionInfoName }) => (
              <OptionInput value={value} key={value}>
                {regionInfoName}
              </OptionInput>
            ))}
          </SelectInput>
        </>
        {/* 경북 */}
        <>
          <SelectInput
            labelQuery="경북 상세지역을 선택하세요"
            name="region_gyungbuk"
            value={regionInfo.region_gyungbuk}
            onChange={regionInfoChange}
          >
            {gyungbukList.map(({ value, regionInfoName }) => (
              <OptionInput value={value} key={value}>
                {regionInfoName}
              </OptionInput>
            ))}
          </SelectInput>
        </>
        {/* 해외 */}
        <>
          <SelectInput
            labelQuery="해외 상세지역을 선택하세요"
            name="region_global"
            value={regionInfo.region_global}
            onChange={regionInfoChange}
          >
            {globalList.map(({ value, regionInfoName }) => (
              <OptionInput value={value} key={value}>
                {regionInfoName}
              </OptionInput>
            ))}
          </SelectInput>
        </>
        <hr className="py-0.5 my-1" />
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
