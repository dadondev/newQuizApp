import { Dispatch, SetStateAction } from "react";

const Variant = ({
  index,
  text,
  setCurVariant,
  curVariant,
}: {
  index: number;
  text: string;
  setCurVariant: Dispatch<SetStateAction<number>>;
  curVariant: number;
}) => {
  return (
    <button
      onClick={() => {
        setCurVariant(index);
      }}
      className={
        "py-2 px-5 !transition-all text-left text-lg font-semibold backdrop-blur-md border-[2px] rounded-lg max-w-[700px] md:min-w-[400px] " +
        (index === curVariant
          ? "bg-orange-100/90 border-orange-200"
          : " hover:bg-slate-100 bg-slate-50 border-slate-100")
      }
    >
      {text}
    </button>
  );
};

export default Variant;
