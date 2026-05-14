const productosAuxilios = [
{
  nombre: "Solución salina",
  descripcion: "Solución estéril para limpieza de heridas",
  imagen: "https://www.caldasmedicas.com/wp-content/uploads/2022/10/IMG_SOLUCIONSALINAX500.jpg",
  precio: "30.000"
},

{
  nombre: "Gasa estéril",
  descripcion: "sirve para cubrir y proteger heridas",
  imagen: "https://locatelcolombia.vtexassets.com/arquivos/ids/229642/7707228360475-_1_GASA-ALFASAFE-ESTERIL-TEJIDA-3X3-X-24UND.jpg?v=637317094466400000",
  precio: "10.000"
},
{
  nombre: "Tijeras universales.",
  descripcion: "utiles para todo",
  imagen: "https://www.thundra.co/wp-content/uploads/2016/02/EMT-mini.jpg",
  precio: "50.000"
}
];
// Lista de productos seleccionados
const seleccionados = [];

// Crear modal
const modal = document.createElement("div");
modal.id = "modal";
modal.classList.add("modal");
document.body.appendChild(modal);

// Mostrar productos
const contenedor = document.getElementById("productos-auxilios");

productosAuxilios.forEach((p, i) => {
  const card = document.createElement("div");
  card.classList.add("producto");

  card.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}" />
    <div class="producto-info">
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>
      <strong>Precio: $${p.precio}</strong><br>
      <button class="boton ver-mas" data-index="${i}">Ver más</button>

    </div>
  `;

  contenedor.appendChild(card);
});


// Manejador de eventos general
document.addEventListener("click", (e) => {
  // Agregar a lista
  if (e.target.classList.contains("agregar")) {
    const nombre = e.target.dataset.nombre;
    if (!seleccionados.includes(nombre)) {
      seleccionados.push(nombre);
      alert(`${nombre} agregado a la lista`);
    }
  }
  // Mostrar el modal con la info completa
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("ver-mas")) 
    {
    const index = e.target.dataset.index;
    const p = productos[index];

    modal.innerHTML = `
      <div class="modal-content">
        <span class="cerrar">&times;</span>
        <img src="${p.imagen}" alt="${p.nombre}" />
        <h2>${p.nombre}</h2>
        <p>${p.descripcion}</p>
        <strong>Precio: $${p.precio}</strong><br><br>
       
    `;
    modal.style.display = "flex";

    document.querySelector(".cerrar").onclick = () => {
      modal.style.display = "none";
    };
  }
});

  // Ver más
  if (e.target.classList.contains("ver-mas")) {
    const index = e.target.dataset.index;
    const p = productosAuxilios[index];

    modal.innerHTML = `
      <div class="modal-content">
        <span class="cerrar">&times;</span>
        <img src="${p.imagen}" alt="${p.nombre}" />
        <h2>${p.nombre}</h2>
        <p>${p.descripcion}</p>
        <strong>Precio: $${p.precio}</strong><br><br>
        
      </div>
    `;
    modal.style.display = "flex";

    document.querySelector(".cerrar").onclick = () => {
      modal.style.display = "none";
    };
  }

  
});