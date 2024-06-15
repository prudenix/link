import './css/brand.css';
import Image from 'next/image';

function Brand() {
    return (
        <div className='brand'>
            <Image
                src={'./images/link.svg'}
                width={20}
                height={20}
                alt='Link Logo'
            />
            <p>Link</p>
        </div>
    );
}

export default Brand;
