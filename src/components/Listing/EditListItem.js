import classes from "./EditListItem.module.css";
import { Fragment, useState, useRef } from "react";

import { useDispatch } from "react-redux";
import { taskActions } from "../../store/task-slice";
import { updateTaskData } from "../../store/task-actions";

const EditListItem = (props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  const onEditHandler = () => {
    setIsEditing(true);
  };

  const onSubmitHandler = (event) => {
    const id = event.target.closest("li").id;
    const content = { content: inputRef.current.value, id: id };
    dispatch(taskActions.editTask(content));
    dispatch(updateTaskData(content, content.id));
    setIsEditing(false);
  };

  const onDiscardHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className={classes.wrapper}>
      {isEditing ? (
        <Fragment>
          <input
            type="text"
            defaultValue={props.content}
            ref={inputRef}
          ></input>
          <span className={classes.submit} onClick={onSubmitHandler}>
            <img src="/submit.png" />
          </span>
          <span className={classes.discard} onClick={onDiscardHandler}>
            <img src="/discard.png" />
          </span>
        </Fragment>
      ) : (
        <Fragment>
          <p>{props.content}</p>
          <span className={classes.edit} onClick={onEditHandler}>
            <img src="/edit.png" alt="edit-icon" />
          </span>
        </Fragment>
      )}
    </div>
  );
};

export default EditListItem;
