
// define buttons, input line
var btn = document.getElementsByTagName("button")[0];
var input = document.getElementById("random");
var rand_btn = document.getElementById("random");
const pokemon_html = document.querySelector('.pokemon')
var betbtn = document.getElementById("betbtn")




const SearchPokemon = (api_obj) => {
	
	const {url, type, name} = api_obj //destructured object
	const api_url = `${url}${type}/${name}` //URL string

	fetch(api_url)
		.then( (raw_data) => raw_data.json()) 
		.then( (data) => changeHtml(data))
		.catch((err) => { //if some error happens, it shows the following message
			pokemon_html.innerHTML = 
			  `<h1> Some Error Occured.. Please revise your code! </h1>`;
		})
    
	const changeHtml = (data) => {
		console.log(data);
		const pokemonSprite = data.sprites.front_default;
        const pokemonName = data.name;
        document.getElementById("radbut2").innerHTML = pokemonName;
        const imgElement = document.getElementById("pokemonSprite")
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        
	}
    
}

const search_value = getRandomInt(1,897); //gets random integer between min and max of Pokemon IDs
SearchPokemon(MakeUrl(search_value)); //uses gotten integer as Pokemon ID and search

/////////////////
function inputLength() { //checks if the input line input is not empty
	return input.value.length;
}

function MakeUrl(value) { //creates the URL using "value"
	const api_obj = {
				url: "https://pokeapi.co/api/v2/",
				type: "pokemon",
				name: value,
				}
	return api_obj;
}

function getRandomInt(min,max) { //creates random integer
  	var rand_int= Math.floor(Math.random() * (max - min) + min);
  	console.log(rand_int);
  	return rand_int;
}

function P_Randomize() { 
	const search_value = getRandomInt(1,897); //gets random integer between min and max of Pokemon IDs
	SearchPokemon(MakeUrl(search_value)); //uses gotten integer as Pokemon ID and search
}


function SearchAfterClick(event) {
	if (inputLength() > 0) {
		SearchPokemon(MakeUrl(input.value)); //search Pokemon by using inputted value
	}	
}

function SearchAfterKeypress(event) {
	if (inputLength()> 0 && event.keyCode === 13) { //checks the Enter keyboard command
		SearchPokemon(MakeUrl(input.value)); //search Pokemon by using inputted value
	}
}


betbtn.addEventListener("click", P_Randomize);
//////////////////////