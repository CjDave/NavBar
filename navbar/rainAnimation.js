const rainContainer = document.querySelector('.rain');
const numRaindrops = 150;

// Generate raindrops
const createRaindrop = () => {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');

    // Randomize the position and animation properties
    raindrop.style.left = `${Math.random() * 100}%`;  
    raindrop.style.animationDelay = `${Math.random() * 2}s`;  
    raindrop.style.animationDuration = `${Math.random() * 2 + 2}s`; 

    return raindrop;
};

// Play Rain animation
const playRain = () => {
    for (let i = 0; i < numRaindrops; i++) {
        rainContainer.appendChild(createRaindrop());
    }
};


document.addEventListener('DOMContentLoaded', playRain);
