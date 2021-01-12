import Button from '../Button/Button';
import './ResetBox.css';

const ResetBox = ({setResetState}) => {


    const resetStateHandler = () => {
        setResetState("true")
    };
    

    return (
        <div className="reset-box">
            <Button onSubmit={resetStateHandler} title="Reset"/>
        </div>
    );
};

export default ResetBox;