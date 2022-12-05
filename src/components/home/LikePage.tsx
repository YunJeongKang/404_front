import useClient from "@store/useClient";
import LikePageTemplate from "@utils/common/app/LikePageTemplate";
import PATH from "@utils/routes/PATH";
import axios from "axios";
import { useState } from "react";
import { useLayoutEffect } from "react";

const LikePage = () => {
  const [likeComponent, setLikeComponent] = useState<React.ReactNode[] | null>(
    null
  );
  const { URL, LIKE } = PATH;
  const client = useClient();
  useLayoutEffect(() => {
    axios
      .post(`${URL}${LIKE}`, { email: client.getUserEmail() })
      .then((res) => res.data)
      .then((data) => {
        console.log("받아오는 값:", data);
        const componentList = data.map((items: any) => (
          <LikePageTemplate
            education={items.education}
            img={items.img}
            job={items.job}
            region={items.region}
            salary={items.salary}
            username={items.username}
            key={items.username}
          />
        ));
        setLikeComponent(componentList);
      })
      .catch(console.error);
    console.log("보내는 값: ", { email: client.getUserEmail() });
  }, []);

  return (
    <div className="flex flex-wrap justify-start items-start place-content-start w-full h-full max-h-[1000rem] gap-2">
      {likeComponent}
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
