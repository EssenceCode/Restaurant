import Capellini from './components/capellini.jpg';
import Carbonara from './components/carbonara.jpg';
import Penne from './components/penne.jpg';
import Ravioli from './components/ravioli.jpg';
import './style.css';


export default function createMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    const capellini = new Image();
    const carbonara = new Image();
    const penne = new Image();
    const ravioli = new Image();

    capellini.src = Capellini;
    carbonara.src = Carbonara;
    penne.src = Penne;
    ravioli.src = Ravioli;

    for(let i = 0; i < 4; i++) {
        const menuItem = document.createElement('div');
        const menuDescription = document.createElement('p');
        menuItem.classList.add('menu-item');
        menuItem.setAttribute('index',i);
        const getId = menuItem.getAttribute('index');

        if(getId === '0') {
            menuDescription.textContent = "Capellini in Exquisite Tomato Elegance: Delicate Angel Hair Pasta Draped in Luscious, Sun-Kissed Tomato Sauce.";
            menuItem.appendChild(menuDescription);
            // menuItem.appendChild(capellini);
        };
        if(getId === '1') {
            menuDescription.textContent = 
            "Decadent Indulgence: Traditional Carbonara Pasta Infused with Creamy Egg, Rich Guanciale, Pecorino Romano, and Freshly Cracked Black Pepper."
            menuItem.appendChild(menuDescription);
            // menuItem.appendChild(carbonara);
        };
        if(getId === '2') {
            menuDescription.textContent = 
            "Penne Rigate Embraced in Velvety Vodka Sauce: A Harmony of Tomatoes, Cream, and Vodka Weaved to Perfection."
            menuItem.appendChild(menuDescription);
            // menuItem.appendChild(penne);
        };
        if(getId === '3') {
            menuDescription.textContent = 
            "Pockets of Delight: Handcrafted Ravioli, Filled with Savory Medleys, Nestled Beneath a Blanket of Gourmet Sauce."
            menuItem.appendChild(menuDescription)
            // menuItem.appendChild(ravioli);
        };
        
        menuContainer.appendChild(menuItem);
    }
    
    return menuContainer;
}
