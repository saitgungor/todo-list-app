import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Wrapper from "./components/UI/Wrapper";
import MainHeader from "./components/Layout/MainHeader";
import ListAllTask from "./components/Listing/ListAllTasks";
import NoTaskAdded from "./components/UI/NoTaskAdded";
import Error from "./components/UI/Error";
import StartingScreen from "./components/StartingScreen/StartingScreen.js";
import { fetchTasksData } from "./store/task-actions";
import { taskActions } from "./store/task-slice";

function App() {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task);
  let isFetched = false;

  const username = JSON.parse(localStorage.getItem("Username"));

  const errorTimer = () => {
    dispatch(taskActions.showError(false));
  };

  setTimeout(errorTimer, 3000);

  useEffect(() => {
    dispatch(fetchTasksData());
  }, [dispatch]);

  if (task.isFetchinDone) isFetched = true;

  const showStartingScreen = !username && task.showStartingScreen;

  return (
    <Wrapper>
      {showStartingScreen && <StartingScreen />}
      {!showStartingScreen && (
        <Fragment>
          <MainHeader username={username} />
          {task.tasks.length === 0 && isFetched && <NoTaskAdded />}
          {task.showError && <Error />}
          <ListAllTask />
        </Fragment>
      )}
    </Wrapper>
  );
}

export default App;
