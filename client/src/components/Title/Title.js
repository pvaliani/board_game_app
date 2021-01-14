import './Title.css';
import logo from '../../static/img/CheckersLogo.png';

const Title = () => {

    return (
        <div className="game-title"> 
            <img className="logo-png" src={logo} />
        </div>
    );
};

export default Title;