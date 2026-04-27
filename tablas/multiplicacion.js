function generarTablas() {
  let contenedor = document.getElementById("contenedorTabla");
  let input = document.getElementById("numeroInput");
  let numero = parseInt(input.value);

  if (isNaN(numero) || numero < 1 || numero > 100) {
    contenedor.innerHTML = `
      <div class="msg-error" style="padding: 40px; text-align: center; color: #ff4444;">
        <p class="error-titulo" style="font-family: 'Orbitron';">ERROR DE TELEMETRÍA</p>
        <p class="error-sub">Ingresa un valor entre 1 y 100 para calcular la órbita.</p>
      </div>
    `;
    return;
  }

  let contenido = `
    <div class="tabla-header">
      <span>BASE</span>
      <span>VINCULO</span>
      <span>ÓRBITA</span>
      <span style="color: var(--neon-blue)">RESULTADO</span>
    </div>
  `;

  for (let i = 1; i <= 10; i++) {
    // Agregamos una pequeña animación de entrada con delay
    contenido += `
      <div class="fila" style="animation: slideIn 0.3s forwards ${i * 0.05}s; opacity: 0;">
        <span class="num">${numero}</span>
        <span class="op">×</span>
        <span class="num">${i}</span>
        <span class="result">${numero * i}</span>
      </div>
    `;
  }

  contenedor.innerHTML = contenido;
}

// Añade este efecto al CSS para las filas
// @keyframes slideIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }