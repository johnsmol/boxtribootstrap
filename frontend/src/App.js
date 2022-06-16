import "./App.css";
import LoginButton from "./components/loginButton/LoginButton";
import Profile from "./components/profile/Profile";
import LogoutButton from "./components/logoutButton/LogoutButton";
import TestButton from "./components/testButton/TestButton";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <LoginButton></LoginButton>
                <Profile></Profile>
                <LogoutButton></LogoutButton>
                <TestButton></TestButton>
            </header>
        </div>
    );
}

export default App;
