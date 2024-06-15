import './css/link.css';

interface link {
    url: string;
    name: string;
}

function Link({ url, name }: link) {
    return (
        <a
            className='nav-link'
            href={url}
        >
            {name}
        </a>
    );
}

export default Link;
