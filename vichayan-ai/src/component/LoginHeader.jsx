
import Vicha from "./../assets/vicha.png";
const Header = () => {

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap sm:p-5 pt-6 mb-[-20px] flex-row sm:justify-between justify-center md:flex-row items-center">
        <img src={Vicha} alt="" />
        <nav className="md:ml-auto  flex-wrap items-center text-base justify-center hidden md:block">
          <a className="mr-5 hover:text-gray-900">Plus</a>
          <a className="mr-5 hover:text-gray-900">Enterprise</a>
          <a className="mr-5 hover:text-gray-900">Career</a>
          <a className="mr-5 hover:text-gray-900">Term & condition</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
