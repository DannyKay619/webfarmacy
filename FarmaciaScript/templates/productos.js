const productos = [];

const categorias = [
  
  { 
    nombre: "Medicamentos",
    imagen: "https://www.auladelafarmacia.com/wp-content/uploads/2022/09/medicamentos-1.jpg",
    enlace: "medicamentos.html"
  },

  { 
    nombre: "Primeros auxilios",
    imagen: "https://adrenalina.co/901/botiquin-tipo-maletin-mediano-de-primeros-auxilios-incluye-dotacion-health-solution.jpg", 
    enlace: "auxilios.html"
  },
  { 
    nombre: "Equipo médico",
    imagen: "https://previews.123rf.com/images/loveluck/loveluck1711/loveluck171101039/89482787-medicines-with-medical-equipments.jpg", 
    enlace: "medico.html"
  }
 
];

const contenedor = document.getElementById("catalogo-amplio");

categorias.forEach((categoria) => {
  const card = document.createElement("div");
  card.classList.add("producto");

  card.innerHTML = `
  <img src="${categoria.imagen}" alt="${categoria.nombre}" />
  <div class="producto-info">
    <h3>${categoria.nombre}</h3>
    <a class="boton" href="${categoria.enlace}">Quiero ver!</a>
    </div>
  `;
  contenedor.appendChild(card);
});