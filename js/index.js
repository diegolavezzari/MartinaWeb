// ===== JS de index.html (bienvenida) =====

// Año en el pie: se actualiza solo
const anio = document.getElementById('anio');
anio.textContent = new Date().getFullYear();

// Simulador: al tocar "Calcular", muestra cómo queda la meta
const boton = document.getElementById('btn-simular');

boton.addEventListener('click', function () {
    // .value es texto: Number() lo pasa a número
    const monto = Number(document.getElementById('monto').value);

    // Meta de ejemplo: $450.000 ahorrados de $750.000
    const nuevo = Math.round((450000 - monto) / 750000 * 100);

    document.getElementById('resultado').textContent = 'Tu meta bajaría al ' + nuevo + '%';
});
