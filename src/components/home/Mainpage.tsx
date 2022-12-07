import MainPageTemplate from "@utils/common/app/MainPageTemplate";
import axios from "axios";
import { useLayoutEffect, useState } from "react";
import PATH from "@utils/routes/PATH";
import useClient from "@store/useClient";
import LoadingSpinner from "@utils/common/app/LoadingSpinner";

function MainPage() {
  const client = useClient();
  const { URL, HOME } = PATH;
  const [data, setData] = useState<any>(null);

  useLayoutEffect(() => {
    axios
      .post(`${URL}${HOME}`, { email: client.getUserEmail() })
      .then((res) => res.data)
      .then((user) => {
        console.log("받아오는 데이터: ", user);
        setData(user);
      });
    console.log("보내는 데이터 :", { email: client.getUserEmail() });
  }, []);
  return (
    <div className="flex flex-wrap w-full h-full gap-6 max-h-[1000rem] font-eland select-none">
      {!data && <LoadingSpinner />}
      {/* <MainPageTemplate
        age="26"
        appearance="이쁨"
        img="fromise9.jpg"
        introSelf="저는 이새롬 입니당"
        personality="조용함"
        region="서울"
        username="이새롬"
        wanted="노래, 춤추기"
      />
      <MainPageTemplate
        age="24"
        appearance="귀여움"
        img="yena.jpg"
        introSelf="저는 최예나 입니당"
        personality="천상오리"
        region="서울"
        username="예나최"
        wanted="오큘러스 하는 남자"
      /> */}
      {data &&
        data.map(
          ({
            birth,
            character,
            ideal,
            nick,
            profile,
            region,
            style,
            image,
          }: any) => (
            <MainPageTemplate
              age={birth ? birth : ""}
              appearance={style ? style : ""}
              img={image[0] === "default" ? "default.png" : image[0]}
              introSelf={profile ? profile : ""}
              personality={character ? character : ""}
              region={region ? region : ""}
              username={nick ? nick : ""}
              wanted={ideal ? ideal : ""}
            />
          )
        )}
    </div>
  );
}

export default MainPage;
