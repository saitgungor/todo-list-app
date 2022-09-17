import { useState, useRef } from "react";
import { taskActions } from "../../store/task-slice";
import classes from "./UsernameInput.module.css";
import { useDispatch } from "react-redux";

const UsernameInput = () => {
  const dispatch = useDispatch();

  const inputRef = useRef();

  const [input, setInput] = useState("");

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const onClickHandler = () => {
    inputRef.current.value = "";
    if (input.trim().length < 3) return;
    localStorage.setItem("Username", JSON.stringify(input));
    dispatch(taskActions.closeStartingScreen());
  };

  return (
    <div className={classes.wrapper}>
      <input
        type="text"
        id="task"
        placeholder="User Name"
        onChange={onChangeHandler}
        ref={inputRef}
      />
      <span className={classes.button} onClick={onClickHandler}>
        Submit
      </span>
    </div>
  );
};

export default UsernameInput;
