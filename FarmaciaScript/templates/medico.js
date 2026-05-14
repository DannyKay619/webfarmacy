const productosMedico = [
{
  nombre: "Tensiometro",
  descripcion: "Para medir la presión arterial",
  imagen: "https://ortopedicosfuturoco.vtexassets.com/arquivos/ids/167123-800-auto?v=638524376376770000&width=800&height=auto&aspect=true",
  precio: "130.000"
},

{
  nombre: "Termometros",
  descripcion: "sirve para medir temperatura corporal",
  imagen: "https://locatelcolombia.vtexassets.com/arquivos/ids/229642/7707228360475-_1_GASA-ALFASAFE-ESTERIL-TEJIDA-3X3-X-24UND.jpg?v=637317094466400000",
  precio: "10.000"
},
{
  nombre: "Jeringas.",
  descripcion: "Extraer fluidos",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0soo_ctVEwtsaLfl4r3OrCjobnLkz9v_h3Q&s",
  precio: "2.000"
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
const contenedor = document.getElementById("productos-medico");

productosMedico.forEach((p, i) => {
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
    const p = productosMedico[index];

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