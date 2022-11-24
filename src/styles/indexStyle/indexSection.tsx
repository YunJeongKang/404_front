import { CommonSectionProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

const SectionTemplate: FC<CommonSectionProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <section
      className={`flex flex-raw justify-center items-center w-[25rem] gap-1 ${className}`}
      {...restProps}
    >
      {children}
    </section>
  );
};

export default SectionTemplate;
