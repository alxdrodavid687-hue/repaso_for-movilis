function generarTablas() {
  const contenedor = document.getElementById("contenedorTabla");
  const input = document.getElementById("numeroInput");
  const numero = parseInt(input.value);

  // 1. Validación de entrada
  if (isNaN(numero) || numero < 1 || numero > 100) {
    contenedor.innerHTML = `
      <div class="msg-error" style="padding: 40px; text-align: center; color: #ff4444;">
        <p style="font-family: 'Orbitron'; font-weight: bold;">⚠️ ERROR DE TELEMETRÍA</p>
        <p>Ingresa un número válido entre 1 y 100.</p>
      </div>
    `;
    return;
  }

  // 2. Encabezado de la tabla
  let contenido = `
    <div class="tabla-header">
      <span>BASE</span>
      <span>POR</span>
      <span>ÓRBITA</span>
      <span style="color: var(--neon-blue)">TU RESULTADO</span>
    </div>
  `;

  // 3. Generar filas del 1 al 12
  for (let i = 1; i <= 12; i++) {
    // Usamos 'delay' para que aparezcan una tras otra (efecto barrido)
    const delay = i * 0.05; 
    
    contenido += `
      <div class="fila fila-animada" style="animation-delay: ${delay}s; opacity: 0;">
        <span class="num">${numero}</span>
        <span class="op">×</span>
        <span class="num">${i}</span>
        <span class="result">${numero * i}</span>
      </div>
    `;
  }

  // 4. Inyectar en el DOM
  contenedor.innerHTML = contenido;
}