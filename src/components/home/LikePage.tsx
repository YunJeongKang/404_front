import useClient from "@store/useClient";
import LikePageTemplate from "@utils/common/app/LikePageTemplate";
import LoadingSpinner from "@utils/common/app/LoadingSpinner";
import PATH from "@utils/routes/PATH";
import axios from "axios";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { motion } from "framer-motion";

const LikePage = () => {
  const { URL, LIKE } = PATH;
  const client = useClient();
  const [isLoading, setLoading] = useState<boolean>();

  const [data, setData] = useState<any>();
  useLayoutEffect(() => {
    axios
      .post(`${URL}${LIKE}`, { email: client.getUserEmail() })
      .then((res) => res.data)
      .then((data) => {
        console.log("받아오는 값:", data);
        setLoading(data[1].loading);
        setData(data[0]);
      })
      .catch(console.error);
    console.log("보내는 값: ", { email: client.getUserEmail() });
  }, []);

  console.log(isLoading);
  return (
    <div className="flex flex-wrap justify-start items-start place-content-start w-full h-full max-h-[1000rem] gap-2">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <motion.span
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute flex justify-center items-center w-full h-full text-lg"
        >
          받은 관심표현이 없습니다😓
        </motion.span>
      )}
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
    </div>
  );
};

export default LikePage;
