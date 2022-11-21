interface TextInputTemplateInterface {
  query: string;
  pattern: string;
  name: string;
  dangerText?: string;
  type?: string;
  placeholder?: string;
  value: any;

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
}: TextInputTemplateInterface) => {
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
          autoComplete="true"
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

export const CheckPWTemplate = ({
  query,
  value,
  pattern,
  name,
  dangerText = "This is not correct",
  type,
  placeholder,
  onChange,
}: TextInputTemplateInterface) => {
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
          autoComplete="true"
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
