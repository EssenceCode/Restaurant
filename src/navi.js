export default function createNavi() {
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
    console.log('hello')
    return navigation;
}