// table.js

// Importar la instancia de la aplicación Firebase
import { app } from "../components/signinup/firebase.js";
// Importa las funciones necesarias de Firebase Database
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

// Referencia a la base de datos
const database = getDatabase(app);
const datosRef = ref(database, "Plants");

// Cantidad de datos por página
const datosPorPagina = 50;
let paginaActual = 1;
let datosTotales = [];

// Función para mostrar los datos en la tabla
function mostrarDatos(datos) {
  const tbody = document.querySelector('#tablaDatos tbody');
  tbody.innerHTML = '';

  const inicio = (paginaActual - 1) * datosPorPagina;
  const fin = inicio + datosPorPagina;
  const datosPagina = datos.slice(inicio, fin);

  datosPagina.forEach(dato => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${dato.AirHum}</td>
      <td>${dato.AirTemp}</td>
      <td>${dato.K}</td>
      <td>${dato.N}</td>
      <td>${dato.P}</td>
      <td>${dato.Press}</td>
      <td>${dato.SoilHumi}</td>
      <td>${dato.SoilMoist}</td>
      <td>${dato.Status}</td>
      <td>${dato.Temp}</td>
      <td>${dato.Time}</td>
      <td>${dato.ph}</td>
      <td>${dato.rainfall}</td>
    `;
    tbody.appendChild(tr);
  });

  // Actualizar la paginación
  const paginacion = document.getElementById('paginacion');
  const totalPaginas = Math.ceil(datos.length / datosPorPagina);
  paginacion.innerHTML = '';

  for (let i = 1; i <= totalPaginas; i++) {
    const boton = document.createElement('button');
    boton.innerText = i;
    boton.addEventListener('click', () => {
      paginaActual = i;
      mostrarDatos(datosTotales);
    });
    paginacion.appendChild(boton);
  }
}

// Lógica para cargar los datos iniciales y mostrar la tabla
onValue(datosRef, snapshot => {
  const datos = [];
  snapshot.forEach(childSnapshot => {
    datos.push(childSnapshot.val());
  });
  mostrarDatos(datos);
}, error => {
  console.error('Error al cargar los datos:', error);
});

