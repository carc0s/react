import {heroes} from '../data/heroes';


//heroes.forEach((hero) => {
   // console.log(hero);
//});


const getHeroById = (id) => {
    return heroes.find((hero) => hero.id === id);
};

//console.log(getHeroById(2));


const getHeroByOwner = (owner) => {
    return heroes.filter((hero) => hero.owner === owner);
};

//console.log(getHeroByOwner('DC'));

export {
    getHeroById,
    getHeroByOwner
};