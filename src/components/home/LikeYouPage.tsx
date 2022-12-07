import useClient from "@store/useClient";
import LikeYouPageTemplate from "@utils/common/app/LikeYouPage";
import LoadingSpinner from "@utils/common/app/LoadingSpinner";
import PATH from "@utils/routes/PATH";
import axios from "axios";
import { motion } from "framer-motion";
import { useState, useLayoutEffect } from "react";

const LikeYouPage = () => {
  const { URL, LIKE_YOU } = PATH;
  const client = useClient();
  const [data, setData] = useState<any>();

  useLayoutEffect(() => {
    axios
      .post(`${URL}${LIKE_YOU}`, { email: client.getUserEmail() })
      .then((res) => res.data)
      .then((data) => {
        console.log("받아오는 값:", data);
        setData(data);
      })
      .catch(console.error);
    console.log("보내는 값: ", { email: client.getUserEmail() });
  }, []);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex flex-wrap justify-start items-start place-content-start w-full h-full max-h-[1000rem] gap-2"
    >
      {!data && <LoadingSpinner />}
      {data &&
        data.map(
          ({ married, image, job, region, marriagePlan, nickname }: any) => (
            <LikeYouPageTemplate
              married={married ? married : ""}
              img={image === "default" ? "default.png" : image}
              job={job ? job : ""}
              region={region ? region : ""}
              marriagePlan={marriagePlan ? marriagePlan : ""}
              username={nickname ? nickname : ""}
            />
          )
        )}
      <LikeYouPageTemplate
        img="saerom6.png"
        job="가수"
        marriagePlan="6달이내"
        married="초혼"
        region="서울"
        username="이새롬"
      />
    </motion.div>
  );
};

export default LikeYouPage;