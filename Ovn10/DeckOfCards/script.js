const button = document.querySelector("#btn");
let outputSpace = document.querySelector(".result-div");

button.addEventListener("click", getApi);

function getApi(item){
    item.preventDefault();

    let fullUri = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
    const imageDiv = document.createElement('img');

    fetch(fullUri)
    .then(res => res.json())
    .then(data =>
    {
        imageDiv.setAttribute("src", `${data.cards[0].image}`);
        imageDiv.innerHTML = '';
        outputSpace.appendChild(imageDiv);
    })
    .catch(err => console.log(err))
}