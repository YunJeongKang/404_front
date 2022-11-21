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

const { UI, URL } = PATH;

const UserInfoPage = () => {
  const [info, setInfo] = useState<any>({
    gender: "",
    birth: "",
    region: "",
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
    married: "",
    sisBro: "",
  });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
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
      <RadioInputTemplate
        query="성별을 입력하세요"
        RadioLabelTemplate={
          <>
            {genderList.map(({ htmlFor, labelName, value }) => (
              <RadioLabelTemplate
                checked={value === info.gender}
                onChange={onChange}
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
      <Age onChange={onChange} value={info.birth} />
      <H2>지역</H2>
      <RadioInputTemplate
        query="지역을 선택 하세요"
        RadioLabelTemplate={
          <>
            {regionList.map(({ htmlFor, labelName, value }) => (
              <RadioLabelTemplate
                checked={value === info.region}
                onChange={onChange}
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
                  checked={value === info.seoulInfo}
                  onChange={onChange}
                  key={htmlFor}
                  inputID={htmlFor}
                  name="seoulInfo"
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
                  checked={value === info.gyungkiInfo}
                  onChange={onChange}
                  key={htmlFor}
                  inputID={htmlFor}
                  name="gyungkiInfo"
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
                checked={value === info.married}
                onChange={onChange}
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
