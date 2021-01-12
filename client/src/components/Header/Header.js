import './Header.css';
import UserForm from '../UserForm/UserForm';
import Title from '../Title/Title';
import ResetBox from '../ResetBox/ResetBox';



const Header = ({ onSetUsers, setResetState }) => {

    return (
        <section className="header-section">
            <UserForm  onSetUsers={onSetUsers}/>
            <Title />
            <ResetBox setResetState={setResetState}/>
        </section>
    );
};

export default Header;