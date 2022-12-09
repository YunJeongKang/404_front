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
      <MainPageTemplate
        age="24"
        appearance="AI모델링"
        img="yoon.jpg"
        introSelf=""
        personality="팀장"
        region="광주"
        username="강윤정"
        myIntro="저의 장점은"
        wanted=""
      />
      <MainPageTemplate
        age="25"
        appearance="Back/DB"
        img="inho.jpg"
        introSelf=""
        personality="팀원"
        region="광주"
        username="김인호"
        myIntro="저의 장점은"
        wanted=""
      />
      <MainPageTemplate
        age="24"
        appearance="Infra/Front"
        img="yongho.jpg"
        introSelf=""
        personality="팀원"
        region="광주"
        username="장용호"
        wanted=""
        myIntro="저의 장점은"
      />
      <MainPageTemplate
        age="32"
        appearance="Back/DB"
        img="sungmin.jpg"
        introSelf=""
        personality="팀원"
        region="광주"
        username="허성민"
        myIntro="저의 장점은"
        wanted=""
      />
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
              introSelf={profile === "None" ? "" : profile}
              personality={character ? character : ""}
              region={region ? region : ""}
              username={nick ? nick : ""}
              wanted={ideal === "None" ? "" : ideal}
            />
          )
        )}
    </div>
  );
}

export default MainPage;
