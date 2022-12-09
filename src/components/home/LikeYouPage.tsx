import useClient from "@store/useClient";
import LikeYouPageTemplate from "@utils/common/app/LikeYouPageTemplate";
import LoadingSpinner from "@utils/common/app/LoadingSpinner";
import PATH from "@utils/routes/PATH";
import axios from "axios";
import { motion } from "framer-motion";
import { useState, useLayoutEffect } from "react";

const LikeYouPage = () => {
  const { URL, LIKE_YOU } = PATH;
  const client = useClient();
  const [data, setData] = useState<any>();
  const [isLoading, setLoading] = useState<boolean>();

  useLayoutEffect(() => {
    const likeYouAxios = async () => {
      try {
        setLoading(true);
        await axios
          .post(`${URL}${LIKE_YOU}`, { email: client.getUserEmail() })
          .then((res) => res.data)
          .then((data) => {
            console.log("받아오는 값:", data);
            setData(data);
          });
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    likeYouAxios();
    console.log("보내는 값: ", { email: client.getUserEmail() });
  }, []);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex flex-wrap justify-start items-start place-content-start w-full h-full max-h-[1000rem]"
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        !data && (
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute flex justify-center items-center w-full h-full text-lg"
          >
            상대방에게 관심표현을 해보세요👍
          </motion.span>
        )
      )}
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
    </motion.div>
  );
};

export default LikeYouPage;
