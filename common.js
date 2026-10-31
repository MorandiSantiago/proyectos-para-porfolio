// Los enlaces de los ejercicios son controles visuales y no navegan.
document.querySelectorAll('a[href="#"]').forEach(enlace => enlace.addEventListener('click', event => event.preventDefault()));
document.querySelectorAll('button:not([type])').forEach(boton => { boton.type = 'button'; });
if (window.top === window.self) {
    const volver = document.createElement('a');
    volver.href = '../../index.html'; volver.className = 'volver-laboratorio';
    volver.textContent = 'Volver al laboratorio · Práctica visual';
    document.body.append(volver);
}

document.querySelectorAll('[data-seleccionar]').forEach((boton, indice) => boton.addEventListener('click', () => {
    document.getElementById('seleccion').textContent = 'Tarjeta ' + (indice + 1) + ' seleccionada. Práctica visual.';
}));
