//import { content } from ".";
import { maincont } from ".";


function abt(){

    const main = document.createElement('div');

main.classList.add('about');

const heading = document.createElement('div');
heading.classList.add('heading2');
heading.innerHTML = `<h3>Pizzee Restaurant</h3>`;

const ourres = document.createElement('div');
ourres.classList.add('ourres');
ourres.innerHTML = `Pizzee's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.
<br><br><span>Goldilocks</span> `




const timings = document.createElement('div');
timings.classList.add('timings');
const hourhead = document.createElement('div');
hourhead.classList.add('heading2');
hourhead.innerHTML= `<h4>Hours</h4>`;

timings.innerHTML = 
`<div class="time" >Sunday: 8am - 8pm <br>
Monday: 6am - 6pm <br>
Tuesday: 6am - 6pm <br>
Wednesday: 6am - 6pm <br>
Thursday: 6am - 10pm <br>
Friday: 6am - 10pm <br>
Saturday: 8am - 10pm <br></div>`


main.appendChild(heading);
main.appendChild(ourres);
main.appendChild(hourhead);
main.appendChild(timings);

maincont.appendChild(main);

}

export {abt};













