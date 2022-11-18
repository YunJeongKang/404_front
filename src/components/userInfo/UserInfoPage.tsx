import UserInfoForm from "@styles/indexForm";
import Age from "./ClientProfileData/Age";
import Gender from "./ClientProfileData/Gender";
import Married from "./ClientProfileData/Married";
import Region from "./ClientProfileData/Region";
import GyungkiInfoRegion from "./ClientProfileData/region_info/GyungkiInfo";
import SeoulInfoRegion from "./ClientProfileData/region_info/SeoulInfo";

const UserInfoPage = () => {
  return (
    <UserInfoForm>
      <h1 className="text-3xl font-bold bg-cyan-200 inline-block">성별</h1>
      <Gender />
      <h1 className="text-3xl font-bold bg-cyan-200 inline-block">생년월일</h1>
      <Age />
      <h1 className="text-3xl font-bold bg-cyan-200 inline-block">지역</h1>
      <Region />
      <>
        <h1 className="text-3xl font-bold bg-cyan-200 inline-block">
          지역상세
        </h1>
        <SeoulInfoRegion />
        <GyungkiInfoRegion />
      </>
      <h1 className="text-3xl font-bold bg-cyan-200 inline-block">결혼유무</h1>
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
