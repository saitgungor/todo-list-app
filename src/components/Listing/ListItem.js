import { useDispatch, useSelector } from "react-redux";

import classes from "./ListItem.module.css";
import { taskActions } from "../../store/task-slice";
import { deleteTask, updateTaskData } from "../../store/task-actions";
import EditListItem from "./EditListItem";

const ListItem = (props) => {
  const tasks = useSelector((state) => state.task.tasks);

  const dispatch = useDispatch();

  const onClickHandler = (event) => {
    const id = event.target.closest("li").id;
    if (
      event.target.nodeName === "DIV" ||
      event.target.nodeName === "LI" ||
      event.target.nodeName === "P"
    ) {
      dispatch(taskActions.toggleTask(id));
      const [target] = tasks.filter((task) => task.id === id);
      const content = { isDone: !target.isDone };
      dispatch(updateTaskData(content, id));
    } else {
      return;
    }
  };

  const onDeleteHandler = (event) => {
    const id = event.target.closest("li").id;
    dispatch(taskActions.removeTask(id));
    dispatch(deleteTask(id));
  };

  return (
    <li
      id={props.id}
      className={`${classes.listItem} ${props.isDone && classes.checked}`}
      onClick={onClickHandler}
    >
      <EditListItem content={props.content} />

      <span className={classes.close} onClick={onDeleteHandler}>
        <img src="/close.png" alt="delete-icon" />
      </span>
    </li>
  );
};

export default ListItem;
