import LikeYouPageTemplate from "@utils/common/app/LikeYouPage";
import { AnimatePresence, motion } from "framer-motion";

const LikeYouPage = () => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex flex-wrap justify-start items-start place-content-start w-full h-full max-h-[1000rem] gap-2"
    >
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
