import './Header.css';
import Title from '../Title/Title';
import ResetBox from '../ResetBox/ResetBox';



const Header = ({ setResetState }) => {

    return (
        <section className="header-section">
            <Title />
            <ResetBox setResetState={setResetState}/>
        </section>
    );
};

export default Header;