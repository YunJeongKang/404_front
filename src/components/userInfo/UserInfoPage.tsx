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
import { radioMarriedList } from "@data/main_info/married";
import { MainInfoInterface } from "@models/user/UserDetail";
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
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [detailRegionOptions, setDetailRegionOptions] = useState<JSX.Element[]>(
    []
  );

  // 지역 선택에 따라 달라지는 지역상세 컬럼

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
      })
      .then((res) => res.data);
    console.log({ ...mainInfo, email: userEmail });
  }

  // 체중, 키
  const weightRange = [...Array(120).keys()];
  const heightRange = [...Array(60).keys()];

  // Increase Step Index
  useLayoutEffect(() => {
    if (mainInfo.religion && mainInfo.education) {
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

  return (
    <UserInfoForm
      onSubmit={onSubmit}
      className={`bg-white w-full max-h-[43rem] h-fit overflow-scroll scrollbar-hide py-4 px-2 gap-4`}
    >
      {/* 닉네임 */}
      <SectionTemplate>
        <UserInfoH2>닉네임</UserInfoH2>
        <ModalEmptyDiv>
          <fieldset className="flex gap-2">
            <div className="flex flex-col items-start gap-1">
              <input
                className="peer px-1  text-center border-b-[1px] bg-white outline-none"
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
          <Age onChange={mainInfoChange} value={mainInfo.birth} />
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
                  >
                    <OptionInput
                      value=""
                      className={mainInfo.height ? "hidden" : ""}
                    >
                      -선택-
                    </OptionInput>
                    <OptionInput value="139">140미만</OptionInput>
                    {heightRange.map((item) => (
                      <OptionInput value={item + 120} key={item}>
                        {item + 120}
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
          className="flex flex-col justify-center checked-bg:bg-blue-100 gap-4"
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
          className="flex flex-col justify-center checked-bg:bg-blue-100 gap-4"
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
      {/* Step : 외모,  (스타일 선택 모달창) */}
      {/* 제춢버튼  */}
      {stepIndex >= 4 && (
        <button type="submit" className="border rounded-md shadow-md">
          <Link to={PATH.USER_IMAGE}>제출</Link>
        </button>
      )}
    </UserInfoForm>
  );
};

export default UserInfoPage;
