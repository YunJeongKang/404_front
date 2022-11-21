import { CommonFormProps } from "@utils/common/props";
import { FunctionComponent as FC } from "react";

const UserInfoForm: FC<CommonFormProps> = (props) => {
  const { children, className, onSubmit, ...restProps } = props;
  return (
    <form
      className={`checked-bg:bg-gray-200 border rounded-lg shadow-md px-8 py-4 gap-2 ${className}`}
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
