import './Button.css';

const Button = ({ title, onSubmit, extraClass }) => {

    return (
        <button onClick={onSubmit} className={`btn ${extraClass}`}>{title}</button>
    );
};

export default Button;
