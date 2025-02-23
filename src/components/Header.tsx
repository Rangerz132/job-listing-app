import HeaderMobile from "../assets/images/bg-header-mobile.svg";
import HeaderDesktop from "../assets/images/bg-header-desktop.svg";

const Header = () => {
  return (
    <div className="w-full h-20 md:h-40 bg-desaturated-dark-cyan absolute">
      {/** Mobile header */}
      <div
        className="w-full h-full md:hidden"
        style={{
          backgroundImage: `url("${HeaderMobile}")`,
          backgroundSize: "cover",
        }}
      ></div>
      {/** Desktop header */}
      <div
        className="w-full h-full hidden md:flex"
        style={{
          backgroundImage: `url("${HeaderDesktop}")`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default Header;
