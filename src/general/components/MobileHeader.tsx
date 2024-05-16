import Logo from "./Logo";
import MobileMenuList from "./MobileMenuList";
import IconBtn from "./PrivateBtn";
import { createPortal } from "react-dom";

const MobileHeader = () => {
  return (
    <div className="w-full py-4 px-5 flex justify-between items-center overflow-hidden lg:hidden">
      <Logo />
      <IconBtn
        url="/private.svg"
        h={20}
        w={20}
        className="bg-text text-white "
      />

      {createPortal(<MobileMenuList />, document.body)}
    </div>
  );
};

export default MobileHeader;
