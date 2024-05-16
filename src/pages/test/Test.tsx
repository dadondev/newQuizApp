import Timer from "./components/Timer";
import { IQuiz } from "../../types/types";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import HowMuch from "./components/HowMuch";
import QuizContainer from "./components/QuizContainer";

const Test = ({ data }: { data: IQuiz }) => {
  const navigate = useNavigate();
  (() => {
    if (typeof data === "string")
      navigate({
        to: "/",
      });
  })();
  useEffect(() => {}, []);

  return (
    <main className="h-full">
      <Timer howMuch={20 || data.quizs.length} />
      <HowMuch className="pt-4">1 of {data.quizs.length}</HowMuch>

      <QuizContainer />
    </main>
  );
};

export default Test;
