import { ReactNode } from "@tanstack/react-router";

function HowMuch({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1 className={"text-center text-xl text-gray-400 font-bold " + className}>
      {children}
    </h1>
  );
}

export default HowMuch;
