import { Link } from "@tanstack/react-router";
import Badge from "./Badge";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      to="/"
      className={
        "relative text-black text-2xl font-semibold inline-block " + className
      }
    >
      LearnFly
      <Badge text="beta" />
    </Link>
  );
};

export default Logo;
