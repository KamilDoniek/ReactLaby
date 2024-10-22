import PersonalInfo from '../components/PersonalInfo'
import { useParams } from 'react-router-dom';
import {data} from '../data/module-data'

function Lab2Page( {names} ) {
    const { id } = useParams(); 
    if (!id) {
        return <h2>Brak identyfikatora osoby.</h2>;
    }
    
    const person = names.find(name => name.id === parseInt(id));
    if (!person) {
        return <h2>Nie znaleziono osoby o tym identyfikatorze.</h2>;
    }
    return(
        <>
            <h1>Laboratorium 2</h1>
            <ul>
                <PersonalInfo {...person} />
            </ul> 
        </>
    )
}

export default Lab2Page