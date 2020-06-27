import React, { useState, useEffect } from 'react';

function App() {
	const [counter, setCounter] = useState(0);
	// Hook de efecto
	// De forma predeterminada se ejecuta en cada renderizado
	// Hay dos tipos de efectos secundarios
	// los que se limpian y los que no
	// Ejemplo de efecto que se ejecuta en cada renderizado
	useEffect(() => {
		document.title = `Haz dado cick ${counter} veces`;
	});
	// Efecto que necesita limpiarse
	// Para limpiar un efecto se devuelve una función que realiza la limpieza
	// Esta función por defecto se ejecuta antes de ejecutar el efecto nuevamente pues necesita eliminar el efecto anterior
	// Un efecto se limpia para evitar posibles bugs
	useEffect(() => {
		function trackScroll() {
			console.log(window.scrollY);
		}
		window.addEventListener('scroll', trackScroll);
		return () => window.removeEventListener('scroll', trackScroll);
	});
	// Para que un efecto no se ejecute en cada renderizado se le puede pasar un segundo argumento opcional el cual es un arreglo
	// El arreglo especificará los valores que deben cambiar para que el efecto se ejecute nuevamente
	// Adicionalmente si el efecto debe ejecutarse solo una vez el arreglo debe estar vacío
	return (
		<div className="app">
			<button onClick={() => setCounter(counter + 1)}>Da click</button>
		</div>
	);
}

export default App;
