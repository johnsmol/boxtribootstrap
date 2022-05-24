import logo from './logo.svg';
import './App.css';
import LoginButton from './LoginButton';
import Profile from './Profile';
import LogoutButton from './LogoutButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginButton></LoginButton>
        <Profile></Profile>
        <LogoutButton></LogoutButton>
      </header>
    </div>
  );
}

export default App;
