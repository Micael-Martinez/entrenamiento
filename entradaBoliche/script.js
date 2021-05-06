//?Crear un Boliche.
//*Dejar pasar solo a los mayor de edad
//*La 1er persona que entre despues de las 2AM, no paga.

let free = false;

const validarCliente = (time) => {
	let edad = prompt("Cuál es tu edad?");
	if (edad >= 18) {
		if (time >= 2 && time <= 7 && free == false) {
			alert("Podes pasar gratis porque sos la primer persona despues de las 2AM");
			free = true;
		} else {
			alert(`Son las ${time}:00hs y podes pasar, pero tenes que pagar la entrada`);
		}
	} else {
		alert("Amigo sos muy pequeño");
	}
};

validarCliente(23);
validarCliente(3);
validarCliente(7);
validarCliente(5);
validarCliente(4);
validarCliente(18);
