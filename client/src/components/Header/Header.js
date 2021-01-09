import './Header.css';
import UserForm from '../UserForm/UserForm';
import Title from '../Title/Title';
import ResetBox from '../ResetBox/ResetBox';



const Header = ({ onSetUsers }) => {

    return (
        <div>
            <UserForm  onSetUsers={onSetUsers}/>
            <Title />
            <ResetBox />
        </div>
    );
};

export default Header;