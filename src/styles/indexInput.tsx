interface RadioInputTemplateInterface {
  query: string;
  RadioLabelTemplate: any;
}

export const RadioInputTemplate = ({
  query,
  RadioLabelTemplate,
}: RadioInputTemplateInterface) => {
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
