export interface AuthInterface {
  nickname: string;
  email: string;
  password: string;
}

export interface MainInfoInterface {
  gender: string;
  birth: string;
  married: string;
  job: string;
  region: string;
  asset: string;
  blood: string;
  alcohol: string;
  smoke: string;
  health: string;
  marriagePlan: string;
  religion: string;
  vehicle: string;
  wantedFood: string;
  education: string;
  salary: string;
}

export interface RegionInfoInterface {
  region_kangwon: string;
  region_gyungki: string;
  region_gyungnam: string;
  region_gyungbuk: string;
  region_gwangju: string;
  region_daegu: string;
  region_daejeon: string;
  region_busan: string;
  region_seoul: string;
  region_sejong: string;
  region_ulsan: string;
  region_incheon: string;
  region_jeonnam: string;
  region_jeonbuk: string;
  region_jeju: string;
  region_chungnam: string;
  region_chungbuk: string;
  region_global: string;
}

export interface StyleInfoInterface {
  manAppearance: string;
  manPersonality: string;
  manFashion: string;
  womanAppearance: string;
  womanPersonality: string;
  womanFashion: string;
}
