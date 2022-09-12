import classes from "./Input.module.css";

const Input = () => {
  return (
    <div className={classes.wrapper}>
      <input type="text" id="task" placeholder="Add a New Task" />
      <span className={classes.button}>Add</span>
    </div>
  );
};

export default Input;
