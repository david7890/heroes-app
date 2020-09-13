const { heroes } = require("../data/heroes");

export const getHeroById = (id) =>{
    //find regresa el primero que encuentre
    return heroes.find(hero => hero.id === id)
}