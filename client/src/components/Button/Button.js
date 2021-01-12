import './Button.css';

const Button = ({ title, onSubmit }) => {

    return (
        <button onClick={onSubmit}>{title}</button>
    );
};

export default Button;
