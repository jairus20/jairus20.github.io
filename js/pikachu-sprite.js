(function() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/pikachu';
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const spriteUrl = data.sprites.front_default;
          // Selecciona todas las imágenes que tengan "pikachu.png" en su atributo src
          const images = document.querySelectorAll('img');
          images.forEach(img => {
              if(img.src.includes('pikachu.png')) {
                  img.src = spriteUrl;
              }
          });
      })
      .catch(error => console.error('Error al obtener los datos de Pikachu:', error));
})();