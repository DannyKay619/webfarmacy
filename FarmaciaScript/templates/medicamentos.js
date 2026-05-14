const productosMedicamentos = [
{
  nombre: "Dolex",
  descripcion: "Para dolores",
  imagen: "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/es_CO/dolex-products/dolex%20base/dolex-active-gel-588.png?auto=format",
  precio: "10.000"
},

{
  nombre: "Carbamazepina",
  descripcion: "Controla la epilepsia",
  imagen: "https://santarosadroguerias.vtexassets.com/arquivos/ids/159400-800-auto?v=637732933686500000&width=800&height=auto&aspect=true",
  precio: "5.000"
},
{
  nombre: "paracetamol 500 mg",
  descripcion: "Sedante",
  imagen: "https://farmaciauniversalpe.vtexassets.com/arquivos/ids/156423/00908_1.jpg?v=638417260707800000",
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
const contenedor = document.getElementById("productos-medicamentos");

productosMedicamentos.forEach((p, i) => {
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
    const p = productosMedicamentos[index];

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