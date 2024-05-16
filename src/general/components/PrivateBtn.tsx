import { IIconBtn } from "../../types/types";

const IconBtn = ({ h, url, w, onClick, className }: IIconBtn) => {
  return (
    <button
      onClick={onClick}
      className={
        className +
        "bg-gray-50 p-2 transition-transform rounded-md active:scale-90 "
      }
    >
      <img src={url} width={w} height={h} />
    </button>
  );
};

export default IconBtn;
