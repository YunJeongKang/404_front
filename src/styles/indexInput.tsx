interface RadioInputTemplateInterface {
  RadioLabelTemplate: any;
}

export const RadioInputTemplate = ({
  RadioLabelTemplate,
}: RadioInputTemplateInterface) => {
  return (
    <>
      <fieldset className="flex flex-wrap flex-raw justify-start items-center gap-2 p-[3px]">
        {RadioLabelTemplate}
      </fieldset>
      <hr className="py-0.5 my-1" />
    </>
  );
};
