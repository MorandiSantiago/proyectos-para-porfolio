const salida = document.getElementById('output');
const contenedor = document.getElementById('ejemplos');
async function iniciar() {
    try {
        const response = await fetch('ejemplos.json');
        if (!response.ok) throw new Error('No se encontró el catálogo.');
        const ejemplos = await response.json();
        function seleccionar(ejemplo, boton) {
            contenedor.querySelectorAll('button').forEach(control => control.setAttribute('aria-pressed', String(control === boton)));
            document.getElementById('titulo').textContent = ejemplo.title;
            document.getElementById('descripcion').textContent = ejemplo.description;
            const ruta = 'ejemplos/' + ejemplo.slug + '/index.html';
            salida.src = ruta;
            salida.title = ejemplo.title + ' · Ejemplo de aprendizaje';
            document.getElementById('abrir').href = ruta;
        }
        ejemplos.forEach((ejemplo, indice) => {
            const boton = document.createElement('button');
            boton.type = 'button'; boton.textContent = ejemplo.title;
            boton.setAttribute('aria-pressed', 'false');
            boton.setAttribute('aria-controls', 'output');
            boton.addEventListener('click', () => seleccionar(ejemplo, boton));
            contenedor.append(boton);
            if (indice === 0) seleccionar(ejemplo, boton);
        });
    } catch (error) {
        document.getElementById('titulo').textContent = 'No se pudieron cargar los ejemplos';
        document.getElementById('descripcion').textContent = 'Abrí el sitio mediante un servidor HTTP, como indica el README, y recargá la página.';
    }
}
iniciar();
