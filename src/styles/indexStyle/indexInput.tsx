import RequiredMark from "./indexSpan";

interface RadioInputTemplateInterface {
  RadioLabelTemplate: React.ReactNode;
}

export const RequiredRadioInputTemplate = ({
  RadioLabelTemplate,
}: RadioInputTemplateInterface) => {
  return (
    <>
      <fieldset className="w-2/3 flex flex-wrap flex-raw justify-start items-center gap-2 p-[3px]">
        {RadioLabelTemplate}
        <RequiredMark />
      </fieldset>
      <hr className="py-0.5 my-1" />
    </>
  );
};

export const RadioInputTemplate = ({
  RadioLabelTemplate,
}: RadioInputTemplateInterface) => {
  return (
    <>
      <fieldset className="w-2/3 flex flex-wrap flex-raw justify-start items-center gap-2 p-[3px]">
        {RadioLabelTemplate}
      </fieldset>
      <hr className="py-0.5 my-1" />
    </>
  );
};
