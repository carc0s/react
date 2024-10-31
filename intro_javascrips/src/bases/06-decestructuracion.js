//desestructuración de objetos


const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};


 const {nombre, edad, clave} = persona;

    console.log(nombre);
    console.log(edad);
    console.log(clave);


//desestructuración de objetos en argumentos de funciones

const retornaPersona = ({nombre, edad, rango = 'Capitán'}) => {
    console.log(nombre, edad, rango);
}


retornaPersona(persona);

//desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [p1, p2, p3] = personajes;

console.log(p1);

console.log(p2);

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();


console.log(letras, numeros);

//Tarea
//1. el primer valor del arr se llamará nombre
//2. se llamará setNombre
const useState = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}


const [nombre2, setNombre] = useState('Goku');


console.log(nombre2);
setNombre();

