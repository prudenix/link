import './css/header.css';
import Account from './components/Account';
import Brand from './components/Brand';
import Options from './components/Options';

function Header() {
    return (
        <header>
            <Brand />
            <Options />
            <Account />
        </header>
    );
}

export default Header;
