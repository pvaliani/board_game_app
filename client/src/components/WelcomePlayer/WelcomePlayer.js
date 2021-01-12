import { useHistory, useLocation } from 'react-router-dom';
import './WelcomePlayer.css';
import Button from '../Button/Button';

const WelcomePlayer = () => {
    const history = useHistory();
    const location = useLocation();
    const remotelyHandler = () => {
        history.push('/multi-remote', location.state)
    };

    return (
        <div>
            <div>Welcome {location.state.userName}</div>
            <Button title="Multiplayer (locally)" />
            <Button title="Multiplayer (remotely)" onSubmit={remotelyHandler} />
        </div>
    );
};

export default WelcomePlayer;