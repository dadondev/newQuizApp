import { createFileRoute } from "@tanstack/react-router";
import Test from "../../pages/test/Test";
import { IQuiz } from "../../types/types";
import { baseUrl } from "../../general/utils/firebase";

let singleData: IQuiz[];

const getData = async (test: string) => {
  const req = await fetch(baseUrl + "tests?id=" + test);
  const res: IQuiz[] = await req.json();
  singleData = res;
};

export const Route = createFileRoute("/test/$test")({
  loader: async ({ params: { test } }) => {
    await getData(test);
  },
  beforeLoad: () => <span className="text-4xl block text-center">Loading</span>,
  component: () => <Test data={singleData[0]} />,
});
