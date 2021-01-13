import './Header.css';
import Title from '../Title/Title';
import ResetBox from '../ResetBox/ResetBox';




const Header = ({ onSetUsers }) => {

    return (
        <section className="header-section">
            <Title />
            <ResetBox />
        </section>
    );
};

export default Header;