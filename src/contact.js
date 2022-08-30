import { maincont } from ".";

function contact(){

const main = document.createElement('div');

main.classList.add('contact');

main.innerHTML = `
<div class="left" > 
    <div class="location">
        <span> <i class="fa-solid fa-location-dot"></i> Fizzee St#5 Nishat Colony Lahore Cantt</span>
        <br><br>
        <span><i class="fa-solid fa-phone"></i> +92 313-4316704</span> 
    </div>
  
<br>
<div class="message">
    <div>
        <h4><i class="fa-solid fa-envelope"></i> Message Us</h4>
    </div>

    <div>
    <form action="#" method="get">
        <label for="name">Full Name: </label>
        <input type="text" id="name" placeholder="Full Name" required>
        <br>
        <label for="mail">Email: </label>
        <input type="email" id="mail" placeholder="Email" required>
        <br>
        <label for="message">Message: </label>
        <textarea name="message" id="message" cols="25" rows="8" required></textarea>
        <button>Submit</button>
    </form>
    
</div>

</div>

</div>

<div class="right">
    <h6>Map To Pizzee</h6>
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.0796779001553!2d74.38507391550372!3d31.494493655569777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905e939c5cb11%3A0x3419a97777acf318!2sAhmad%20Dahi%20Bhallay!5e0!3m2!1sen!2s!4v1661490959628!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

`

maincont.appendChild(main);

}


export {contact};













