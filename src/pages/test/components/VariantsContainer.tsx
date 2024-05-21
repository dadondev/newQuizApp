import { Dispatch, SetStateAction } from "react";
import { ISingleQuiz } from "../../../types/types";
import Variant from "./Variant";

const VariantsContainer = ({
  data,
  setCurVariant,
  curVariant,
}: {
  data: ISingleQuiz[];
  setCurVariant: Dispatch<SetStateAction<number>>;
  curVariant: number;
}) => {
  return (
    <div className="grid gap-4 mt-6">
      {data.map((e) =>
        Object.values(e.variants).map((e, i) => (
          <Variant
            curVariant={curVariant}
            index={i}
            setCurVariant={setCurVariant}
            text={e}
            key={i}
          />
        ))
      )}
    </div>
  );
};

export default VariantsContainer;
