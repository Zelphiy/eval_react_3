import { useParams, Link } from 'react-router';
import './ElementDetail.css'
import { useEffect, useState } from 'react';
import { SkipBack } from 'lucide-react'

export default function ElementDetail() {
    const {id} = useParams();
    const [element, setElement] = useState({});

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=8218ecf&i=${id}`)
        .then(result => result.json())
            .then(data => {
                setElement(data)
        });
    }, [])

    return (
        <div className='element-detail'>
            <Link to={'/items'}><SkipBack /></Link>
            <div className='header'>
                <img src={element.Poster} />
            </div>
            <div className='content'>
                {element.Title}
                <p>Sortis en {element.Year}</p>
                <p>{element.Plot}</p>
            </div>
        </div>
    );
}