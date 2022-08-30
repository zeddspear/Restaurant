//import { content } from ".";
import { maincont } from ".";

const menu = function mainmenu(){

const main = document.createElement('div');
main.classList.add('main');

const Lunch = document.createElement('h2');
Lunch.innerHTML = `Lunch`;
const lunch = document.createElement('div');
lunch.classList.add('lunch');


lunch.innerHTML = ` <div class="box"> <img src="./images/hamburger.png" alt=""> <h5>Hamburger (Rs.400)</h5> <span>Buns, patty, tomato, onions, lettuce, and our secret family recipe.</span></div>
                    <div class="box"> <img src="./images/double-cheeseburger.png" alt=""> <h5>Double-CheeseBurger (Rs.600)</h5> <span>Similar to our cheeseburger, but with an extra patty.</span></div>
                    <div class="box">  <img src="./images/french-fries.png" alt=""> <h5>French-Fries (Rs.150)</h5> <span>Sometimes you don't want to eat your burger alone, why not add some french fries?</span></div>`
const br = document.createElement('br');

const Dinner = document.createElement('h2');
 Dinner.innerHTML = `Dinner`; 

const dinner = document.createElement('div');
dinner.classList.add('dinner');

dinner.innerHTML = `<div class="box"> <img src="./images/grilled-cheese.png" alt=""> <h5>Grilled-Cheese Sandwich (Rs.350)</h5> <span>A toasted and grilled cheese sandwich, dipped in our special sauce.</span></div>
                    <div class="box"> <img src="./images/steak.png" alt=""> <h5>Steak (Rs.1200)</h5> <span>A juicy steak made just how you like it.</span></div>
                    <div class="box"> <img src="./images/caesar-salad.png" alt=""> <h5>Caesar-Salad (Rs.300)</h5> <span>Your typical caesar salad that comes with your choice of dressings.</span></div>`
main.appendChild(Lunch);
main.appendChild(lunch);
main.appendChild(br);
main.appendChild(Dinner);
main.appendChild(dinner);

maincont.appendChild(main);

}

export {menu};















