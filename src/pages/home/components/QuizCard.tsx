import { useNavigate } from "@tanstack/react-router";
import { IQuizCard } from "../../../types/types";
import { useEffect, useState } from "react";
import isAdmin from "../../../functions/isAdmin";
import IconButton from "./IconButton";

const QuizCard = ({ howMuch, id, name }: IQuizCard) => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    isAdmin(localStorage, setAdmin);
  }, []);

  return (
    <div className="w-[300px] p-4 rounded-lg bg-slate-50/10 backdrop-blur-md relative shadow-lg">
      <h1 className="text-2xl text-text font-bold mb-2 capitalize">{name}</h1>
      <span className="text-gray-400 text-lg font-semibold mb-2">
        Savollar soni: <span className="text-text">{howMuch} ta</span>
      </span>
      {!admin && (
        <IconButton
          className=" absolute bottom-4 right-4"
          h={28}
          w={28}
          url="/play.svg"
          onClick={() =>
            navigate({
              to: "/test/" + id,
            })
          }
        />
      )}

      {admin && (
        <article className="flex justify-center mt-2 gap-3">
          <IconButton
            h={28}
            w={28}
            url="/chart.svg"
            onClick={() =>
              navigate({
                to: "/results/" + id,
              })
            }
          />
          <IconButton
            h={28}
            w={28}
            url="/settings.svg"
            onClick={() =>
              navigate({
                to: "/tests/" + id,
              })
            }
          />
        </article>
      )}
    </div>
  );
};

export default QuizCard;
