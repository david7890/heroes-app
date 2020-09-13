import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
    return (
        <div className="container">
            <h1 className="mt-5">DC Screen</h1>
            <hr></hr>

            <HeroList publisher="DC Comics" />
        </div>
    )
}
