import Image from "next/image";
import Link from "next/link";
import GenreDropDown from "./GenreDropDown";
import SearchInput from "./SearchInput";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between backdrop-blur-2xl transition-colors p-5 bg-[#12121280] gap-4 md:gap-0 sticky z-50 top-0">
      {/* Logo */}
      <Link href={"/"}>
        <h1 className="font-extrabold text-4xl">Movie Explorer</h1> 
        
      </Link>
      {/* Others */}
      <div className="text-white flex space-x-2 items-center">
        {/* Genre */}
        {/* <GenreDropDown /> */}
        {/* Search */}
        <SearchInput />
        {/* Theme */}
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Header;
