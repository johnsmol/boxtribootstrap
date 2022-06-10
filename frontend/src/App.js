import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./LoginButton";
import Profile from "./Profile";
import LogoutButton from "./LogoutButton";
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
