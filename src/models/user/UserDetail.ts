export interface AuthInterface {
  email: string;
  password: string;
}

export interface MainInfoInterface {
  nickname: string;
  gender: string;
  birth: string;
  married: string;
  job: string;
  jobInfo: string;
  region: string;
  detailRegion: string;
  asset: string;
  blood: string;
  alcohol: string;
  smoke: string;
  health: string;
  marriagePlan: string;
  religion: string;
  vehicle: string;
  education: string;
  salary: string;
  height: string;
  weight: string;
  hobby: string;
}

export interface StyleInfoInterface {
  manAppearance: object;
  manPersonality: object;
  manFashion: object;
  womanAppearance: object;
  womanPersonality: object;
  womanFashion: object;
}

export interface UserImage {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
}
