import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div className="container">
            <h1 className="mt-5">Marvel Screen</h1>
            <hr></hr>
            <HeroList publisher="Marvel Comics" />
        </div>
    )
}
