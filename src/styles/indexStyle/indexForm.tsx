import { CommonFormProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

const UserInfoForm: FC<CommonFormProps> = (props) => {
  const { children, className, onSubmit, ...restProps } = props;
  return (
    <form
      className={`flex flex-col 
       checked-bg:bg-gray-200 gap-2 select-none  ${className}`}
      {...restProps}
      onSubmit={(evt) => {
        evt.preventDefault();
        onSubmit && onSubmit(evt);
      }}
      method="post"
    >
      {children}
    </form>
  );
};

export default UserInfoForm;
