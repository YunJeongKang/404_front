import useClient from "@store/useClient";
import LikePageTemplate from "@utils/common/app/LikePageTemplate";
import LoadingSpinner from "@utils/common/app/LoadingSpinner";
import PATH from "@utils/routes/PATH";
import axios from "axios";
import { useState } from "react";
import { useLayoutEffect } from "react";

const LikePage = () => {
  const { URL, LIKE } = PATH;
  const client = useClient();

  const [data, setData] = useState<any>();
  useLayoutEffect(() => {
    axios
      .post(`${URL}${LIKE}`, { email: client.getUserEmail() })
      .then((res) => res.data)
      .then((data) => {
        console.log("받아오는 값:", data);
        setData(data);
      })
      .catch(console.error);
    console.log("보내는 값: ", { email: client.getUserEmail() });
  }, []);

  return (
    <div className="flex flex-wrap justify-start items-start place-content-start w-full h-full max-h-[1000rem] gap-2">
      {!data && <LoadingSpinner />}
      {data &&
        data.map(
          ({ married, image, job, region, marriagePlan, nickname }: any) => (
            <LikePageTemplate
              married={married ? married : ""}
              img={image === "default" ? "default.png" : image}
              job={job ? job : ""}
              region={region ? region : ""}
              marriagePlan={marriagePlan ? marriagePlan : ""}
              username={nickname ? nickname : ""}
            />
          )
        )}
      <LikePageTemplate
        married="부산외대"
        img="bibi.png"
        job="가수"
        region="서울"
        marriagePlan="5억이상"
        username="비비"
      />
      <LikePageTemplate
        married="부산외대"
        img="yena.jpg"
        job="가수"
        region="서울"
        marriagePlan="5억이상"
        username="최예나"
      />
      <LikePageTemplate
        married="부산외대"
        img="Jien.jpg"
        job="가수"
        region="서울"
        marriagePlan="5억이상"
        username="김지은"
      />
      <LikePageTemplate
        married="부산외대"
        img="Hyewoon.jpg"
        job="가수"
        region="서울"
        marriagePlan="5억이상"
        username="김혜윤"
      />
      <LikePageTemplate
        married="부산외대"
        img="shuhwa.jpg"
        job="가수"
        region="서울"
        marriagePlan="5억이상"
        username="슈화"
      />
      <LikePageTemplate
        married="부산외대"
        img="wick.jpg"
        job="가수"
        region="서울"
        marriagePlan="5억이상"
        username="존윅"
      />
      <LikePageTemplate
        married="부산외대"
        img="yourname.jpg"
        job="가수"
        region="서울"
        marriagePlan="5억이상"
        username="키미노 나마에와"
      />
    </div>
  );
};

export default LikePage;
