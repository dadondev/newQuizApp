import Timer from "./components/Timer";
import { IQuiz } from "../../types/types";
import { useNavigate } from "@tanstack/react-router";
import HowMuch from "./components/HowMuch";
import QuizContainer from "./components/QuizContainer";
import { useState } from "react";

const Test = ({ data }: { data: IQuiz }) => {
  const [time, setTime] = useState(
    data.quizs.length > 9
      ? data.quizs.length + ":00"
      : "0" + data.quizs.length + ":00"
  );
  const navigate = useNavigate();
  (() => {
    if (typeof data === "string")
      navigate({
        to: "/",
      });
  })();

  return (
    <main className="h-full">
      <Timer setTime={setTime} time={time} />
      <HowMuch className="pt-4">1 of {data.quizs.length}</HowMuch>
      <QuizContainer {...data} time={time} />
    </main>
  );
};

export default Test;
