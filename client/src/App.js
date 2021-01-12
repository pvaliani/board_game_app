import './App.css';
import GameBox from './containers/GameBox/GameBox';
import { initSocket } from './socket.io/socket';

initSocket();

function App() {
  return (
    <GameBox />
  );
}

export default App;

