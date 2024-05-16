import { useEffect, useState } from "react";
import QuizCard from "./QuizCard";
import { getDatabase, onValue, ref } from "firebase/database";
import { IQuiz } from "../../../types/types";

const Main = () => {
  const [data, setDatas] = useState<IQuiz[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    const db = getDatabase();
    const dataRef = ref(db, "tests/");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setDatas(data);
      setLoading(false);
    });
  };
  return (
    <main className="h-full max-w-[calc(100dvw-20dvw)] mx-auto pt-5">
      {!loading ? (
        data.map((e, i) => (
          <QuizCard howMuch={e.quizs.length} id={e.id} name={e.name} key={i} />
        ))
      ) : (
        <h1 className="text-2xl text-text font-bold">Yuklanyapti...</h1>
      )}
    </main>
  );
};

export default Main;
