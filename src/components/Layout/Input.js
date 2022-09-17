import { useState, useRef } from "react";
import classes from "./Input.module.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/task-actions";
import { taskActions } from "../../store/task-slice";
import { useSelector } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.task.tasks);

  const inputRef = useRef();

  const [input, setInput] = useState("");

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const onClickHandler = () => {
    inputRef.current.value = "";
    if (input.trim().length < 3) {
      dispatch(taskActions.showError(true));
      return;
    }
    const content = {
      content: input,
      isDone: false,
      id: `${tasks.length > 0 ? +tasks[tasks.length - 1].id + 1 : 1}`,
    };
    dispatch(addTask(content));
    dispatch(taskActions.addTask(content));
  };

  return (
    <div className={classes.wrapper}>
      <input
        type="text"
        id="task"
        placeholder="Add a New Task"
        onChange={onChangeHandler}
        ref={inputRef}
      />
      <span className={classes.button} onClick={onClickHandler}>
        Add
      </span>
    </div>
  );
};

export default Input;
