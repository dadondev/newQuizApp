import { ReactNode } from "@tanstack/react-router";

const Badge = ({ text }: { text: ReactNode }) => {
  return (
    <span className="inline-block py-[4px] pb-[4px] px-[5px] translate-x-1 r-5 rounded-2xl bg-text font-semibold text-white leading-none text-lg absolute top-0">
      {text}
    </span>
  );
};

export default Badge;
