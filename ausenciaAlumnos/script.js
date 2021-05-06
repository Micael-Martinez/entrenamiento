//?Hacer un sistema de registro de asistencias
//*Registrar alumnos presentes(P)
//*Registrar alumnos ausentes(A)
//*Pasados los 30 días, mostrar la situación final de todos los alumnos(Nro total de ausentes y presentes)
//!Máximo 10% de ausencias por semestre, ACLARAR si está DESAPROBADO.

let cantAlumnos = prompt("Cuantos alumnos son?");
let alumnosTotales = [];
let resultado = "";
for (let i = 0; i < cantAlumnos; i++) {
	alumnosTotales[i] = [prompt("Nombre del alumno: " + (i + 1)), 0]; //asignaando a un array, otro array de 2 elementos(0: Nombre, 1: cantidad de asistencias)
}
const tomarAsistencia = (nombre, posicionArray) => {
	//Si me da el nombre, lo puedo buscar por indexOf
	let presencia = prompt(nombre);
	// if (presencia.includes(["p", "P"])) alumnosTotales[posicionArray][1]++;
	if (presencia == "p" || presencia == "P") {
		alumnosTotales[posicionArray][1]++;
	}
};

//Tomando asistencias los 30 días
for (i = 0; i < 5; i++) {
	for (alumno in alumnosTotales) {
		//in da el índice, of da el valor
		tomarAsistencia(alumnosTotales[alumno][0], alumno); //[Primer argumento es el nombre, segundo es la posición
	}
}
for (alumno in alumnosTotales) {
	resultado += `${alumnosTotales[alumno][0]}:<br>
    Presentes: ${alumnosTotales[alumno][1]}<br>
    Ausencias: ${30 - alumnosTotales[alumno][1]}
    `;
	if (30 - alumnosTotales[alumno][1] > 18) {
		resultado += "<b style='color: red'> DESAPROBADO POR INASISTENCIAS</b><br><br>";
	} else {
		resultado += `<br><br>`;
	}
}

function renderizar() {
	let contenedor = document.createElement("div");
	contenedor.setAttribute("id", "rancio");
	let parrafo = document.createElement("p");
	parrafo.innerHTML = resultado;
	contenedor.appendChild(parrafo);
	document.body.appendChild(contenedor);

	let contenedorEl = document.getElementById("rancio");
	console.log(contenedorEl.textContent);
}
renderizar();
