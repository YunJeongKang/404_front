import React from "react";

interface AgeInterface {
  value: string;
  className?: string;

  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Age = ({ onChange, value, className }: AgeInterface) => {
  return (
    <input
      type="date"
      name="birth"
      min="1953-01-01"
      max="2003-12-31"
      className={`w-2/3 text-left text-gray-500 outline-none select-none ${className}`}
      onChange={onChange}
      value={value}
      required
    />
  );
};

export default Age;
