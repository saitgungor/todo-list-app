import classes from "./NoTaskAdded.module.css";

const NoTasksAdded = () => {
  return (
    <div className={classes.wrapper}>
      <p>
        No tasks Added <br />
        Please write your task to input field and press Add button or Enter key
        !
      </p>
    </div>
  );
};

export default NoTasksAdded;
