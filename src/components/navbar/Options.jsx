import { Downloads, Lines, Profile } from "../../constraints/settingsNavBtns";

const Options = () => {
  return (
    <div className="inline-flex rounded-md shadow-sm " role="group">
      <Profile />
      <Lines />
      <Downloads />
    </div>
  );
};

export default Options;
