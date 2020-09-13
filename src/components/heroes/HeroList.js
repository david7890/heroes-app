import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublishers'
import { HeroCard } from './HeroCard'
//props publisher
export const HeroList = ({publisher}) => {
    const heroes = getHeroesByPublisher(publisher)

    return (
        <div className="card-columns animate_animated animate_fadeIn">
            {
                heroes.map(hero =>(
                    <HeroCard 
                        key={hero.id}
                        //extrare todas las componentes del objeto
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
