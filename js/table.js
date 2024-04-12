// app.js

// Importar la instancia de la aplicación Firebase
import { app } from "/components/signinup/firebase.js";
// Importa las funciones necesarias de Firebase Database
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";



// Referencia a la base de datos
const database = getDatabase(app);
const datosRef = ref(database, "Plants");

// Función para mostrar los datos en la tabla
function mostrarDatos(datos) {
  const tbody = document.querySelector('#tablaDatos tbody');
  tbody.innerHTML = '';

  datos.forEach(dato => {
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
}

console.log("Base de datos obtenida correctamente:", database);
// Lógica para cargar los datos iniciales y mostrar la tabla
datosRef.once('value')
  .then(snapshot => {
    const datos = [];
    snapshot.forEach(childSnapshot => {
      datos.push(childSnapshot.val());
    });
    mostrarDatos(datos);
  })
  .catch(error => {
    console.error('Error al cargar los datos:', error);
  });

