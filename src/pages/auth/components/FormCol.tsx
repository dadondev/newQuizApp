import FormInput from "../../../general/components/FormInput";

function FormCol({
  name,
  type,
  url,
  w,
  h,
  img,
  typeIf,
  place,
  show,
}: {
  name: string;
  type: string;
  url: string;
  w?: number;
  h?: number;
  place: string;
  img?: {
    alt?: string;
    onClick?: () => void;
    className?: string;
  };
  typeIf?: string;
  show?: boolean;
}) {
  return (
    <article className="grid grid-cols-[1fr_20px] gap-2 items-center">
      <FormInput
        name={name}
        place={place}
        type={show ? typeIf || type : type}
      />
      <img
        src={"/" + url}
        alt={img?.alt || "icon"}
        width={w || 20}
        height={h || 20}
        className={"cursor-pointer " + img?.className}
        onClick={img?.onClick}
      />
    </article>
  );
}

export default FormCol;
