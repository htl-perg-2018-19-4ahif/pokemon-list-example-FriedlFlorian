(async function() {
    let pokemon = sessionStorage.getItem('pokemon');

    const pokeDetails = await $.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);

    $('#name')[0].innerHTML = `${pokeDetails.name}`;
    $('#image').attr('src', `${pokeDetails.sprites.front_default}`);
    $('#weight')[0].innerHTML = `Weight: ${pokeDetails.weight}`;
    
})();