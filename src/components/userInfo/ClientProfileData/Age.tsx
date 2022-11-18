const Age = () => {
  return (
    <section>
      <input
        type="date"
        name="생년월일"
        min="1953-01-01"
        max="2003-12-31"
        className="w-full border shadow rounded-md px-2 py-1 my-2"
        required
      />
      <hr className="py-0.5 my-1" />
    </section>
  );
};

export default Age;
