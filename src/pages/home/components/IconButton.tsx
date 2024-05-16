const IconButton = ({
  onClick,
  url,
  h,
  w,
  className,
}: {
  onClick?: () => void;
  url: string;
  w: number;
  h: number;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={
        "bg-text w-10 h-10 flex items-center justify-center rounded-lg transition-all active:scale-90 " +
        className
      }
    >
      <img src={url} alt="icon" width={w} height={h} />
    </button>
  );
};

export default IconButton;
