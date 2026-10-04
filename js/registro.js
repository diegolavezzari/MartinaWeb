// ===== JS de registro.html =====

const boton = document.getElementById('btn-crear');

boton.addEventListener('click', function () {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmar = document.getElementById('confirmar').value;
    const mensaje = document.getElementById('mensaje');

    if (nombre === '' || email === '' || password === '') {
        // Falta algún dato
        mensaje.textContent = 'Completá todos los campos';
    } else if (password !== confirmar) {
        // !== significa "distinto de"
        mensaje.textContent = 'Las contraseñas no coinciden';
    } else {
        // Por ahora no se guarda nada: pasamos directo al inicio.
        // En la etapa 2 acá se guarda el nombre con localStorage.
        window.location.href = 'inicio.html';
    }
});
