import classes from "./MainHeader.module.css";
import Input from "./Input";

const MainHeader = (props) => {
  return (
    <div className={classes.header}>
      <span className={classes.username}>Welcome, {props.username}</span>
      <h1>ToDo </h1>
      <Input />
    </div>
  );
};

export default MainHeader;
