import { CommonSectionProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

const SectionTemplate: FC<CommonSectionProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <section
      className={`flex flex-raw justify-center items-center w-[445px] gap-2 placeholder ${className}`}
      {...restProps}
    >
      {children}
    </section>
  );
};

export default SectionTemplate;
