import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = ({history}) => {
    //extraer heroID de la url con hook useParams
    const {heroeId} = useParams()
    //optimizacion si el heroe no cambia no vuelve a mostrar info
    const hero = useMemo( () => getHeroById(heroeId), [heroeId])
    //buscarlo si no encuentra redirige a pag marvel
    if( !hero){
        return <Redirect to="/" />
    }
    const handleReturn = () =>{
        //regresar ala pag anterior
        if(history.length <= 2 ){
            history.push('/')
        }
        history.goBack()
    }
    //desestructurar objeto
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    }= hero  

    return ( 
        <div className="container row mt-5">
            <div className="col-4">
                <img src={`./assets/heroes/${heroeId}.jpg`}
                    className="img-thumbnail animate_animated animate_fadeIn"
                    alt={superhero}
                />
            </div>

            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter Ego: </b> {alter_ego}</li>
                    <li className="list-group-item"> <b>Publisher: </b> {publisher} </li>
                    <li className="list-group-item"> <b>First appearence: </b> {first_appearance}</li>
                </ul>

                <h3>Characters</h3>
                <p>{characters}</p>

                <button className="btn btn-outline-info" onClick={handleReturn}>
                    Return
                </button>
            </div>
        </div>
    )
}
 