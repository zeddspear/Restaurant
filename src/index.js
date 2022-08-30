import { menu } from "./menu";
import { foot } from "./footer";
import { abt } from "./about";
import { contact } from "./contact";
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


let maincont = "";

const content = document.querySelector('#content');

// creating header 
function pageload(){
const header = document.createElement('div');
header.classList.add('head');

const heading = document.createElement('div');
heading.classList.add('heading');
heading.innerHTML = 'Pizzee';

const buttons = document.createElement('div');
buttons.classList.add('buttons');
buttons.innerHTML =`<button>Menu</button>
                    <button>About</button>
                    <button>Contact</button>`;

 maincont = document.createElement('div');
 maincont.classList.add('maincont');

header.appendChild(heading);
header.appendChild(buttons);
content.appendChild(header);


content.appendChild(maincont);



menu();
const buttonshead = document.querySelectorAll('.buttons');
buttonshead.forEach(button =>(button.addEventListener('click',changepage)));

function changepage(e){

    if(e.target.innerText == "Menu"){
        maincont.innerHTML = "";
        menu();
    }
    else if (e.target.innerText == "About"){
        maincont.innerHTML="";
        abt();
    }
    else if (e.target.innerText == "Contact"){
        maincont.innerHTML="";
        contact();
    }

}


return {maincont};

}

pageload();
foot();
export {content};
export {maincont};








