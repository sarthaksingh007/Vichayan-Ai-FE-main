
import SideBar from "./../component/SideBar";
import Home from "./../pages/Home";
const SecondApp = () => {
  return (
    <div className="flex bg-[#EEEEE4] h-[100vh]">
      <SideBar />
      <div className="flex-1 p-6">
        <Home />
      </div>
    </div>
  );
};

export default SecondApp;
