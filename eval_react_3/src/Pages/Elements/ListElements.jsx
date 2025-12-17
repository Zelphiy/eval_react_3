import { useEffect, useRef, useState } from 'react';
import './ListElements.css'
import Input from '../../Components/Input';
import Pagination from '../../Components/Pagination';
import Element from './Element';

export default function ListElements() {
    const [elements, setElements] = useState([]);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState();
    const searchButtonRef = useRef();

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=8218ecf&s=star`, {
            method: "POST"
        })
            .then(result => result.json())
            .then(data => {
                setElements(data.Search)
        });
    }, [setElements,page])

    return (
        <div className='list-elements-page'>
            <Input type="text" id='searchTerm' name='searchTerm' onKeyUp={value => {setSearchTerm(value);}} format={/.{3,}/} errorMsg={'veuillez entrer 3 lettres'} submitRef={searchButtonRef} />
            <div>
                {elements.map(element => <Element element={element} />)}
            </div>
        </div>
    );
}   