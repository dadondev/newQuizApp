import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/results/$test")({
  component: () => <div>Hello /results/$test!</div>,
});
