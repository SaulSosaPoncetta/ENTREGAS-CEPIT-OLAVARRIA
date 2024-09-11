let crearCard = (persona) => {
    let card = document.createElement("div");
    card.classList.add("card-persona");
    let title = document.createElement("h2");
    title.innerHTML = '${persona.nombre} ${persona.apellido}';
    card.appendChild(title);
};


let listaDatos = document.createElement("ul");
for (key in persona) {
    if(key !== "nombre" && key !== "apellido") {
        let listItem = document.createElement("li");
        listItem.innerHTML = '${key}: ${persona[key]}';
        listaDatos.appendChild(listItem);
    }
}
card.appendChild(listaDatos);

window.addEventListener("load",() => {
    for(let i=0; i < personas.length; i++) {
        crearCard(personas[i]);
    }
});

window.addEventListener("load", () => {
    let processedData = JSON.parse(data)
    for (let i = 0; i < processedData.personas.length; i++) {
        crearCard(processedData.personas[i]);
    }
});