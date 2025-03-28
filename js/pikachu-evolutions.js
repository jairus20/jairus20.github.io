(function() {
    // Nombres de los Pokémon en la cadena evolutiva de Pikachu
    const evolutions = ['pichu', 'pikachu', 'raichu'];
    const evolutionContainer = document.querySelector('#pikachuEvolutions');

    evolutions.forEach(pokemon => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(response => response.json())
            .then(data => {
                const img = document.createElement('img');
                img.src = data.sprites.front_default;
                img.alt = pokemon;
                img.style.width = '120px';
                img.style.margin = '0 10px';
                evolutionContainer.appendChild(img);
            })
            .catch(error => console.error('Error fetching data for', pokemon, error));
    });
})();