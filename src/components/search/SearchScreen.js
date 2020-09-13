import React, { useMemo } from 'react'
import queryString from 'query-string'
import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard'
import { useForm } from '../../hooks/useForm'
import { useLocation } from 'react-router-dom'
import { getHeroesByName } from '../../selectors/getHeroesByName'

export const SearchScreen = ({history}) => {

    const location = useLocation()
    //extraer query la buqueda 
    const {q = ''} = queryString.parse(location.search)

    const [formValues, handleInputChange, reset] = useForm({
        searchName: q
    })

    const {searchName} = formValues

    //solo se dispara la busqueda si el query cambio
    const heroesFiltered = useMemo(() => getHeroesByName(searchName), [q])

    const handleSearch = (e) =>{
        e.preventDefault()
        //agregar texto de busqueda  query string al url
        history.push(`?q=${searchName}`)
    }
    return (
        <div className="container">
            <h1 className="mt-5">Search Screen</h1>
            <hr></hr>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr></hr>
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            placeholder="Find your hero" 
                            className="form-control" 
                            name="searchName" 
                            value={searchName}
                            onChange={handleInputChange}
                            autoComplete="off"
                        >
                        </input>
                        <button type="submit" className="btn mt-2 btn-block btn-outline-primary">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7"> 
                    <h4>Results</h4>
                    <hr></hr>

                    { (q==='') && <div className="alert alert-info">
                            Search a hero
                        </div>}

                    { 
                        (q !=='' && heroesFiltered.length === 0)
                            &&
                            <div className="alert alert-danger">
                                There is no a hero with {q}
                            </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard className="m-3" key={hero.id} {...hero}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
