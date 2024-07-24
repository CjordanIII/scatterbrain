import {
  Downloads,
  Profile,
  Settings,
} from "../../constraints/settingsNavBtns";

const Options = () => {
  return (
    <div className="inline-flex rounded-md shadow-sm " role="group">
      <Profile />
      <Settings />
      <Downloads />
    </div>
  );
};

export default Options;
