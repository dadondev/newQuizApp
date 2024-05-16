import { useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const Timer = ({ howMuch }: { howMuch: number }) => {
  const navigate = useNavigate();
  const timerRef = useRef<any>();
  const [time, setTime] = useState(
    howMuch > 9 ? howMuch + ":00" : "0" + howMuch + ":00"
  );

  useEffect(() => {
    timerRef.current = setInterval(() => workTimer(), 1000);
  }, []);

  useEffect(() => {
    const over = time === "00:00";
    if (over) clearInterval(timerRef.current);
    if (over)
      navigate({
        to: "/",
      });
  }, [time]);
  const workTimer = () => {
    setTime((prev) => {
      const minutes = prev.slice(0, 2);
      const seconds = prev.slice(3);
      let newTime = "";
      if (+seconds !== 0) {
        if (+seconds - 1 > 9) {
          newTime = minutes + ":" + (+seconds - 1);
        }
        if (+seconds - 1 < 10) {
          newTime = minutes + ":0" + (+seconds - 1);
        }
      } else {
        if (+minutes - 1 !== 0 && +minutes - 1 > 9) {
          newTime = +minutes - 1 + ":59";
        }
        if (+minutes - 1 < 10) {
          newTime = "0" + (+minutes - 1) + ":59";
        }
      }
      return newTime;
    });
  };
  return (
    <article className="text-4xl text-text font-bold pt-3 block text-center mx-auto sticky top-0">
      {time}
    </article>
  );
};

export default Timer;
