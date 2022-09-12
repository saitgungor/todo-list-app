import classes from "./MainHeader.module.css";
import Input from "./Input";

const MainHeader = () => {
  return (
    <div className={classes.header}>
      <h1>ToDo </h1>
      <Input />
    </div>
  );
};

export default MainHeader;
