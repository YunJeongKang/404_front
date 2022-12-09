import { CommonFormProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

const UserInfoForm: FC<CommonFormProps> = (props) => {
  const { children, className, onSubmit, ...restProps } = props;
  return (
    <form
      className={`flex
       checked-bg:border-2 checked-bg:border-blue-500 checked-bg:text-blue-600 select-none ${className}`}
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
