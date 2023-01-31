


const animales = [
    { id: 1, nombre: 'coyote' },
    { id: 2, nombre: 'marrano' },
    { id: 3, nombre: 'lion' },

]
const getAnimaById = (id) => {
    return animales.find(animal => animal.id === id)

}

animales.map((valor, index) => {
    return valor.edad = index * 2
})

console.log(animales)
// const { nombre } = getAnimaById(2)

// console.log(nombre)

const numbers = [1, 4, 9,34,47];
numbers.map(function (num) {
    return Math.sqrt(num);
});
const buscar = "marrano"
//solo regresa un elemento 
const encontrado =animales.find((animal) => {
    console.log("Itera:"+animal.nombre)
    if (animal.nombre === buscar) {
        return animal
    }
})


const resultadoFiltro = animales.filter((animal) => {
    return animal.nombre === buscar
    
} )
var doubles = numbers.map(function(x) {
   return x * 2;
});


console.log(encontrado)