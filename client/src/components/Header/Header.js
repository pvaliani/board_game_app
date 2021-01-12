import './Header.css';
import Title from '../Title/Title';
import ResetBox from '../ResetBox/ResetBox';


const Header = () => {

    return (
        <section className="header-section">
            <Title />
            <ResetBox />
        </section>
    );
};

export default Header;