//simplifica lineas de codigo

const  variableQueNoCambia = function(nombre){
    return`hola,${nombre}`
}
const nombreDeVariable = (nombre) => {
    return `hola, ${nombre}`
}

const personajeDeReparto = {
    nombre1: "tio ben",
    mensajeConFuncionTradicional: function(mensaje){
        console.log(`${this.nombre1}`)
    },
    mensajeConFuncionFlecha: (mensaje)=>{
        console.log(`${this.nombre1} dice: ${mensaje}`)
    }
};

personajeDeReparto.mensajeConFuncionFlecha("cuidado con el duende verde");
personajeDeReparto.mensajeConFuncionTradicional("Un gran poder conlleva una gran responsabilidad");