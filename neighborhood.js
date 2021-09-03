let randomBtn = document.querySelector('#random');
let para = document.createElement('p')



function randomRestaurant() {
    clear();
    restaurantArr = ['Pinnacle Grille', 'Harolds', 'The Horny Toad']
    const randomRest = restaurantArr[Math.floor(Math.random() * restaurantArr .length)];
    para.textContent = randomRest
    para.classList.add('random-restaurant')
    document.body.appendChild(para);
    
}

function clear() {
    para.innerHTML = "";
}

randomBtn.addEventListener('click', randomRestaurant);