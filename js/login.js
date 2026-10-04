// ===== JS de login.html =====

const boton = document.getElementById('btn-ingresar');

boton.addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // || significa "o": si el email está vacío O la contraseña está vacía
    if (email === '' || password === '') {
        document.getElementById('mensaje').textContent = 'Completá tu email y contraseña';
    } else {
        // Login simulado: no hay base de datos, así que pasamos directo al inicio
        window.location.href = 'inicio.html';
    }
});
