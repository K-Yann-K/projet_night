    // Liaison entre l'animation et le chemin SVG
    const highlight = document.querySelector('.highlight');
    const path = document.querySelector('#blood-path');

    // Configuration de l'animation sur le chemin
    highlight.style.offsetPath = `path('${path.getAttribute('d')}')`;
    highlight.style.offsetDistance = '0%'; // Démarre à 0

// Liste des organes avec émoji et positions
const organs = [
    { emoji: '🧠', top: '50px', left: '250px' },   // Cerveau
    { emoji: '❤️', top: '75px', left: '290px' },   // Cœur   
    { emoji: '🫁', top: '180px', left: '260px' },   // Poumon
    // Ajoutez d'autres organes ici si nécessaire
  ];
  
  let currentOrgan = 0; // Organe initial (Cerveau)
  
  // Fonction pour changer l'organe
  function changeOrgan() {
    // Passer à l'organe suivant
    currentOrgan = (currentOrgan + 1) % organs.length; 
  
    const organData = organs[currentOrgan]; // Récupérer les données de l'organe
    const organEmoji = document.getElementById('organ-emoji');
    const organDiv = document.getElementById('organ');
  
    // Mettre à jour l'émoji de l'organe
    organEmoji.textContent = organData.emoji;
  
    // Mettre à jour la position de l'organe
    organDiv.style.top = organData.top;
    organDiv.style.left = organData.left;
  }
  
  // Ajouter un événement au bouton pour changer l'organe
  document.getElementById('changeOrganBtn').addEventListener('click', changeOrgan);
  document.addEventListener("DOMContentLoaded", () => {
    const volumeSlider = document.getElementById("volume");
    const waves = document.querySelectorAll(".wave");
  
    // Function to calculate water color based on volume
    function calculateWaterColor(volume) {
      const red = Math.floor((volume / 100) * 255); // Increase red as volume increases
      const green = 0; // Keep green constant for a clear red transition
      const blue = 255 - red; // Decrease blue as red increases
      return `rgb(${red}, ${green}, ${blue})`;
    }
  
    // Event listener to update water color
    volumeSlider.addEventListener("input", () => {
      const volume = volumeSlider.value;
      const waterColor = calculateWaterColor(volume);
  
      // Apply the calculated color to all wave elements
      waves.forEach((wave) => {
        wave.style.backgroundColor = waterColor;
      });
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const highlight = document.getElementById("highlight");
    if (!highlight) {
      console.error("Highlight element not found!");
      return;
    }
  
    const volumeSlider = document.getElementById("volume");
    if (!volumeSlider) {
      console.error("Volume slider not found!");
      return;
    }
  
    const waves = document.querySelectorAll(".wave");
  
    // Function to calculate water color based on volume
    function calculateWaterColor(volume) {
      const red = Math.floor((volume / 100) * 255); // Red increases with volume
      const blue = 255 - red; // Blue decreases with volume
      return `rgb(${red}, 0, ${blue})`; // Gradually transition from blue to red
    }
  
    // Event listener to update the wave color
    volumeSlider.addEventListener("input", () => {
      const volume = volumeSlider.value;
      const waterColor = calculateWaterColor(volume);
  
      // Apply the calculated color to all wave elements
      waves.forEach((wave) => {
        wave.style.backgroundColor = waterColor; // Update the background color
      });
    });
  });
