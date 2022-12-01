import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetListOfUsers } from "./Actions/UsersActions";
import Alert from "./Components/Alert";
import CreateUser from "./Components/CreateUser/CreateUser";
import Followers from "./Components/Users/Followers";
import FollowUser from "./Components/Users/FollowUser";
// import Users from "./components/Users/Users";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetListOfUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <Alert />
      <CreateUser />
      <FollowUser />
      <Followers />
    </div>
  );
}

export default App;
