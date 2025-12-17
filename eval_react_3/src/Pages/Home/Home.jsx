import './Home.css'
import Input from '../../Components/Input.jsx'
import { useRef } from 'react';

export default function Home() {
    const submitRef = useRef();

    const sendForm = () => {
        console.log('Formulaire envoyé !');
    }

    return (
        <div className='home'>
            <Input label="Email" type="text" id="email" name="email" format={/.+@.+\..+/} errorMsg={'Veuillez entrer un email valide'} submit={submitRef}/>
            <Input label="Message" type="text" id="message" name="message" format={/.{3,}/} />
            <button onClick={sendForm} ref={submitRef}>Envoyer</button>
        </div>
    );
}