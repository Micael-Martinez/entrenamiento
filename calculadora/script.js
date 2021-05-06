//? Calculadora que incluya: Suma, resta, multiplicación, división

alert("Que operación deseas realizar?");
let operacion = prompt("1: Suma, 2: Resta, 3: Multiplicación, 4: División");

const pedirDatos = () => {
	let numero1 = prompt("Primer numero:");
	let numero2 = prompt("Segundo numero:");
	return [numero1, numero2];
};

const sumar = () => {
	const [numero1, numero2] = pedirDatos();

	let resultado = parseInt(numero1) + parseInt(numero2);
	//Lo parseo porque prompt retorna string y parseInt me lo convierte a entero

	alert(`Tu resultado es: ${resultado}`);
	console.log(`El resultado es:${resultado} `);
};

const restar = () => {
	const [numero1, numero2] = pedirDatos();

	let resultado = parseInt(numero1) - parseInt(numero2);

	alert(`Tu resultado es: ${resultado}`);
	console.log(`El resultado es:${resultado}`);
};

const multiplicar = () => {
	const [numero1, numero2] = pedirDatos();
	let resultado = parseInt(numero1) * parseInt(numero2);
	alert(`Tu resultado es: ${resultado}`);
};

const dividir = () => {
	const [numero1, numero2] = pedirDatos();
	let resultado = parseInt(numero1) / parseInt(numero2);
	alert(`Tu resultado es: ${resultado}`);
};

switch (operacion) {
	case "1":
		sumar();
		break;

	case "2":
		restar();
		break;

	case "3":
		multiplicar();
		break;

	case "4":
		dividir();
		break;

	default:
		alert("No es un operador");
}
