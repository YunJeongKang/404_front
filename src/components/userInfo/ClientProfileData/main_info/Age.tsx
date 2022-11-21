interface AgeInterface {
  value: string;

  onChange: (evt: any) => void;
}

const Age = ({ onChange, value }: AgeInterface) => {
  return (
    <section>
      <input
        type="date"
        name="birth"
        min="1953-01-01"
        max="2003-12-31"
        className="w-full border shadow rounded-md px-2 py-1 my-2"
        onChange={onChange}
        value={value}
        required
      />
      <hr className="py-0.5 my-1" />
    </section>
  );
};

export default Age;
