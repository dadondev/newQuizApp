import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <header className="sticky bg-transparent top-0">
      <MobileHeader />
      <DesktopHeader />
    </header>
  );
};

export default Header;
