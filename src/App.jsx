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

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">{/*Theme Button */}</div>

          <div className="w-full max-w-sm mx-auto">{/*Card */}</div>
        </div>
      </div>
    </>
  );
}

export default App;
