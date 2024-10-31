import {getHeroById, getHeroByOwner} from './bases/07-import';



const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroById(2);
        console.log(heroe);
        resolve(heroe);
    }, 2000);
});

promesa.then((heroe) => {
    console.log('heroe', heroe);
})