import { useState } from "react";
import ItemLink from "./Link";
import { useRouterState } from "@tanstack/react-router";
const MobileMenuList = () => {
  const router = useRouterState();
  const pathname = router.location.pathname;
  const [admin] = useState(
    localStorage.getItem("testAdmin")
      ? localStorage.getItem("testAdmin") === "true"
      : false
  );

  return (
    <div
      className={
        "w-full fixed flex justify-center gap-4 bottom-0 py-3 px-4 lg:hidden"
      }
    >
      <ItemLink url="/home.svg" to="/" active />
      {!admin && (
        <ItemLink
          url="/chart.svg"
          to="/myresults"
          active={pathname === "/myresults"}
        />
      )}

      {admin && (
        <ItemLink
          url="/chart.svg"
          to="/results"
          active={pathname === "/results"}
        />
      )}
      <ItemLink
        url="/profile.svg"
        to="/profile"
        active={pathname === "/profile"}
      />
    </div>
  );
};

export default MobileMenuList;
