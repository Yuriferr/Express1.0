const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_img');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let NumberPok = 1

async function fetchPokemon(pokemon){
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status === 200){
        const data = await APIResponse.json();
        return data;
    }

}

async function renderPokemon(pokemon){

    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if(data){
        pokemonImage.style.display = 'block'
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id + " -";
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    
        input.value = "";
        NumberPok = data.id;
    } else{
        pokemonName.innerHTML = 'Not Found :(';
        pokemonNumber.innerHTML = '';
        pokemonImage.style.display = 'none'
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderPokemon(input.value.toLowerCase());
});

btnPrev.addEventListener('click', () => {
    if(NumberPok > 1){
        NumberPok -= 1;
        renderPokemon(NumberPok);
    }
});

btnNext.addEventListener('click', () => {
    if(NumberPok < 905){
        NumberPok += 1;
        renderPokemon(NumberPok);
    }
});

renderPokemon(NumberPok);