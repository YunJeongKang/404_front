interface ValidationInputInterface {
  query: string;
  pattern: string;
  name: string;
  dangerText?: string;
  type?: string;
  placeholder?: string;
  value: string;

  onChange: (evt: any) => void;
}

export const TextInputTemplate = ({
  query,
  value,
  pattern,
  name,
  dangerText = "This is not correct",
  type,
  placeholder,
  onChange,
}: ValidationInputInterface) => {
  return (
    <fieldset className="flex gap-2 p-[3px]">
      <span>{query} :</span>
      <div className="flex flex-col items-start gap-1">
        <input
          className="border peer dark:text-dark px-1"
          type={type}
          value={value}
          pattern={`^${pattern}`}
          name={name}
          placeholder={placeholder}
          required
          onChange={onChange}
        />
        <span className="hidden peer-invalid:block">
          <span className="text-danger text-sm">
            {value === "" ? (
              <></>
            ) : (
              <span className="text-danger text-sm">{dangerText}</span>
            )}
          </span>
        </span>
      </div>
    </fieldset>
  );
};
