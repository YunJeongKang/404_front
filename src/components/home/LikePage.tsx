import LikePageTemplate from "@utils/common/app/LikePageTemplate";
import React from "react";

const LikePage = () => {
  return (
    <div className="flex flex-wrap justify-start items-center w-full h-full max-h-[1000rem] gap-2">
      <LikePageTemplate
        education="부산외대"
        img="bibi.png"
        job="가수"
        region="서울"
        salary="5억이상"
        username="비비"
      />
      <LikePageTemplate
        education="부산외대"
        img="yena.jpg"
        job="가수"
        region="서울"
        salary="5억이상"
        username="최예나"
      />
      <LikePageTemplate
        education="부산외대"
        img="Jien.jpg"
        job="가수"
        region="서울"
        salary="5억이상"
        username="김지은"
      />
      <LikePageTemplate
        education="부산외대"
        img="Hyewoon.jpg"
        job="가수"
        region="서울"
        salary="5억이상"
        username="김혜윤"
      />
      <LikePageTemplate
        education="부산외대"
        img="shuhwa.jpg"
        job="가수"
        region="서울"
        salary="5억이상"
        username="슈화"
      />
      <LikePageTemplate
        education="부산외대"
        img="wick.jpg"
        job="가수"
        region="서울"
        salary="5억이상"
        username="존윅"
      />
      <LikePageTemplate
        education="부산외대"
        img="yourname.jpg"
        job="가수"
        region="서울"
        salary="5억이상"
        username="키미노 나마에와"
      />
    </div>
  );
};

export default LikePage;
