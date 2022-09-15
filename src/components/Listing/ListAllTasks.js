import ListItem from "./ListItem";
import "./ListAllTasks.css";

import { useSelector } from "react-redux";

const ListAllTask = () => {
  const tasks = useSelector((state) => state.task.tasks);

  const tasksList = tasks.map((item) => (
    <ListItem
      content={item.content}
      id={item.id}
      isDone={item.isDone}
      key={item.id}
    />
  ));

  return (
    <div className="wrapper">
      <ul>{tasksList}</ul>
    </div>
  );
};

export default ListAllTask;
