import PersonalInfo from '../components/PersonalInfo'
import {data} from '../data/module-data'

 function Lab1Page( {names} ) {
    return(
        <>
            {console.log(names)}
            <h1>Laboratorium 1</h1>
            <h3>Lista imion:</h3>
            <ul>
                {names.map(( o ) => <PersonalInfo {...o}/>)}
            </ul>
        </>
    )
}

export default Lab1Page