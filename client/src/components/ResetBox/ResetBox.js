import resetLogo from '../../static/img/CheckersHeader.png';
import './ResetBox.css';

const ResetBox = ({setResetState}) => {


    const resetStateHandler = () => {
        setResetState("true")
    };
    

    return (
        <div className="reset-box">
            <img className="logo-reset" src={resetLogo} onSubmit={resetStateHandler}/>
            <div>Reset Game</div>
        </div>
    );
};

export default ResetBox;