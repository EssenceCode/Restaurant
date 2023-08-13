import chefImg from './components/chef.png'
import './style.css'

export default function createHome() {
    const headlineContainer = document.createElement('div');
    const headlineContent = document.createElement('p');
    headlineContainer.classList.add('info-container');
    const myImg = new Image();
    
    myImg.src = chefImg;
    headlineContent.textContent = "Indulge in Culinary Bliss at Alfredo's Haven: Where Pasta Dreams Come True!";

    headlineContainer.appendChild(myImg);
    headlineContainer.appendChild(headlineContent);

    
    return headlineContainer;
}