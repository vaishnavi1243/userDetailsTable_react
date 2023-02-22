import "./App.css";
import UserCard from "./components/UserCard/UserCard";
import userDetails from "./MOCK_DATA.js";

function App() {
  
  
  return (
    <div className="App">
      <h1>User List</h1>
           <UserCard userDetails={userDetails} />
      </div>
  );
}

export default App;
