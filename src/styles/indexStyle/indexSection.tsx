import { CommonSectionProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

const SectionTemplate: FC<CommonSectionProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <section
      className={`flex justify-center h-fit items-center w-5/6 gap-1 ${className}`}
      {...restProps}
    >
      {children}
    </section>
  );
};

export default SectionTemplate;
