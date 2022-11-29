import UserInfoForm from "@styles/indexStyle/indexForm";
import Age from "./Age";
import { useState, useLayoutEffect } from "react";
import UserInfoH2 from "@styles/indexStyle/indexHeading";
import PATH from "@utils/routes/PATH";
import axios from "axios";
import {
  CheckBoxInput,
  CheckBoxInputTemplate,
  RequiredRadioInputTemplate,
} from "@styles/indexStyle/indexInput";
import { RadioLabelTemplate } from "@styles/indexStyle/indexLabel";
import { radioGenderList } from "@data/main_info/gender";
import { radioRegionList } from "@data/main_info/region";
import { radioMarriedList } from "@data/main_info/married";
import { MainInfoInterface, StyleInfoInterface } from "@models/user/UserDetail";
import { SelectInput } from "@styles/indexStyle/indexSelect";
import { OptionInput } from "@styles/indexStyle/indexOption";
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
import { motion } from "framer-motion";
import detailRegionsByCode from "@data/region_info/index";
import useClient from "@store/useClient";
import { Link } from "react-router-dom";
import ManAppearanceModal, {
  ManFashionModal,
  ManPersonalityModal,
  WomanAppearanceModal,
  WomanFashionModal,
  WomanPersonalityModal,
} from "@styles/modal/Modal";
import { manAppearanceList } from "@data/style_info/man_style/appearance";
import { manFashionList } from "@data/style_info/man_style/fashion";
import { manPersonalityList } from "@data/style_info/man_style/personality";
import { womanAppearanceList } from "@data/style_info/woman_style/appearance";
import { womanFashionList } from "@data/style_info/woman_style/fashion";
import { womanPersonalityList } from "@data/style_info/woman_style/personality";
import OutsideInModal, {
  ModalCloseButton,
  ModalSpan,
  ModalSpanDiv,
  OutsideModal,
} from "@styles/modal/ModalStyle";
import { validateHeaderValue } from "http";

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
    jobInfo: "",
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
  // 단계별 진행
  const [stepIndex, setStepIndex] = useState<number>(0);

  // 지역상세 상태변경
  const [detailRegionOptions, setDetailRegionOptions] = useState<JSX.Element[]>(
    []
  );
  // 유저 외모, 성격, 패션스타일 상태변경
  const [manAppearance, setManAppearance] = useState<string[]>([]);
  const [manPersonality, setManPersonality] = useState<string[]>([]);
  const [manFashion, setManFashion] = useState<string[]>([]);
  const [womanAppearance, setWomanAppearance] = useState<string[]>([]);
  const [womanPersonality, setWomanPersonality] = useState<string[]>([]);
  const [womanFashion, setWomanFashion] = useState<string[]>([]);

  //// 모달창 onChange 상태관리 집합 ////

  const onManAppearChecked = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = evt.target;
    checked && setManAppearance([...manAppearance, value]);
    !checked && setManAppearance(manAppearance.filter((el) => el !== value));
  };
  const onManPersonality = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = evt.target;
    checked && setManPersonality([...manPersonality, value]);
    !checked && setManPersonality(manPersonality.filter((el) => el !== value));
  };
  const onManFashion = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = evt.target;
    checked && setManFashion([...manFashion, value]);
    !checked && setManFashion(manFashion.filter((el) => el !== value));
  };
  const onWomanAppearance = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = evt.target;
    checked && setWomanAppearance([...womanAppearance, value]);
    !checked &&
      setWomanAppearance(womanAppearance.filter((el) => el !== value));
  };
  const onWomanPersonality = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = evt.target;
    checked && setWomanPersonality([...womanPersonality, value]);
    !checked &&
      setWomanPersonality(womanPersonality.filter((el) => el !== value));
  };
  const onWomanFashion = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = evt.target;
    checked && setWomanFashion([...womanFashion, value]);
    !checked && setWomanFashion(womanFashion.filter((el) => el !== value));
  };

  // 메인정보 선택에 따라 달라지는 지역상세 컬럼
  const mainInfoChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { value, name } = evt.target;

    setMainInfo({
      ...mainInfo,
      [name]: value,
    });
  };

  const client = useClient();

  // axios API
  function onSubmit() {
    const userEmail = client.getUserEmail();
    axios
      .put(`${URL}${INPUT}`, {
        ...mainInfo,
        email: userEmail,
        manAppearance: { ...manAppearance },
        manPersonality: { ...manPersonality },
        manFashion: { ...manFashion },
        womanAppearance: { ...womanAppearance },
        womanPersonality: { ...womanPersonality },
        womanFashion: { ...womanFashion },
      })
      .then((res) => {
        client.isNextStep(res.data.isCompleted);
      });

    // 서버로 가는 데이터 확인
    console.log("보내지는 데이터 :", {
      ...mainInfo,
      email: userEmail,
      manAppearance: { ...manAppearance },
      manPersonality: { ...manPersonality },
      manFashion: { ...manFashion },
      womanAppearance: { ...womanAppearance },
      womanPersonality: { ...womanPersonality },
      womanFashion: { ...womanFashion },
    });
  }

  // 체중, 키
  const weightRange = [...Array(120).keys()];
  const heightRange = [...Array(60).keys()];

  // Increase Step Index
  useLayoutEffect(() => {
    if (mainInfo.asset && mainInfo.vehicle && mainInfo.salary) {
      setStepIndex(8);
    } else if (mainInfo.religion && mainInfo.education) {
      setStepIndex(7);
    } else if (mainInfo.married && mainInfo.marriagePlan) {
      setStepIndex(6);
    } else if (mainInfo.job) {
      setStepIndex(5);
    } else if (mainInfo.alcohol && mainInfo.smoke) {
      setStepIndex(4);
    } else if (mainInfo.height && mainInfo.weight && mainInfo.blood) {
      setStepIndex(3);
    } else if (mainInfo.detailRegion != "") {
      setStepIndex(2);
    } else if (mainInfo.nickname && mainInfo.gender && mainInfo.birth) {
      setStepIndex(1);
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

  // 모달 제어창
  const [isAppearanceOpen, setAppearanceOpen] = useState<boolean>(false);
  const [isPersonalityOpen, setPersonalityOpen] = useState<boolean>(false);
  const [isFashionOpen, setFashionOpen] = useState<boolean>(false);
  const [isWomanAppearanceOpen, setWomanAppearanceOpen] =
    useState<boolean>(false);
  const [isWomanPersonalityOpen, setWomanPersonalityOpen] =
    useState<boolean>(false);
  const [isWomanFashionOpen, setWomanFashionOpen] = useState<boolean>(false);

  // 배열이 비어있는지 유효성을 체크하는 함수
  const CheckVoidList = (arr: string[]) => {
    if (Array.isArray(arr) && arr.length === 0) {
      return true;
    }
  };

  // 유저의 성별에 따라 성격 설문 구분
  const man = mainInfo.gender === "m";
  const woman = mainInfo.gender === "f";

  return (
    <UserInfoForm
      onSubmit={onSubmit}
      className={`bg-white w-full max-h-[43rem] h-fit overflow-scroll scrollbar-hide py-4 px-2 gap-4`}
    >
      {/* 닉네임 */}
      <SectionTemplate>
        <UserInfoH2>닉네임</UserInfoH2>
        <ModalEmptyDiv>
          <fieldset className="flex gap-2 w-full">
            <div className="flex flex-col items-start gap-1 w-full">
              <input
                className="peer px-1 text-center border-b-[1px] bg-white outline-none w-full"
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
                    1~8자의 올바른 닉네임을 입력하세요
                  </span>
                )}
              </span>
            </div>
          </fieldset>
        </ModalEmptyDiv>
      </SectionTemplate>
      {/* 성별 */}
      <SectionTemplate>
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
        <UserInfoH2>생년월일</UserInfoH2>
        <ModalEmptyDiv>
          <Age
            onChange={mainInfoChange}
            value={mainInfo.birth}
            className={mainInfo.birth && "text-blue-600"}
          />
        </ModalEmptyDiv>
      </SectionTemplate>
      {/* Step1 : 지역 */}
      {stepIndex >= 1 && (
        <motion.div
          initial={{ scaleY: 0.8, opacity: 0.5 }}
          animate={{ scaleY: 1.0, opacity: 1.0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* 지역 */}
          <SectionTemplate>
            <UserInfoH2>지역</UserInfoH2>
            <ModalEmptyDiv>
              <>
                <SelectInput
                  name="region"
                  value={mainInfo.region}
                  onChange={mainInfoChange}
                  className={mainInfo.region && "text-blue-600"}
                >
                  <option value="" className={mainInfo.region && "hidden"}>
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
                {!!mainInfo.region && (
                  <SelectInput
                    name="detailRegion"
                    value={mainInfo.detailRegion}
                    onChange={mainInfoChange}
                    className={mainInfo.detailRegion && "text-blue-600"}
                  >
                    {detailRegionOptions}
                  </SelectInput>
                )}
              </>
            </ModalEmptyDiv>
          </SectionTemplate>
        </motion.div>
      )}
      {/* Step2 : 체중, 키, 혈액형 */}
      {stepIndex >= 2 && (
        <motion.div
          className="flex flex-col justify-center checked-bg:bg-blue-100 gap-4"
          initial={{ scaleY: 0.8, opacity: 0.5 }}
          animate={{ scaleY: 1.0, opacity: 1.0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* 체중 */}
          <SectionTemplate>
            <UserInfoH2>몸무게</UserInfoH2>
            <ModalEmptyDiv>
              <div className="w-1/4 flex gap-1">
                <>
                  <SelectInput
                    name="weight"
                    value={mainInfo.weight}
                    onChange={mainInfoChange}
                    className={mainInfo.weight && "text-blue-600"}
                  >
                    <OptionInput
                      value=""
                      className={mainInfo.weight && "hidden"}
                    >
                      -선택-
                    </OptionInput>
                    {weightRange.map((item) => (
                      <OptionInput value={item + 31} key={item}>
                        {item + 31}
                      </OptionInput>
                    ))}
                  </SelectInput>
                </>
                <h1 className="text-md">KG</h1>
              </div>
            </ModalEmptyDiv>
          </SectionTemplate>
          {/* 키 */}
          <SectionTemplate>
            <UserInfoH2>키</UserInfoH2>
            <ModalEmptyDiv>
              <div className="w-2/5 flex flex-raw gap-1">
                <>
                  <SelectInput
                    name="height"
                    value={mainInfo.height}
                    onChange={mainInfoChange}
                    className={mainInfo.height && "text-blue-600"}
                  >
                    <OptionInput
                      value=""
                      className={mainInfo.height ? "hidden" : ""}
                    >
                      -선택-
                    </OptionInput>
                    <OptionInput value="139">140미만</OptionInput>
                    {heightRange.map((item) => (
                      <OptionInput value={item + 140} key={item}>
                        {item + 140}
                      </OptionInput>
                    ))}
                  </SelectInput>
                </>
                <h1 className="text-md">CM</h1>
              </div>
            </ModalEmptyDiv>
          </SectionTemplate>
          {/* 혈액형 */}
          <SectionTemplate>
            <UserInfoH2>혈액형</UserInfoH2>
            <ModalEmptyDiv>
              <SelectInput
                name="blood"
                value={mainInfo.blood}
                onChange={mainInfoChange}
                className={mainInfo.blood && "text-blue-600"}
              >
                <OptionInput value="" className={mainInfo.blood && "hidden"}>
                  -선택-
                </OptionInput>
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
      {/* Step3 : 음주여부, 흡연여부 */}
      {stepIndex >= 3 && (
        <motion.div
          className="flex flex-col justify-center gap-4"
          initial={{ scaleY: 0.8, opacity: 0.5 }}
          animate={{ scaleY: 1.0, opacity: 1.0 }}
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
                className={mainInfo.alcohol && "text-blue-600"}
              >
                <OptionInput value="" className={mainInfo.alcohol && "hidden"}>
                  -선택-
                </OptionInput>
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
                className={mainInfo.smoke && "text-blue-600"}
              >
                <OptionInput value="" className={mainInfo.smoke && "hidden"}>
                  -선택-
                </OptionInput>
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
      {/* Step4 : 직업, 직업상세 */}
      {stepIndex >= 4 && (
        <motion.div
          className="flex flex-col justify-center checked-bg:bg-blue-100 gap-4"
          initial={{ scaleY: 0.8, opacity: 0.5 }}
          animate={{ scaleY: 1.0, opacity: 1.0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* 직업 */}
          <SectionTemplate>
            <UserInfoH2>직업</UserInfoH2>
            <ModalEmptyDiv>
              <SelectInput
                name="job"
                value={mainInfo.job}
                onChange={mainInfoChange}
                className={mainInfo.job && "text-blue-600"}
              >
                <OptionInput value="" className={mainInfo.job && "hidden"}>
                  -선택-
                </OptionInput>
                {radioJobList.map(({ jobName }, value) => (
                  <OptionInput value={value} key={value} required>
                    {jobName}
                  </OptionInput>
                ))}
              </SelectInput>
            </ModalEmptyDiv>
          </SectionTemplate>
          {/* 직업상세 */}
          <SectionTemplate>
            <UserInfoH2>직업상세</UserInfoH2>
            <ModalEmptyDiv>
              <input
                name="jobInfo"
                type="text"
                value={mainInfo.jobInfo}
                onChange={mainInfoChange}
                className="text-center w-full outline-none border-b-[1px]"
                maxLength={20}
                placeholder="직업상세를 입력하세요"
              />
            </ModalEmptyDiv>
          </SectionTemplate>
        </motion.div>
      )}
      {/* Step5 : 결혼유무, 결혼계획 */}
      {stepIndex >= 5 && (
        <motion.div
          className="flex flex-col justify-center gap-4"
          initial={{ scaleY: 0.8, opacity: 0.5 }}
          animate={{ scaleY: 1.0, opacity: 1.0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* 결혼유무 */}
          <SectionTemplate>
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
          {/* 결혼계획 */}
          <SectionTemplate>
            <UserInfoH2>결혼계획</UserInfoH2>
            <ModalEmptyDiv>
              <SelectInput
                name="marriagePlan"
                value={mainInfo.marriagePlan}
                onChange={mainInfoChange}
                className={mainInfo.marriagePlan && "text-blue-600"}
              >
                <OptionInput
                  value=""
                  className={mainInfo.marriagePlan && "hidden"}
                >
                  -선택-
                </OptionInput>
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
      {/* Step6 : 종교, 학력 */}
      {stepIndex >= 6 && (
        <motion.div
          className="flex flex-col justify-center checked-bg:bg-blue-100 gap-4"
          initial={{ scaleY: 0.8, opacity: 0.5 }}
          animate={{ scaleY: 1.0, opacity: 1.0 }}
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
                className={mainInfo.religion && "text-blue-600"}
              >
                <OptionInput value="" className={mainInfo.religion && "hidden"}>
                  -선택-
                </OptionInput>
                {selectReligionList.map(({ value, optionName }) => (
                  <OptionInput value={value} key={value} required>
                    {optionName}
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
                className={mainInfo.education && "text-blue-600"}
              >
                <OptionInput
                  value=""
                  className={mainInfo.education && "hidden"}
                >
                  -선택-
                </OptionInput>
                {selectEducationList.map(({ value, optionName }) => (
                  <OptionInput value={value} key={value} required>
                    {optionName}
                  </OptionInput>
                ))}
              </SelectInput>
            </ModalEmptyDiv>
          </SectionTemplate>
        </motion.div>
      )}
      {/* Step7 : 연봉, 자산, 차량 */}
      {stepIndex >= 7 && (
        <motion.div
          className="flex flex-col justify-center gap-4"
          initial={{ scaleY: 0.8, opacity: 0.5 }}
          animate={{ scaleY: 1.0, opacity: 1.0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {" "}
          {/* 연봉  */}
          <SectionTemplate>
            <UserInfoH2>연봉</UserInfoH2>
            <ModalEmptyDiv>
              <SelectInput
                name="salary"
                value={mainInfo.salary}
                onChange={mainInfoChange}
                className={mainInfo.salary && "text-blue-600"}
              >
                <OptionInput value="" className={mainInfo.salary && "hidden"}>
                  -선택-
                </OptionInput>
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
                className={mainInfo.asset && "text-blue-600"}
              >
                <OptionInput value="" className={mainInfo.asset && "hidden"}>
                  -선택-
                </OptionInput>
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
                className={mainInfo.vehicle && "text-blue-600"}
              >
                <OptionInput value="" className={mainInfo.vehicle && "hidden"}>
                  -선택-
                </OptionInput>
                {selectVehicleList.map(({ value, optionName }) => (
                  <OptionInput value={value} key={value} required>
                    {optionName}
                  </OptionInput>
                ))}
              </SelectInput>
            </ModalEmptyDiv>
          </SectionTemplate>
        </motion.div>
      )}
      {/* Step8 : 남성 스타일  (스타일 선택 모달창) */}
      {man && stepIndex >= 8 && (
        <motion.div
          className="flex flex-col justify-center gap-4"
          initial={{ scaleY: 0.8, opacity: 0.5 }}
          animate={{ scaleY: 1.0, opacity: 1.0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* 남자 외모 */}
          <SectionTemplate>
            <UserInfoH2>외모</UserInfoH2>
            <ModalEmptyDiv>
              {CheckVoidList(manAppearance) && (
                <span onClick={() => setAppearanceOpen(true)}>-선택-</span>
              )}
              {/* 선택한 값들이 모달 밖의 페이지에 보일 수 있도록 변경 */}
              {!CheckVoidList(manAppearance) && (
                <ModalSpanDiv onClick={() => setAppearanceOpen(true)}>
                  {manAppearance.map((item) => (
                    <ModalSpan key={item}>
                      #
                      {manAppearanceList.map(
                        (data) => data.value === item && data.labelName
                      )}
                    </ModalSpan>
                  ))}
                </ModalSpanDiv>
              )}
              <ManAppearanceModal isAppearanceOpen={isAppearanceOpen}>
                <OutsideModal>
                  <OutsideInModal>외모</OutsideInModal>
                  <CheckBoxInputTemplate>
                    {manAppearanceList.map(({ htmlFor, labelName, value }) => (
                      <CheckBoxInput
                        key={htmlFor}
                        id={htmlFor}
                        value={value}
                        name="manAppearance"
                        onChange={onManAppearChecked}
                        checked={manAppearance.includes(value)}
                      >
                        {`#${labelName}`}
                      </CheckBoxInput>
                    ))}
                  </CheckBoxInputTemplate>
                  <ModalCloseButton onClick={() => setAppearanceOpen(false)} />
                </OutsideModal>
              </ManAppearanceModal>
            </ModalEmptyDiv>
          </SectionTemplate>
          {/* 남자 성격 */}
          <SectionTemplate>
            <UserInfoH2>성격</UserInfoH2>
            <ModalEmptyDiv>
              {CheckVoidList(manPersonality) && (
                <span onClick={() => setPersonalityOpen(true)}>-선택-</span>
              )}
              {/* 선택한 값들이 모달 밖의 페이지에 보일 수 있도록 변경 */}
              {!CheckVoidList(manPersonality) && (
                <ModalSpanDiv onClick={() => setPersonalityOpen(true)}>
                  {manPersonality.map((item) => (
                    <ModalSpan key={item}>
                      #
                      {manPersonalityList.map(
                        (data) => data.value === item && data.labelName
                      )}
                    </ModalSpan>
                  ))}
                </ModalSpanDiv>
              )}
              <ManPersonalityModal
                className="!h-4/5"
                isPersonalityOpen={isPersonalityOpen}
              >
                <OutsideModal className="gap-2">
                  <OutsideInModal>성격</OutsideInModal>
                  <CheckBoxInputTemplate className="!gap-4">
                    {manPersonalityList.map(({ htmlFor, labelName, value }) => (
                      <CheckBoxInput
                        key={htmlFor}
                        id={htmlFor}
                        value={value}
                        name="manPersonality"
                        onChange={onManPersonality}
                        checked={manPersonality.includes(value)}
                      >
                        {`#${labelName}`}
                      </CheckBoxInput>
                    ))}
                  </CheckBoxInputTemplate>
                  <ModalCloseButton onClick={() => setPersonalityOpen(false)} />
                </OutsideModal>
              </ManPersonalityModal>
            </ModalEmptyDiv>
          </SectionTemplate>
          {/* 남자 패션 */}
          <SectionTemplate>
            <UserInfoH2>패션</UserInfoH2>
            <ModalEmptyDiv>
              {CheckVoidList(manFashion) && (
                <span onClick={() => setFashionOpen(true)}>-선택-</span>
              )}
              {/* 선택한 값들이 모달 밖의 페이지에 보일 수 있도록 변경 */}
              {!CheckVoidList(manFashion) && (
                <ModalSpanDiv onClick={() => setFashionOpen(true)}>
                  {manFashion.map((item) => (
                    <ModalSpan key={item}>
                      #
                      {manFashionList.map(
                        (data) => data.value === item && data.labelName
                      )}
                    </ModalSpan>
                  ))}
                </ModalSpanDiv>
              )}
              <ManFashionModal className="h-full" isFashionOpen={isFashionOpen}>
                <OutsideModal>
                  <OutsideInModal>패션</OutsideInModal>
                  <CheckBoxInputTemplate>
                    {manFashionList.map(({ htmlFor, labelName, value }) => (
                      <CheckBoxInput
                        className="text-sm"
                        key={htmlFor}
                        id={htmlFor}
                        value={value}
                        name="manPersonality"
                        onChange={onManFashion}
                        checked={manFashion.includes(value)}
                      >
                        {`#${labelName}`}
                      </CheckBoxInput>
                    ))}
                  </CheckBoxInputTemplate>
                  <ModalCloseButton onClick={() => setFashionOpen(false)} />
                </OutsideModal>
              </ManFashionModal>
            </ModalEmptyDiv>
          </SectionTemplate>
        </motion.div>
      )}
      {/* Step8 : 여성 스타일  (스타일 선택 모달창) */}
      {woman && stepIndex >= 8 && (
        <motion.div
          className="flex flex-col justify-center gap-4"
          initial={{ scaleY: 0.8, opacity: 0.5 }}
          animate={{ scaleY: 1.0, opacity: 1.0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* 여자 외모 */}
          <SectionTemplate>
            <UserInfoH2>외모</UserInfoH2>
            <ModalEmptyDiv>
              {CheckVoidList(womanAppearance) && (
                <span onClick={() => setWomanAppearanceOpen(true)}>-선택-</span>
              )}
              {/* 선택한 값들이 모달 밖의 페이지에 보일 수 있도록 변경 */}
              {!CheckVoidList(womanAppearance) && (
                <ModalSpanDiv onClick={() => setWomanAppearanceOpen(true)}>
                  {womanAppearance.map((item) => (
                    <ModalSpan key={item}>
                      #
                      {womanAppearanceList.map(
                        (data) => data.value === item && data.labelName
                      )}
                    </ModalSpan>
                  ))}
                </ModalSpanDiv>
              )}
              <WomanAppearanceModal
                isWomanAppearanceOpen={isWomanAppearanceOpen}
              >
                <OutsideModal>
                  <OutsideInModal>외모</OutsideInModal>
                  <CheckBoxInputTemplate>
                    {womanAppearanceList.map(
                      ({ htmlFor, labelName, value }) => (
                        <CheckBoxInput
                          key={htmlFor}
                          id={htmlFor}
                          value={value}
                          name="womanAppearance"
                          onChange={onWomanAppearance}
                          checked={womanAppearance.includes(value)}
                        >
                          {`#${labelName}`}
                        </CheckBoxInput>
                      )
                    )}
                  </CheckBoxInputTemplate>
                  <ModalCloseButton
                    onClick={() => setWomanAppearanceOpen(false)}
                  />
                </OutsideModal>
              </WomanAppearanceModal>
            </ModalEmptyDiv>
          </SectionTemplate>
          {/* 여자 성격 */}
          <SectionTemplate>
            <UserInfoH2>성격</UserInfoH2>
            <ModalEmptyDiv>
              {CheckVoidList(womanPersonality) && (
                <span onClick={() => setWomanPersonalityOpen(true)}>
                  -선택-
                </span>
              )}
              {/* 선택한 값들이 모달 밖의 페이지에 보일 수 있도록 변경 */}
              {!CheckVoidList(womanPersonality) && (
                <ModalSpanDiv onClick={() => setWomanPersonalityOpen(true)}>
                  {womanPersonality.map((item) => (
                    <ModalSpan key={item}>
                      #
                      {womanPersonalityList.map(
                        (data) => data.value === item && data.labelName
                      )}
                    </ModalSpan>
                  ))}
                </ModalSpanDiv>
              )}
              <WomanPersonalityModal
                className="!h-4/5"
                isWomanPersonalityOpen={isWomanPersonalityOpen}
              >
                <OutsideModal className="gap-2">
                  <OutsideInModal>성격</OutsideInModal>
                  <CheckBoxInputTemplate className="!gap-4">
                    {womanPersonalityList.map(
                      ({ htmlFor, labelName, value }) => (
                        <CheckBoxInput
                          key={htmlFor}
                          id={htmlFor}
                          value={value}
                          name="womanPersonality"
                          onChange={onWomanPersonality}
                          checked={womanPersonality.includes(value)}
                        >
                          {`#${labelName}`}
                        </CheckBoxInput>
                      )
                    )}
                  </CheckBoxInputTemplate>
                  <ModalCloseButton
                    onClick={() => setWomanPersonalityOpen(false)}
                  />
                </OutsideModal>
              </WomanPersonalityModal>
            </ModalEmptyDiv>
          </SectionTemplate>
          {/* 여자 패션 */}
          <SectionTemplate>
            <UserInfoH2>패션</UserInfoH2>
            <ModalEmptyDiv>
              {CheckVoidList(womanFashion) && (
                <span onClick={() => setWomanFashionOpen(true)}>-선택-</span>
              )}
              {/* 선택한 값들이 모달 밖의 페이지에 보일 수 있도록 변경 */}
              {!CheckVoidList(womanFashion) && (
                <ModalSpanDiv onClick={() => setWomanFashionOpen(true)}>
                  {womanFashion.map((item) => (
                    <ModalSpan key={item}>
                      #
                      {womanFashionList.map(
                        (data) => data.value === item && data.labelName
                      )}
                    </ModalSpan>
                  ))}
                </ModalSpanDiv>
              )}
              <WomanFashionModal
                className="h-full"
                isWomanFashionOpen={isWomanFashionOpen}
              >
                <OutsideModal>
                  <OutsideInModal>패션</OutsideInModal>
                  <CheckBoxInputTemplate className="!gap-3">
                    {womanFashionList.map(({ htmlFor, labelName, value }) => (
                      <CheckBoxInput
                        className="text-sm"
                        key={htmlFor}
                        id={htmlFor}
                        value={value}
                        name="womanPersonality"
                        onChange={onWomanFashion}
                        checked={womanFashion.includes(value)}
                      >
                        {`#${labelName}`}
                      </CheckBoxInput>
                    ))}
                  </CheckBoxInputTemplate>
                  <ModalCloseButton
                    onClick={() => setWomanFashionOpen(false)}
                  />
                </OutsideModal>
              </WomanFashionModal>
            </ModalEmptyDiv>
          </SectionTemplate>
        </motion.div>
      )}
      {/* 제춢버튼  */}
      {stepIndex >= 0 && (
        <button type="submit" className="border rounded-md shadow-md">
          <Link to={PATH.USER_IMAGE}>제출</Link>
        </button>
      )}
    </UserInfoForm>
  );
};

export default UserInfoPage;
