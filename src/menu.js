import './style.css';

export default function createMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
   
    const menuContent = [
        "Capellini in Exquisite Tomato Elegance: Delicate Angel Hair Pasta Draped in Luscious, Sun-Kissed Tomato Sauce.",
        "Decadent Indulgence: Traditional Carbonara Pasta Infused with Creamy Egg, Rich Guanciale, Pecorino Romano, and Freshly Cracked Black Pepper.",
        "Penne Rigate Embraced in Velvety Vodka Sauce: A Harmony of Tomatoes, Cream, and Vodka Weaved to Perfection.",    
        "Pockets of Delight: Handcrafted Ravioli, Filled with Savory Medleys, Nestled Beneath a Blanket of Gourmet Sauce."
    ]
    for(let i = 0; i < 4; i++) {
        const menuItem = document.createElement('div');
        const menuDescription = document.createElement('p');
        menuItem.classList.add('menu-item');
        menuItem.setAttribute('index',i);
       
        menuDescription.textContent = menuContent[i]

        menuItem.appendChild(menuDescription)
        menuContainer.appendChild(menuItem);
    }
    
    return menuContainer;
}
