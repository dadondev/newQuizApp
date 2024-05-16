import ListLinks from "./ListLinks";
import Logo from "./Logo";
import IconBtn from "./PrivateBtn";

const DesktopHeader = () => {
  return (
    <div className="w-full py-3 px-5 pt-8 mx-auto max-w-[calc(100dvw-10dvw)] hidden lg:flex justify-between items-center">
      <Logo className="font-[700] text-[30px]" />
      <ListLinks />
      <IconBtn
        url="/private.svg"
        h={25}
        w={25}
        className="transition-all hover:bg-text/70 bg-text "
      />
    </div>
  );
};

export default DesktopHeader;
