const button = document.querySelector("#btn");
let input = document.querySelector(".input");
let outputSpace = document.querySelector(".text-area-result");

button.addEventListener("click", getApi);

function getApi(item){
    item.preventDefault();

    let fullUri = 'https://www.swapi.tech/api/people/?name=' + input.value;

    fetch(fullUri)
    .then(res => res.json())
    .then(data =>
    {
        outputSpace.innerHTML = 
        `Target: ${data.result[0].properties.name}\n
        Height: ${data.result[0].properties.height}\n
        Mass: ${data.result[0].properties.mass}\n
        Gender: ${data.result[0].properties.gender}\n
        Hair colour: ${data.result[0].properties.hair_color}\n`;
    })
    .catch(err => console.log(err))
}