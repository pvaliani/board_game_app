import './Header.css';
import UserForm from '../UserForm/UserForm';
import Title from '../Title/Title';
import ResetBox from '../ResetBox/ResetBox';
import BoardSounds from '../BoardSounds/BoardSounds';



const Header = ({ onSetUsers }) => {

    return (
        <section className="header-section">
            <UserForm  onSetUsers={onSetUsers}/>
            <Title />
            <ResetBox />
        </section>
    );
};

export default Header;