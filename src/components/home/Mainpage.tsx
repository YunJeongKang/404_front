import useAuth from "@store/useAuth";
import MainPageTemplate from "@utils/common/app/MainPageTemplate";
import axios from "axios";
import { useLayoutEffect, useState } from "react";
import PATH from "@utils/routes/PATH";
import useClient from "@store/useClient";

function MainPage() {
  const auth = useAuth();
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
        // const componentList = user.map((items: any, index: number) => (
        //   <MainPageTemplate
        //     age={items.birth}
        //     appearance={items.style}
        //     img={items.image}
        //     introSelf={items.profile}
        //     personality={items.character}
        //     region={items.region}
        //     username={items.nick}
        //     wanted={items.wanted ? "" : items.wanted}
        //   />
        // ));
        // setMainComponent(componentList);
      });
    console.log("보내는 데이터 :", { email: client.getUserEmail() });
  }, []);
  return (
    <div className="flex flex-wrap w-full h-full gap-6 max-h-[1000rem] font-eland select-none">
      {/* <MainPageTemplate
        age="24"
        appearance="귀여움"
        img="yena.jpg"
        introSelf="나는 최예나"
        personality="엉뚱함"
        region="서울 어딘가"
        username="스마일리"
        wanted="와 이거 이상형칸에 적는 글인데 너무 길게 적으면 어떻게 되는지 보려고 이렇게 적어보는게 이게 맞나
         모르겠는데 우선 적어봄 어디까지 가야 칸이 넘어갈까? 이거 몇글자나 될까? 우선 계속 적어봅시다 어디까지가 적정선인지"
      />
      <MainPageTemplate
        age="50"
        appearance="남자다움"
        img="wick.jpg"
        introSelf="존윅4 개봉 언제하냐"
        personality="사나움"
        region="미국 어딘가"
        username="키아누 리브스"
        wanted="강아지를 사랑하는 사람"
      />
      <MainPageTemplate
        age="50"
        appearance="남자다움"
        img="shuhwa.jpg"
        introSelf="존윅4 개봉 언제하냐"
        personality="사나움"
        region="미국 어딘가"
        username="키아누 리브스"
        wanted="강아지를 사랑하는 사람"
      />
      <MainPageTemplate
        age="50"
        appearance="남자다움"
        img="hayoung.jpg"
        introSelf="존윅4 개봉 언제하냐"
        personality="사나움"
        region="미국 어딘가"
        username="키아누 리브스"
        wanted="강아지를 사랑하는 사람"
      />
      <MainPageTemplate
        age="50"
        appearance="남자다움"
        img="bibi.png"
        introSelf="존윅4 개봉 언제하냐"
        personality="사나움"
        region="미국 어딘가"
        username="키아누 리브스"
        wanted="강아지를 사랑하는 사람"
      /> */}
      {/* {mainComponent} */}
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
            img,
          }: any) => (
            <MainPageTemplate
              age={birth ? birth : ""}
              appearance={style ? style : ""}
              img={img ? img : ""}
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
