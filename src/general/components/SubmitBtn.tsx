const SubmitBtn = ({
  loading,
  className,
  onClick,
  text,
}: {
  text?: string;
  loading: boolean;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={
        "rounded-lg p-1 text-lg max-w-[140px] mx-auto h-[39.2px] bg-white/90 border-2 border-text/20 w-full flex justify-center items-center font-semibold transition-transform " +
        className
      }
    >
      {loading ? <img src="/loading.svg" /> : text ? text : "Kirish"}
    </button>
  );
};

export default SubmitBtn;
