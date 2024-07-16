import NavbarDrawer from "./NavbarDrawer";
import NavbarLogo from "./NavbarLogo";
import NavbarRoute from "./NavbarRoute";
import NavbarSearch from "./NavbarSearch";

const Navbar = () => {
  return (
    <nav className=" bg-white rounded-sm shadow-lg text-black px-7 py-6 z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center">
          <NavbarDrawer />
          <NavbarLogo />
          <NavbarRoute />
        </div>
        <div>
          <NavbarSearch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
