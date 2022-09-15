import { useState } from "react";
import classes from "./Input.module.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/task-actions";

const Input = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const onClickHandler = () => {
    const content = { content: input };
    dispatch(addTask(content));
  };

  return (
    <div className={classes.wrapper}>
      <input
        type="text"
        id="task"
        placeholder="Add a New Task"
        onChange={onChangeHandler}
      />
      <span className={classes.button} onClick={onClickHandler}>
        Add
      </span>
    </div>
  );
};

export default Input;
