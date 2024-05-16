import { useRouterState } from "@tanstack/react-router";
import ListLinksItem from "./ListLinksItem";

const ListLinks = () => {
  const {
    location: { pathname },
  } = useRouterState();

  return (
    <ul className="flex bg-gray-50/90 backdrop-blur py-[6px] px-2  gap-[3px] rounded-full">
      <ListLinksItem to="/" text="Asosiy" active={pathname === "/"} />
      <ListLinksItem
        to="/myresults"
        text="Natijalarim"
        active={pathname === "/myresults"}
      />
      <ListLinksItem
        to="/profile"
        text="Profile"
        active={pathname === "/profile"}
      />
    </ul>
  );
};

export default ListLinks;
