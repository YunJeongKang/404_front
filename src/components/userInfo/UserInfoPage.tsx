import UserInfoForm from "@styles/indexStyle/indexForm";
import Age from "./Age";
import { useState, useEffect } from "react";
import H2 from "@styles/indexStyle/indexHeading";
import PATH from "@utils/routes/PATH";
import axios from "axios";
import { RequiredRadioInputTemplate } from "@styles/indexStyle/indexInput";
import { RadioLabelTemplate } from "@styles/indexStyle/indexLabel";
import { radioGenderList } from "@data/main_info/gender";
import { radioRegionList } from "@data/main_info/region";
import { seoulList } from "@data/region_info/seoul";
import { gyungkiList } from "@data/region_info/gyungki";
import { radioMarriedList } from "@data/main_info/married";
import {
  MainInfoInterface,
  RegionInfoInterface,
} from "@models/user/UserDetail";
import { SelectInput } from "@styles/indexStyle/indexSelect";
import { OptionInput } from "@styles/indexStyle/indexOption";
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
import { ulsanList } from "@data/region_info/ulsan";
import { jejuList } from "@data/region_info/jeju";
import SectionTemplate from "@styles/indexStyle/indexSection";
import { selectAlcoholList } from "@data/main_info/alcohol";
import { selectSmokeList } from "@data/main_info/smoke";
import { selectEducationList } from "@data/main_info/educational";
import { selectSalaryList } from "@data/main_info/salary";
import { selectAssetList } from "@data/main_info/asset";
import ModalEmptyDiv from "@styles/indexStyle/indexDiv";
import { selectBloodList } from "@data/main_info/blood";
import { selectVehicleList } from "@data/main_info/vehicle";
import { radioJobList } from "@data/main_info/job";
import { selectMarriagePlanList } from "@data/main_info/marriagePlants";
import { selectReligionList } from "@data/main_info/religion";
import RequiredMark from "@styles/indexStyle/indexSpan";

const { INPUT, URL } = PATH;

