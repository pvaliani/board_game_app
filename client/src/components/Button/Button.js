import './Button.css';

const Button = ({ title, onSubmit }) => {

    return (
        <button onClick={onSubmit} className="btn">{title}</button>
    );
};

export default Button;
