import classes from "./Error.module.css";

const Error = () => {
  return (
    <div className={classes.wrapper}>
      <p>The input must contain at least 3 characters.</p>
    </div>
  );
};

export default Error;
