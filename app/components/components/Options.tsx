import Link from './components/Link';
import './css/options.css';

function Options() {
    return (
        <nav className='options'>
            <Link
                url='/'
                name='Docs'
            />
            <Link
                url='/'
                name='Support'
            />
        </nav>
    );
}

export default Options;
