import { Link } from "@tanstack/react-router";

const ListLinksItem = ({
  to,
  text,
  active,
}: {
  to: string;
  text: string;
  active: boolean;
}) => {
  return (
    <Link
      to={to}
      className={
        " flex justify-center px-6 items-center py-2 rounded-full font-semibold text-text " +
        (active ? "bg-white " : "bg-transparent hover:bg-gray-200/60")
      }
    >
      {text}
    </Link>
  );
};

export default ListLinksItem;
