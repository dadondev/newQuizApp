import { Link } from "@tanstack/react-router";

const ItemLink = ({
  to,
  url,
  active,
}: {
  to: string;
  url: string;
  active: boolean;
}) => {
  return (
    <Link
      to={to}
      className={
        "relative hover:opacity-[0.8] w-10 h-10 bg-text flex items-center transition-transform justify-center rounded-lg active:scale-75 " +
        (active ? "" : "scale-[90%]")
      }
    >
      <img src={url} alt="icon" width={20} height={20} />
    </Link>
  );
};

export default ItemLink;
