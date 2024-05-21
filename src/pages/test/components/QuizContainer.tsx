import { useEffect, useState } from "react";
import {
  IQuiz,
  ISingleQuiz,
  ISingleRes,
  quizContainer,
  userResult,
} from "../../../types/types";
import QuizText from "./QuizText";
import VariantsContainer from "./VariantsContainer";
import { giveLetter } from "../../../general/utils/alphabet";
import { useNavigate } from "@tanstack/react-router";
import { baseUrl } from "../../../general/utils/firebase";

const QuizContainer = ({ id, name, quizs, results, time }: quizContainer) => {
  const navigate = useNavigate();
  const [curVariant, setCurVariant] = useState<number>(0);
  const [currentTest, setCurrentTest] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState<number[]>([]);
  const [submit, setSubmit] = useState(false);
  const handleClick = () => {
    setSelectedVariants((prev) => {
      return [...prev, curVariant];
    });
    if (currentTest !== quizs.length - 1) {
      setCurrentTest((prev) => prev + 1);
    } else {
      setSubmit(true);
    }
  };

  useEffect(() => {
    if (submit) {
      examResults(selectedVariants, quizs);
    }
  }, [submit]);
  useEffect(() => {
    if (time === "00:00") {
      examResults(selectedVariants, quizs);
    }
  }, [time]);
  const examResults = (arr: number[], quizs: ISingleQuiz[]) => {
    let result: ISingleRes[] = [];
    result = quizs.map((e, i) => {
      let variant: ISingleRes = {
        equal: false,
        trueAnswer: "none",
        userAnswer: "none",
      };
      if (arr[i]) {
        let equal = equalVariant(e.trueAnswer, giveLetter(arr[i]));
        variant = {
          equal,
          trueAnswer: e.trueAnswer,
          userAnswer: giveLetter(arr[i]),
        };
      }
      return variant;
    });
    sendResults(makeNewSchema(result)).then((e) => {
      console.log(e);
    });
    navigate({
      to: "/",
    });
    return result;
  };

  const sendResults = async (a: IQuiz) => {
    const resp = await fetch(baseUrl + "tests/" + id, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(a),
    });
    const data = await resp.json();
    return data;
  };

  const makeNewSchema = (a: ISingleRes[]): IQuiz => {
    let userResults: userResult = {
      name,
      results: [...a],
    };
    let newSchema: IQuiz = {
      name,
      id,
      quizs,
      results: [...results, userResults],
    };
    return newSchema;
  };
  const equalVariant = (a: string, b: string): boolean => {
    return a === b;
  };
  return (
    <div className="grid justify-center mt-5 items-center px-4 md:px-0">
      <QuizText text={quizs[currentTest].question} />
      <VariantsContainer
        data={quizs}
        setCurVariant={setCurVariant}
        curVariant={curVariant}
      />
      <button
        onClick={handleClick}
        className="text-white text-lg rounded-lg mt-6 py-2 px-4 bg-black/90 max-w-[200px] mx-auto w-full transition-all active:scale-95"
      >
        {currentTest !== quizs.length - 1 ? "Keyingisi" : "Yakunlash"}
      </button>
    </div>
  );
};

export default QuizContainer;
