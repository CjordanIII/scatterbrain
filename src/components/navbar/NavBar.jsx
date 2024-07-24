import Btns from "../../constraints/Btns";

const NavBar = () => {
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <Btns type={"Home"} />
        <Btns type={"Wallet"} />
        <Btns type={"New item"} />
        <Btns type={"Settings"} />
        <Btns type={"Profile"} />
      </div>
    </div>
  );
};

export default NavBar;
