interface RadioInputInterface {
  query: string;
  RadioLabelTemplate: any;
}

export const RadioInputTemplate = ({
  query,
  RadioLabelTemplate,
}: RadioInputInterface) => {
  return (
    <>
      <fieldset className="flex flex-wrap flex-raw justify-start items-center gap-2 p-[3px]">
        <span className="text-center">{query}</span>
        {RadioLabelTemplate}
      </fieldset>
      <hr className="py-0.5 my-1" />
    </>
  );
};

interface RadioInputInterface {
  value: string;
  name: string;
  inputID: string;
}

export const RadioInput = ({ value, name, inputID }: RadioInputInterface) => {
  return (
    <input
      className="hidden"
      type="radio"
      value={value}
      name={name}
      id={inputID}
    />
  );
};
