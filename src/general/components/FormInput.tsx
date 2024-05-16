const FormInput = ({
  name,
  place,
  type,
  className,
  validate,
}: {
  name: string;
  place: string;
  type: string;
  className?: string;
  validate?: boolean;
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        className={
          (name === "testCode" || "testPupil" === name
            ? "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none "
            : "") +
          " placeholder:text-text/80 border-text/20 focus:border-text border-2 focus:outline-none outline-none transition-all rounded-lg py-1 px-2 text-lg " +
          (validate ? "border-red-500 " : "") +
          className
        }
        placeholder={place}
      />
    </>
  );
};

export default FormInput;
