import { content } from ".";


function foot(){

const footer = document.createElement('div')
footer.classList.add('footer');

footer.innerHTML =  `<div>Thanks! Hope you visit again soon. </div>
<div>Made by Zeddspear <a href="https://github.com/zeddspear" target="_blank"><i class="fa-brands fa-github"></i></a></div>
 <div>Used Icons <a href="https://fontawesome.com/" target="_blank">Font Awesome</a> </div>`


content.appendChild(footer);

}


export {foot};











