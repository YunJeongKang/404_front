import UserInfoForm from "@styles/indexStyle/indexForm";
import Age from "./Age";
import { useState, useLayoutEffect } from "react";
import UserInfoH2 from "@styles/indexStyle/indexHeading";
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
import { motion } from "framer-motion";
import detailRegionsByCode from "./../../data/region_info/index";

const { INPUT, URL } = PATH;

const UserInfoPage = () => {
  // 메인 프로파일 데이터
  const [mainInfo, setMainInfo] = useState<MainInfoInterface>({
    gender: "",
    birth: "",
    region: "",
    detailRegion: "",
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
    nickname: "",
  });
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [detailRegionOptions, setDetailRegionOptions] = useState<JSX.Element[]>(
    []
  );

  // 지역 상세 데이터
  // const [regionInfo, setRegionInfo] = useState<RegionInfoInterface>({
  //   region_kangwon: "",
  //   region_gyungki: "",
  //   region_gyungnam: "",
  //   region_gyungbuk: "",
  //   region_gwangju: "",
  //   region_daegu: "",
  //   region_daejeon: "",
  //   region_busan: "",
  //   region_seoul: "",
  //   region_sejong: "",
  //   region_ulsan: "",
  //   region_incheon: "",
  //   region_jeonnam: "",
  //   region_jeonbuk: "",
  //   region_jeju: "",
  //   region_chungnam: "",
  //   region_chungbuk: "",
  //   region_global: "",
  // });

  // 지역 선택에 따라 달라지는 지역상세 컬럼

  const mainInfoChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { value, name } = evt.target;

    setMainInfo({
      ...mainInfo,
      [name]: value,
    });
  };

  function onSubmit() {
    // 성별 또는 결혼유무 또는 지역중 하나라도 선택되지 않았으면 경고창 띄움.
    mainInfo.gender === "" || mainInfo.married === "" || mainInfo.region === ""
      ? (mainInfo.gender === "" ? alert("성별을 선택해주세요") : true) &&
        (mainInfo.married === "" ? alert("결혼유무를 선택해주세요") : true) &&
        (mainInfo.region === "" ? alert("지역을 선택해주세요") : true)
      : // 위의 삼항연산자를 다 통과하면 유저 정보 axios 실행
        axios.post(`${URL}${INPUT}`, {
          ...mainInfo,
          regionInfo: mainInfo.detailRegion,
        });
    console.log({ ...mainInfo, regionInfo: mainInfo.detailRegion });
  }

  const arrayRange = [...Array(120).keys()];

  // Increase Step Index
  useLayoutEffect(() => {
    if (mainInfo.nickname && mainInfo.gender && mainInfo.birth) {
      setStepIndex(1);
    }

    if (mainInfo.detailRegion != "") {
      setStepIndex(2);
    }
  }, [mainInfo]);

  // Change Detail Region List Components
  useLayoutEffect(() => {
    if (!mainInfo.region) return;

    setMainInfo({
      ...mainInfo,
      detailRegion: "",
    });

    const detailList =
      detailRegionsByCode[mainInfo.region as keyof typeof detailRegionsByCode];

    const componentList = [
      <OptionInput value="" key={`detail-region-NONE`}>
        선택 필수
      </OptionInput>,
      ...detailList.map(({ value, regionInfoName }) => (
        <OptionInput value={value} key={`detail-region-${value}`}>
          {regionInfoName}
        </OptionInput>
      )),
    ];

    setDetailRegionOptions(componentList);
  }, [mainInfo.region]);

  useLayoutEffect(() => {
    if (!mainInfo.detailRegion) return;

    const detailList =
      detailRegionsByCode[mainInfo.region as keyof typeof detailRegionsByCode];

    const componentList = detailList.map(({ value, regionInfoName }) => (
      <OptionInput value={value} key={`detail-region-${value}`}>
        {regionInfoName}
      </OptionInput>
    ));

    setDetailRegionOptions(componentList);
  }, [mainInfo.detailRegion]);

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center">
      <UserInfoForm
        onSubmit={onSubmit}
        className={`bg-white border rounded-md shadow-md w-[90%] max-h-[80vh] h-fit overflow-scroll scrollbar-hide py-4 px-2`}
      >
        <div className="block pt-2">
          <span className="text-red-700 px-2">'*'</span> 는 필수입력란 입니다
        </div>
        {/* 닉네임 */}
        <SectionTemplate>
          <RequiredMark />
          <UserInfoH2>닉네임</UserInfoH2>
          <ModalEmptyDiv>
            <fieldset className="flex gap-2">
              <div className="flex flex-col items-start gap-1">
                <input
                  className="border peer dark:text-dark px-1 rounded-md shadow"
                  value={mainInfo.nickname}
                  pattern="[가-힣A-Za-z0-9]{1,8}$"
                  name="nickname"
                  placeholder="닉네임을 입력하세요"
                  required
                  autoComplete="on"
                  onChange={mainInfoChange}
                />
                <span className="hidden peer-invalid:block">
                  {mainInfo.nickname === "" ? (
                    <></>
                  ) : (
                    <span className="text-danger text-xs">
                      "1~8자의 올바른 닉네임을 입력하세요"
                    </span>
                  )}
                </span>
              </div>
            </fieldset>
          </ModalEmptyDiv>
        </SectionTemplate>
        {/* 성별 */}
        <SectionTemplate>
          <RequiredMark />
          <UserInfoH2>성별</UserInfoH2>
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
          <UserInfoH2>생년월일</UserInfoH2>
          <ModalEmptyDiv>
            <Age onChange={mainInfoChange} value={mainInfo.birth} />
          </ModalEmptyDiv>
        </SectionTemplate>
        {stepIndex >= 1 && (
          <motion.div
            className="flex flex-col justify-center checked-bg:scale-95 checked-bg:bg-blue-100 checked-bg:text-blue-700 gap-2"
            initial={{ scaleY: 0.8 }}
            animate={{ scaleY: 1.0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* 지역 */}
            <SectionTemplate>
              <RequiredMark />
              <UserInfoH2>지역</UserInfoH2>
              <ModalEmptyDiv>
                <>
                  <SelectInput
                    name="region"
                    value={mainInfo.region}
                    onChange={mainInfoChange}
                  >
                    <option
                      value=""
                      className={mainInfo.region ? "hidden" : ""}
                    >
                      선택 필수
                    </option>
                    {radioRegionList.map(({ value, regionInfoName }) => (
                      <OptionInput value={value} key={value}>
                        {regionInfoName}
                      </OptionInput>
                    ))}
                  </SelectInput>
                </>
                {/* 상세지역 정보 */}
                <>
                  <SelectInput
                    name="detailRegion"
                    onChange={mainInfoChange}
                    value={mainInfo.detailRegion}
                  >
                    {detailRegionOptions}
                  </SelectInput>
                </>
              </ModalEmptyDiv>
            </SectionTemplate>
          </motion.div>
        )}
        {stepIndex >= 2 && (
          <motion.div
            className="flex flex-col justify-center checked-bg:scale-95 checked-bg:bg-blue-100 checked-bg:text-blue-700 gap-2"
            initial={{ scaleY: 0.8 }}
            animate={{ scaleY: 1.0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* 키 / 체중 */}
            <SectionTemplate>
              {/* 체중 */}
              <UserInfoH2>몸무게</UserInfoH2>
              <div className="w-1/4 flex gap-1">
                <>
                  <SelectInput
                    name="weight"
                    value={mainInfo.weight}
                    onChange={mainInfoChange}
                  >
                    <OptionInput
                      value=""
                      className={mainInfo.weight ? "hidden" : ""}
                    ></OptionInput>
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
                <UserInfoH2>키</UserInfoH2>
                <>
                  <SelectInput
                    name="height"
                    value={mainInfo.height}
                    onChange={mainInfoChange}
                  >
                    <OptionInput
                      value=""
                      className={mainInfo.height ? "hidden" : ""}
                    ></OptionInput>
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
              <UserInfoH2>혈액형</UserInfoH2>
              <ModalEmptyDiv>
                <SelectInput
                  name="blood"
                  value={mainInfo.blood}
                  onChange={mainInfoChange}
                >
                  <OptionInput
                    value=""
                    className={mainInfo.blood ? "hidden" : ""}
                  ></OptionInput>
                  {selectBloodList.map(({ value, optionName }) => (
                    <OptionInput value={value} key={value} required>
                      {optionName}
                    </OptionInput>
                  ))}
                </SelectInput>
              </ModalEmptyDiv>
            </SectionTemplate>
          </motion.div>
        )}
        {stepIndex >= 3 && (
          <motion.div
            className="flex flex-col justify-center checked-bg:scale-95 checked-bg:bg-blue-100 checked-bg:text-blue-700 gap-2"
            initial={{ scaleY: 0.8 }}
            animate={{ scaleY: 1.0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* 음주여부 */}
            <SectionTemplate>
              <UserInfoH2>음주여부</UserInfoH2>
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
              <UserInfoH2>흡연여부</UserInfoH2>
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
          </motion.div>
        )}
        {stepIndex == -1 && (
          <motion.div
            className="flex flex-col justify-center checked-bg:scale-95 checked-bg:bg-blue-100 checked-bg:text-blue-700 gap-2"
            initial={{ scaleY: 0.8 }}
            animate={{ scaleY: 1.0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* 종교 */}
            <SectionTemplate>
              <UserInfoH2>종교</UserInfoH2>
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
              <UserInfoH2>직업</UserInfoH2>
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
              <UserInfoH2>학력</UserInfoH2>
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
              <UserInfoH2>연봉</UserInfoH2>
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
              <UserInfoH2>자산</UserInfoH2>
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
              <UserInfoH2>차량</UserInfoH2>
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
            {/* 결혼계획 */}
            <SectionTemplate>
              <UserInfoH2>결혼계획</UserInfoH2>
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
          </motion.div>
        )}
        {stepIndex >= 4 && (
          <motion.div
            className="flex flex-col justify-center checked-bg:scale-95 checked-bg:bg-blue-100 checked-bg:text-blue-700 gap-2"
            initial={{ scaleY: 0.8 }}
            animate={{ scaleY: 1.0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* 결혼유무 */}
            <SectionTemplate>
              <RequiredMark />
              <UserInfoH2>결혼유무</UserInfoH2>
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
          </motion.div>
        )}
        {stepIndex >= 4 && (
          <motion.div
            className="flex flex-col justify-center checked-bg:scale-95 checked-bg:bg-blue-100 checked-bg:text-blue-700 gap-2"
            initial={{ scaleY: 0.8 }}
            animate={{ scaleY: 1.0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <button
              type="submit"
              className="border shadow rounded-md px-2.5 py-1 duration-150 active:scale-[0.97] "
            >
              제출
            </button>
          </motion.div>
        )}
      </UserInfoForm>
    </div>
  );
};

export default UserInfoPage;
