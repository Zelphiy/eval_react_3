import './Element.css'
import { Link } from 'react-router';

export default function Element({element}) {
    return (
        <Link to={`/items/${element.imdbID}`}>
            <div className='img'>
                <img src={element.Poster} alt="" />
            </div>
            <div className='title'>
                {element.Title}
            </div>
        </Link>
    );
}