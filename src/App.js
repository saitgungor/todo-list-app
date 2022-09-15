import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Wrapper from "./components/UI/Wrapper";
import MainHeader from "./components/Layout/MainHeader";
import ListAllTask from "./components/Listing/ListAllTasks";
import { fetchTasksData } from "./store/task-actions";

function App() {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasksData());
  }, [dispatch]);

  return (
    <Wrapper>
      <MainHeader />
      <ListAllTask />
    </Wrapper>
  );
}

export default App;
