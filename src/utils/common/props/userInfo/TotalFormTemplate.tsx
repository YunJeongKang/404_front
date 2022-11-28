interface TextInputTemplateInterface {
  query?: string;
  pattern: string;
  name: string;
  dangerText?: string;
  type?: string;
  placeholder?: string;
  value: string;
  autoComplete?: string;

  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInputTemplate = ({
  query,
  value,
  pattern,
  name,
  dangerText = "This is not correct",
  type,
  placeholder,
  autoComplete = "true",
  onChange,
}: TextInputTemplateInterface) => {
  return (
    <fieldset className="flex gap-2 p-[3px]">
      <span>{query}</span>
      <div className="flex flex-col items-start gap-1">
        <input
          className="border peer dark:text-dark px-1 outline-none"
          type={type}
          value={value}
          pattern={`^${pattern}`}
          name={name}
          placeholder={placeholder}
          required
          autoComplete={autoComplete}
          onChange={onChange}
        />
        <span className="hidden peer-invalid:block">
          {value === "" ? (
            <></>
          ) : (
            <span className="text-danger text-sm">{dangerText}</span>
          )}
        </span>
      </div>
    </fieldset>
  );
};
