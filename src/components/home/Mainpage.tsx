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
    <div className="flex flex-wrap w-full h-full gap-6 font-eland select-none">
      {!data && <LoadingSpinner />}
      <MainPageTemplate
        age="24"
        appearance="AI모델링"
        img="yoon.jpg"
        introSelf={`1 변화에 두려워하지 않고 용감해요\n2 유연한 리더십을 가지고 있어요`}
        personality="팀장"
        myWanted="저는 이런 역할을 맡았어요"
        region="광주"
        username="강윤정"
        myIntro="저는 이런 사람이에요"
        wanted={`1 데이터 분석, AI모델링을 담당했어요\n2 팀장으로 팀을 이끌었어요`}
      />
      <MainPageTemplate
        age="25"
        appearance="Back/DB"
        img="inho.jpg"
        introSelf={`1 생각이 유연하여 다양한 시도를 주도합니다.\n2 쉽게 포기하지 않는 강한 멘탈을 가지고 있습니다.`}
        personality="팀원"
        region="광주"
        username="김인호"
        myIntro="저는 이런 사람이에요"
        wanted={`1 DB설계, 관리를 총괄했습니다.\n2 백엔드 Fastapi 서버를 담당했습니다.`}
        myWanted="저는 이런 역할을 맡았어요"
      />
      <MainPageTemplate
        age="24"
        appearance="Infra/Front"
        img="yongho.jpg"
        introSelf={`1 이해력이 뛰어나고 학습이 빠릅니다.\n2 한 가지 일에 몰두하는 능력이 뛰어납니다.\n3 될때까지 도전합니다.`}
        personality="팀원"
        region="광주"
        username="장용호"
        wanted={`1 프로젝트의 기술적 네트워크를 주도했습니다.\n2 UX/UI, FE총괄을 맡았습니다.\n3 Cloud & Infra총괄을 맡았습니다.`}
        myIntro="저는 이런 사람이에요"
        myWanted="저는 이런 역할을 맡았어요"
      />
      <MainPageTemplate
        age="32"
        appearance="Back/DB"
        img="sungmin.jpg"
        introSelf="1 무슨일이든 맡기면 책임감있게 처리합니다."
        personality="팀원"
        region="광주"
        username="허성민"
        myIntro="저는 이런 사람이에요"
        wanted={`1 Backend 총괄을 맡았습니다.\n2 DB보조를 맡았습니다.`}
        myWanted="저는 이런 역할을 맡았어요"
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
