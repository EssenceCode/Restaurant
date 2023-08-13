import chefImg from './components/chef-contact.jpg';
import './style.css';

export default function createContact() {
    const contactContainer = document.createElement('div');
    const personDetails = document.createElement('div');
    const contactUs = document.createElement('h1');

    contactContainer.classList.add('contact-container');
    personDetails.classList.add('person-container');

    const myImg = new Image();
    myImg.src = chefImg;
    personDetails.appendChild(myImg);
    contactUs.textContent = "Contact Us";

    for(let i = 0; i < 3; i++) {
        const contactItem = document.createElement('p');
        contactItem.setAttribute('contact-index',i);
        const getId = contactItem.getAttribute('contact-index');
        if(getId === '0') {
            contactItem.textContent = "Chef/Owner: Luca Bianchi";
            contactItem.classList.add('person');
            personDetails.appendChild(contactItem);
        };
        if(getId === '1') {
            contactItem.textContent = "Number: (555) 123-4567";
            contactItem.classList.add('number');
            personDetails.appendChild(contactItem);
        };
        if(getId === '2') {
            contactItem.textContent = "Email: luca.bianchi@example.com";
            contactItem.classList.add('email');
            personDetails.appendChild(contactItem);
        };
    }

    contactContainer.appendChild(contactUs);
    contactContainer.appendChild(personDetails);
    
    return contactContainer;
}