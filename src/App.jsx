import CurrencyConverter from "./Projects/CurrencyConverter/CurrencyConverter";
import "./App.css";
import UserContextProvider from "./Projects/MiniContext/context/UserContextProvider";
import Login from "./Projects/MiniContext/components/Login";
import Profile from "./Projects/MiniContext/components/Profile";

function App() {
  return (
    <>
      <CurrencyConverter />
      <UserContextProvider>
        <h1>Mini Context API</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
