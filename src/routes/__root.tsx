import { Outlet, createRootRoute } from "@tanstack/react-router";
import Protect from "../pages/protect/Protect";

export const Route = createRootRoute({
  component: () => (
    <Protect>
      <Outlet />
    </Protect>
  ),
});
