import { CommonFormProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

const UserInfoForm: FC<CommonFormProps> = (props) => {
  const { children, className, onSubmit, ...restProps } = props;
  return (
    <form
      className={`flex flex-col justify-center checked-bg:scale-95
       checked-bg:bg-blue-200 rounded-lg gap-2 select-none ${className}`}
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
