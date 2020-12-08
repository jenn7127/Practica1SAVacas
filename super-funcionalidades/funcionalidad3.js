/**
 * Super funcionalidad 2 - devuelve si el numero es par o no
 * @param value
 * @returns {boolean}
 */
function getIsPrimo(numero){
	if (numero == 0 || numero == 1) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}


module.exports = getIsPrimo;