const UserInfoPage = () => {
  // 메인 프로파일 데이터
  const [mainInfo, setMainInfo] = useState<MainInfoInterface>({
    gender: "",
    birth: "",
    region: "",
    married: "",
    job: "",
    alcohol: "",
    asset: "",
    blood: "",
    education: "",
    health: "",
    marriagePlan: "",
    religion: "",
    salary: "",
    smoke: "",
    vehicle: "",
    height: "",
    weight: "",
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

  // 지역 선택에 따라 달라지는 지역상세 컬럼

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
    mainInfo.gender === "" || mainInfo.married === "" || mainInfo.region === ""
      ? (mainInfo.gender === "" ? alert("성별을 선택해주세요") : true) &&
        (mainInfo.married === "" ? alert("결혼유무를 선택해주세요") : true) &&
        (mainInfo.region === "" ? alert("지역을 선택해주세요") : true)
      : // 유저 정보 axios
        axios.post(`${URL}${INPUT}`, {
          ...mainInfo,
          regionInfo: { ...regionInfo },
        });
    console.log({ ...mainInfo, regionInfo: { ...regionInfo } });
  }

  const arrayRange = [...Array(120).keys()];

  return (
    <UserInfoForm
      onSubmit={onSubmit}
      className={`bg-white ${
        mainInfo.gender === "f" ? "checked-bg:bg-red-200" : null
      } `}
    >
      <span className="pt-2">
        <span className="text-red-700 px-2">'*'</span> 는 필수입력란 입니다
      </span>
      {/* 성별 */}
      <SectionTemplate>
        <RequiredMark />
        <H2>성별</H2>
        <RequiredRadioInputTemplate
          RadioLabelTemplate={
            <>
              {radioGenderList.map(({ htmlFor, labelName, value }) => (
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
      </SectionTemplate>
      {/* 생년월일 */}
      <SectionTemplate>
        <RequiredMark />
        <H2>생년월일</H2>
        <ModalEmptyDiv>
          <Age onChange={mainInfoChange} value={mainInfo.birth} />
        </ModalEmptyDiv>
      </SectionTemplate>
      {/* 지역 */}
      <SectionTemplate>
        <RequiredMark />
        <H2>지역</H2>
        <ModalEmptyDiv>
          <>
            <SelectInput
              name="region"
              value={mainInfo.region}
              onChange={mainInfoChange}
            >
              {radioRegionList.map(({ value, regionInfoName }) => (
                <OptionInput value={value} key={value} required>
                  {regionInfoName}
                </OptionInput>
              ))}
            </SelectInput>
          </>
          {/* 상세지역 정보 */}
          <>
            {/* 강원 */}
            {mainInfo.region === "a" ? (
              <SelectInput
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
            ) : (
              <></>
            )}
            {/* 경기 */}
            {mainInfo.region === "b" ? (
              <SelectInput
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
            ) : (
              <></>
            )}
            {/* 경남 */}
            {mainInfo.region === "c" ? (
              <SelectInput
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
            ) : (
              <></>
            )}
            {/* 경북 */}
            {mainInfo.region === "d" ? (
              <SelectInput
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
            ) : (
              <></>
            )}
            {/* 광주 */}
            {mainInfo.region === "e" ? (
              <SelectInput
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
            ) : (
              <></>
            )}
            {/* 대구 */}
            {mainInfo.region === "f" ? (
              <SelectInput
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
            ) : (
              <></>
            )}
            {/* 대전 */}
            {mainInfo.region === "g" ? (
              <SelectInput
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
            ) : (
              <></>
            )}
            {/* 부산 */}
            {mainInfo.region === "h" ? (
              <SelectInput
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
            ) : (
              <></>
            )}
            {/* 서울 */}
            {mainInfo.region === "i" ? (
              <SelectInput
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
            ) : (
              <></>
            )}
            {/* 세종 */}
            {mainInfo.region === "z" ? (
              <SelectInput
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
            ) : (
              <></>
            )}
            {/* 울산 */}
            {mainInfo.region === "j" ? (
              <SelectInput
                name="region_ulsan"
                value={regionInfo.region_ulsan}
                onChange={regionInfoChange}
              >
                {ulsanList.map(({ value, regionInfoName }) => (
                  <OptionInput value={value} key={value}>
                    {regionInfoName}
                  </OptionInput>
                ))}
              </SelectInput>
            ) : (
              <></>
            )}
            {/* 인천 */}
            {mainInfo.region === "k" ? (
              <SelectInput
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
            ) : (
              <></>
            )}
            {/* 전남 */}
            {mainInfo.region === "l" ? (
              <SelectInput
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
            ) : (
              <></>
            )}
            {/* 전북 */}
            {mainInfo.region === "n" ? (
              <SelectInput
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
            ) : (
              <></>
            )}
            {/* 제주 */}
            {mainInfo.region === "m" ? (
              <SelectInput
                name="region_jeju"
                value={regionInfo.region_jeju}
                onChange={regionInfoChange}
              >
                {jejuList.map(({ value, regionInfoName }) => (
                  <OptionInput value={value} key={value}>
                    {regionInfoName}
                  </OptionInput>
                ))}
              </SelectInput>
            ) : (
              <></>
            )}
            {/* 충남 */}
            {mainInfo.region === "o" ? (
              <SelectInput
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
            ) : (
              <></>
            )}
            {/* 충북 */}
            {mainInfo.region === "p" ? (
              <SelectInput
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
            ) : (
              <></>
            )}
            {/* 해외 */}
            {mainInfo.region === "q" ? (
              <SelectInput
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
            ) : (
              <></>
            )}
          </>
        </ModalEmptyDiv>
      </SectionTemplate>
      {/* 키 / 체중 */}
      <SectionTemplate>
        {/* 체중 */}
        <H2>몸무게</H2>
        <div className="w-1/4 flex gap-1">
          <>
            <SelectInput
              name="weight"
              value={mainInfo.weight}
              onChange={mainInfoChange}
            >
              {arrayRange.map((item) => (
                <OptionInput value={item + 31} key={item}>
                  {item + 31}
                </OptionInput>
              ))}
            </SelectInput>
          </>
          <h1 className="text-md">KG</h1>
        </div>
        {/* 키 */}
        <div className="w-2/5 flex flex-raw gap-1">
          <H2>키</H2>
          <>
            <SelectInput
              name="height"
              value={mainInfo.height}
              onChange={mainInfoChange}
            >
              {arrayRange.map((item) => (
                <OptionInput value={item + 81} key={item}>
                  {item + 81}
                </OptionInput>
              ))}
            </SelectInput>
          </>
          <h1 className="text-md">CM</h1>
        </div>
      </SectionTemplate>
      {/* 혈액형 */}
      <SectionTemplate>
        <H2>혈액형</H2>
        <ModalEmptyDiv>
          <SelectInput
            name="blood"
            value={mainInfo.blood}
            onChange={mainInfoChange}
          >
            {selectBloodList.map(({ value, optionName }) => (
              <OptionInput value={value} key={value} required>
                {optionName}
              </OptionInput>
            ))}
          </SelectInput>
        </ModalEmptyDiv>
      </SectionTemplate>
      {/* 음주여부 */}
      <SectionTemplate>
        <H2>음주여부</H2>
        <ModalEmptyDiv>
          <SelectInput
            name="alcohol"
            value={mainInfo.alcohol}
            onChange={mainInfoChange}
          >
            {selectAlcoholList.map(({ value, optionName }) => (
              <OptionInput value={value} key={value} required>
                {optionName}
              </OptionInput>
            ))}
          </SelectInput>
        </ModalEmptyDiv>
      </SectionTemplate>
      {/* 흡연여부 */}
      <SectionTemplate>
        <H2>흡연여부</H2>
        <ModalEmptyDiv>
          <SelectInput
            name="smoke"
            value={mainInfo.smoke}
            onChange={mainInfoChange}
          >
            {selectSmokeList.map(({ value, optionName }) => (
              <OptionInput value={value} key={value} required>
                {optionName}
              </OptionInput>
            ))}
          </SelectInput>
        </ModalEmptyDiv>
      </SectionTemplate>
      {/* 종교 */}
      <SectionTemplate>
        <H2>종교</H2>
        <ModalEmptyDiv>
          <SelectInput
            name="religion"
            value={mainInfo.religion}
            onChange={mainInfoChange}
          >
            {selectReligionList.map(({ value, optionName }) => (
              <OptionInput value={value} key={value} required>
                {optionName}
              </OptionInput>
            ))}
          </SelectInput>
        </ModalEmptyDiv>
      </SectionTemplate>
      {/* 직업 */}
      <SectionTemplate>
        <H2>직업</H2>
        <ModalEmptyDiv>
          <SelectInput
            name="job"
            value={mainInfo.job}
            onChange={mainInfoChange}
          >
            {radioJobList.map(({ jobName }, value) => (
              <OptionInput value={value} key={value} required>
                {jobName}
              </OptionInput>
            ))}
          </SelectInput>
        </ModalEmptyDiv>
      </SectionTemplate>
      {/* 학력 */}
      <SectionTemplate>
        <H2>학력</H2>
        <ModalEmptyDiv>
          <SelectInput
            name="education"
            value={mainInfo.education}
            onChange={mainInfoChange}
          >
            {selectEducationList.map(({ value, optionName }) => (
              <OptionInput value={value} key={value} required>
                {optionName}
              </OptionInput>
            ))}
          </SelectInput>
        </ModalEmptyDiv>
      </SectionTemplate>
      {/* 연봉  */}
      <SectionTemplate>
        <H2>연봉</H2>
        <ModalEmptyDiv>
          <SelectInput
            name="salary"
            value={mainInfo.salary}
            onChange={mainInfoChange}
          >
            {selectSalaryList.map(({ value, optionName }) => (
              <OptionInput value={value} key={value} required>
                {optionName}
              </OptionInput>
            ))}
          </SelectInput>
        </ModalEmptyDiv>
      </SectionTemplate>
      {/* 자산 */}
      <SectionTemplate>
        <H2>자산</H2>
        <ModalEmptyDiv>
          <SelectInput
            name="asset"
            value={mainInfo.asset}
            onChange={mainInfoChange}
          >
            {selectAssetList.map(({ value, optionName }) => (
              <OptionInput value={value} key={value} required>
                {optionName}
              </OptionInput>
            ))}
          </SelectInput>
        </ModalEmptyDiv>
      </SectionTemplate>
      {/* 차량 */}
      <SectionTemplate>
        <H2>차량</H2>
        <ModalEmptyDiv>
          <SelectInput
            name="vehicle"
            value={mainInfo.vehicle}
            onChange={mainInfoChange}
          >
            {selectVehicleList.map(({ value, optionName }) => (
              <OptionInput value={value} key={value} required>
                {optionName}
              </OptionInput>
            ))}
          </SelectInput>
        </ModalEmptyDiv>
      </SectionTemplate>
      {/* 결혼유무 */}
      <SectionTemplate>
        <RequiredMark />
        <H2>결혼유무</H2>
        <RequiredRadioInputTemplate
          RadioLabelTemplate={
            <>
              {radioMarriedList.map(({ htmlFor, labelName, value }) => (
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
      </SectionTemplate>
      {/* 결혼계획 */}
      <SectionTemplate>
        <H2>결혼계획</H2>
        <ModalEmptyDiv>
          <SelectInput
            name="marriagePlan"
            value={mainInfo.marriagePlan}
            onChange={mainInfoChange}
          >
            {selectMarriagePlanList.map(({ value, optionName }) => (
              <OptionInput value={value} key={value} required>
                {optionName}
              </OptionInput>
            ))}
          </SelectInput>
        </ModalEmptyDiv>
      </SectionTemplate>
      <button
        type="submit"
        className="border shadow rounded-md px-2.5 py-1 duration-150 active:scale-[0.97] "
      >
        제출
      </button>
    </UserInfoForm>
  );
};

export default UserInfoPage;
