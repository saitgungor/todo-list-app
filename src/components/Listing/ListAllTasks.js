import ListItem from "./ListItem";
import classes from "./ListAllTasks.module.css";

const ListAllTask = () => {
  const dummyList = [
    { task: "React öğren", id: 1 },
    { task: "JavaScript öğren", id: 2 },
    { task: "TypeScript öğren", id: 3 },
    { task: "Günlük 1.5 lt su iç", id: 4 },
    { task: "Yüzme öğren", id: 4 },
  ];

  const tasksList = dummyList.map((item) => (
    <ListItem
      task={item.task}
      id={item.id}
      isDone={item.isDone}
      key={item.id}
    />
  ));

  return (
    <div className={classes.wrapper}>
      <ul>{tasksList}</ul>
    </div>
  );
};

export default ListAllTask;
