document.addEventListener("DOMContentLoaded", () => {

  // === 1. DATOS DE PRODUCTOS ===
  const productos = [
    { nombre: "Paracetamol 500mg", imagen: "https://farmaciauniversalpe.vtexassets.com/arquivos/ids/156423/00908_1.jpg?v=638417260707800000", descripcion: "Analgésico y antipirético de uso común.", precio: "$5.000" },
    { nombre: "Ibuprofeno 400mg", imagen: "https://laboratoriosifa.com/wp-content/uploads/Ibuprofeno-400-mg.jpg", descripcion: "Antiinflamatorio no esteroideo.", precio: "$7.500" },
    { nombre: "Alcohol Antiséptico", imagen: "https://lh3.googleusercontent.com/Gukc8_E8jCYdLZbb9O_6chy6WPWsFLK4mbTFHwaDgxAoMeIjQLKINBXUhqiFps20TaMPIngKeuZNZZcGg1ZVTGWJuPsdJm-GHuJLUJvQpVudaqzVpw", descripcion: "Desinfectante ideal para limpieza de heridas.", precio: "$4.000" }
  ];

  // === 2. MOSTRAR PRODUCTOS EN CATÁLOGO ===
  const catalogo = document.getElementById("catalogo");
  productos.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <div class="producto-info">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <p><strong>${p.precio}</strong></p>
        <button class="boton" data-nombre="${p.nombre}">Ver más</button>
      </div>
    `;
    catalogo.appendChild(div);
  });

  // === 3. MODAL DE PRODUCTOS ===
  const modalProducto = document.createElement("div");
  modalProducto.classList.add("modal");
  modalProducto.innerHTML = `
    <div class="modal-content">
      <span class="cerrar">&times;</span>
      <img id="modal-img" src="" alt="">
      <h3 id="modal-nombre"></h3>
      <p id="modal-descripcion"></p>
      <p id="modal-precio"></p>
    </div>
  `;
  document.body.appendChild(modalProducto);

  const cerrarModalProd = modalProducto.querySelector(".cerrar");
  const modalImg = document.getElementById("modal-img");
  const modalNombre = document.getElementById("modal-nombre");
  const modalDescripcion = document.getElementById("modal-descripcion");
  const modalPrecio = document.getElementById("modal-precio");

  document.querySelectorAll(".boton").forEach(btn => {
    btn.addEventListener("click", e => {
      const prod = productos.find(p => p.nombre === e.target.dataset.nombre);
      modalImg.src = prod.imagen;
      modalNombre.textContent = prod.nombre;
      modalDescripcion.textContent = prod.descripcion;
      modalPrecio.textContent = prod.precio;
      modalProducto.style.display = "flex";
    });
  });

  cerrarModalProd.addEventListener("click", () => modalProducto.style.display = "none");
  window.addEventListener("click", e => { if (e.target === modalProducto) modalProducto.style.display = "none"; });

  // === 4. LOGIN Y REGISTRO ===
  const modalLogin = document.getElementById("modalLogin");
  const btnLogin = document.getElementById("btn-login");
  const cerrarLogin = modalLogin.querySelector(".cerrar");
  const formLogin = document.getElementById("form-login");
  const formRegistro = document.getElementById("form-registro");
  const alternar = document.getElementById("alternarForm");
  const tituloModal = document.getElementById("tituloModal");
  const navLinks = document.querySelectorAll("nav a");

  // Al inicio, ocultar botones excepto el de login
  navLinks.forEach(link => link.style.display = "none");

  // Abrir modal de login
  btnLogin.addEventListener("click", () => modalLogin.style.display = "flex");
  cerrarLogin.addEventListener("click", () => modalLogin.style.display = "none");
  window.addEventListener("click", e => { if (e.target === modalLogin) modalLogin.style.display = "none"; });

  // Alternar entre login y registro
  alternar.addEventListener("click", () => {
    const esLogin = formLogin.style.display !== "none";
    formLogin.style.display = esLogin ? "none" : "block";
    formRegistro.style.display = esLogin ? "block" : "none";
    tituloModal.textContent = esLogin ? "Registrarse" : "Iniciar Sesión";
    alternar.textContent = esLogin
      ? "¿Ya tienes cuenta? Inicia sesión aquí"
      : "¿No tienes cuenta? Regístrate aquí";
  });

  // Guardar nuevo usuario
  formRegistro.addEventListener("submit", e => {
    e.preventDefault();
    const usuario = document.getElementById("nuevoUsuario").value.trim();
    const clave = document.getElementById("nuevaClave").value.trim();
    if (!usuario || !clave) return alert("Completa todos los campos");
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("clave", clave);
    alert("✅ Usuario registrado correctamente. Ahora inicia sesión.");
    formRegistro.style.display = "none";
    formLogin.style.display = "block";
    tituloModal.textContent = "Iniciar Sesión";
  });

  // Iniciar sesión
  formLogin.addEventListener("submit", e => {
    e.preventDefault();
    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("clave").value;
    if (user === localStorage.getItem("usuario") && pass === localStorage.getItem("clave")) {
      alert(`Bienvenido, ${user}!`);
      modalLogin.style.display = "none";
      btnLogin.style.display = "none";
      navLinks.forEach(link => link.style.display = "inline-block");
    } else {
      alert("❌ Usuario o contraseña incorrectos.");
    }
  });

});
