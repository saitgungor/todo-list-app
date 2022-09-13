import Wrapper from "./components/UI/Wrapper";
import MainHeader from "./components/Layout/MainHeader";
import ListAllTask from "./components/Listing/ListAllTasks";

function App() {
  return (
    <Wrapper>
      <MainHeader />
      <ListAllTask />
    </Wrapper>
  );
}

export default App;
