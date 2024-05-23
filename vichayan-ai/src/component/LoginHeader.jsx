import Vicha from "./../assets/vicha.png";
import Dropdown from "./Dropdown";
const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap sm:p-5 px-7 pt-6 mb-[-20px] flex-row sm:justify-between justify-center md:flex-row items-center">
        <img src={Vicha} alt="" />
        <nav className="md:ml-auto  flex-wrap items-center text-base justify-center hidden md:block">
          <a className="mr-5 text-gray-400 hover:text-gray-900">Plus</a>
          <a className="mr-5 text-gray-400 hover:text-gray-900">Enterprise</a>
          <a className="mr-5 text-gray-400 hover:text-gray-900">Career</a>
          <a className="mr-5 text-gray-400 hover:text-gray-900">Blog</a>
          <a className="mr-5 text-gray-400 hover:text-gray-900">Term & condition</a>
          <Dropdown />
        </nav>
      </div>
    </header>
  );
};

export default Header;
