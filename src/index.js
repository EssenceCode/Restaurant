import Home from './home.js';
import './style.css'

function showContent() {
    const container = document.querySelector('.content');
    // create navigation buttons
    const navigation = document.createElement('div');
          navigation.classList.add('navigation')      

    const nameContainer = document.createElement('div');
          nameContainer.classList.add('resto-name');  

    const buttonContainer = document.createElement('div');
          buttonContainer.classList.add('button-container');
            
    const restoName = document.createElement('h1');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');

    // create footer
    const footer = document.createElement('footer');

    // add class to button
    homeButton.classList.add('home');
    menuButton.classList.add('menu');
    contactButton.classList.add('contact');
    // add textcontent
    restoName.textContent = "Alfredo's Haven";
    homeButton.textContent = "Home";
    menuButton.textContent = "Menu";
    contactButton.textContent = "Contact";
    // append the elements
    nameContainer.appendChild(restoName);

    buttonContainer.appendChild(homeButton);
    buttonContainer.appendChild(menuButton);
    buttonContainer.appendChild(contactButton);

    navigation.appendChild(nameContainer);
    navigation.appendChild(buttonContainer);
    //initial load  
    container.appendChild(Home());
   
    homeButton.addEventListener('click', (e) => {
        container.textContent = '';
        import('./home.js').then(module => {
            const home = module.default;

            container.appendChild(home());
        });
    });
    menuButton.addEventListener('click', (e) => {
        container.textContent = '';
        import('./menu.js').then(module => {
            const menu = module.default;

            container.appendChild(menu());
        });
    });

    contactButton.addEventListener('click', (e) => {
        container.textContent = '';
        import('./contact.js').then(module => {
            const contact = module.default;

            container.appendChild(contact());
        });
    });


    document.body.insertBefore(navigation, container);

    return container;
}

showContent();


