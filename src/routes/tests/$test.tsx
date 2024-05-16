import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tests/$test")({
  component: () => <div>Hello /tests/$test!</div>,
});
