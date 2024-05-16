const Variant = () => {
  return (
    <button
      className={
        "py-2 px-5 text-left text-lg font-semibold border bg-slate-50 rounded-lg hover:bg-slate-100 transition-all " +
        (!true ? "bg-orange-50 border-orange-50 border" : "")
      }
    >
      29 ta
    </button>
  );
};

export default Variant;
