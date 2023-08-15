import Home from './home.js';
import Navigation from './navi.js';
import './style.css'

function showContent() {
    const container = document.querySelector('.content');
    document.body.insertBefore(Navigation(), container);
    
    //initial load  
    container.appendChild(Home());
    const homeButton = document.querySelector('.home');
    homeButton.addEventListener('click', (e) => {
        container.textContent = '';
        import('./home.js').then(module => {
            const home = module.default;

            container.appendChild(home());
        });
    });
    const menuButton = document.querySelector('.menu')
    menuButton.addEventListener('click', (e) => {
        container.textContent = '';
        import('./menu.js').then(module => {
            const menu = module.default;

            container.appendChild(menu());
        });
    });
    const contactButton = document.querySelector('.contact');
    contactButton.addEventListener('click', (e) => {
        container.textContent = '';
        import('./contact.js').then(module => {
            const contact = module.default;

            container.appendChild(contact());
        });
    });

    return container;
}

showContent();


