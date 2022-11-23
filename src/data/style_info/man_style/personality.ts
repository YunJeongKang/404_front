import { RadioType } from "@models/CPType";

export const manPersonalityList: RadioType[] = [
  { labelName: "조용함", htmlFor: "m-silence", value: "1" },
  { labelName: "터프함", htmlFor: "m-tough", value: "2" },
  { labelName: "유머/재치", htmlFor: "m-fun", value: "3" },
  { labelName: "다정다감", htmlFor: "m-sentimentality", value: "4" },
  { labelName: "매사긍정", htmlFor: "m-positive", value: "5" },
  { labelName: "이해심이깊은", htmlFor: "m-understanding", value: "6" },
  { labelName: "자유분방", htmlFor: "m-free", value: "7" },
  { labelName: "남자다움", htmlFor: "m-man", value: "8" },
  { labelName: "낙천적", htmlFor: "m-optimistic", value: "9" },
  { labelName: "내성적", htmlFor: "m-introvert", value: "10" },
  { labelName: "감성적", htmlFor: "m-emotional", value: "11" },
  { labelName: "열정적", htmlFor: "m-passionate", value: "12" },
  { labelName: "유쾌함", htmlFor: "m-pleasant", value: "13" },
  { labelName: "까칠함", htmlFor: "m-feisty", value: "14" },
  { labelName: "왕고집", htmlFor: "m-obstinate", value: "15" },
  { labelName: "4차원적", htmlFor: "m-4-dimensional", value: "16" },
  { labelName: "솔직함", htmlFor: "m-honest", value: "17" },
  { labelName: "직설적", htmlFor: "m-straightforward", value: "18" },
  { labelName: "신중함", htmlFor: "m-prudence", value: "19" },
];
Object.freeze(manPersonalityList);
