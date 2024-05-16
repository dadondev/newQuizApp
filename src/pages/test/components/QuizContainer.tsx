import QuizText from "./QuizText";
import VariantsContainer from "./VariantsContainer";

const QuizContainer = () => {
  return (
    <div className="grid justify-center mt-5 items-center">
      <QuizText text="Ingliz tilida nechta harf bor?" />
      <VariantsContainer />
    </div>
  );
};

export default QuizContainer;
