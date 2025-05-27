let paises = [];

fetch("https://restcountries.com/v3.1/all")
  .then(respuesta => respuesta.json())
  .then(data => {
    paises = data;
    mostrarPaises(paises);
  });

const inputBuscar = document.getElementById("buscar");
const divResultado = document.getElementById("resultado");

inputBuscar.addEventListener("input", () => {
  const texto = inputBuscar.value.toLowerCase();
  const filtrados = paises.filter(pais => 
    pais.name.official.toLowerCase().includes(texto)
  );
  mostrarPaises(filtrados);
});

function mostrarPaises(lista) {
  divResultado.innerHTML = "";
  lista.forEach(pais => {
    const div = document.createElement("div");
    div.classList.add("pais");

    div.innerHTML = `
      <h2>${pais.name.official}</h2>
      <img src="${pais.flags.png}" alt="Bandera de ${pais.name.official}">
      <p><strong>Región:</strong> ${pais.region}</p>
      <p><strong>Población:</strong> ${pais.population.toLocaleString()}</p>
    `;

    divResultado.appendChild(div);
  });
}
