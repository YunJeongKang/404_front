import React from "react";

interface AgeInterface {
  value: string;

  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Age = ({ onChange, value }: AgeInterface) => {
  return (
    <input
      type="date"
      name="birth"
      min="1953-01-01"
      max="2003-12-31"
      className="w-2/3 border shadow rounded-md px-2 py-1 my-2"
      onChange={onChange}
      value={value}
      required
    />
  );
};

export default Age;
