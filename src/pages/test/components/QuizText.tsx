const QuizText = ({ text }: { text: string }) => {
  return (
    <article className="py-3 px-5 rounded-xl bg-slate-50 max-w-[calc(100dvw-20dvw)] inline-block mx-auto shadow-sm backdrop-blur-xl font-semibold">
      <h1 className="text-text text-xl select-none">{text}</h1>
    </article>
  );
};

export default QuizText;
