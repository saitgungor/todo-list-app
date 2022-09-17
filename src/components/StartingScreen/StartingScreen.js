import classes from "./StartingScreen.module.css";

import UsernameInput from "./UsernameInput";

const StartingScreen = () => {
  return (
    <div className={classes.wrapper}>
      <h2>Welcome to todo app</h2>
      <p>Please enter your username</p>
      <UsernameInput />
    </div>
  );
};

export default StartingScreen;
