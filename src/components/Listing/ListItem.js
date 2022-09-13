import classes from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <li id={props.id} className={classes.listItem}>
      {props.task}
      <span className={classes.edit}>
        <img src="/edit.png" />
      </span>
      <span className={classes.delete}>
        <img src="/close.png" />
      </span>
    </li>
  );
};

export default ListItem;
