let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text',{delay:200, origin: "top"})
sr.reveal('.form-container form',{delay:800, origin: "left"})
sr.reveal('.heading',{delay:800, origin: "top"})
sr.reveal('.ride-container .box',{delay:600, origin: "top"})
sr.reveal('.services-container .box',{delay:600, origin: "top"})
sr.reveal('.about-container .box',{delay:600, origin: "top"})
sr.reveal('.reviews-container .box',{delay:600, origin: "top"})
sr.reveal('.newsletter .box',{delay:400, origin: "bottom"})


function updatePrice(){
    var hours = document.getElementById("hours").value;
    var weeks = document.getElementById("weeks").value;
    var months = document.getElementById("months").value;
    if (hours == 7){
        weeks++;
        document.getElementById("hours").innerHTML = 0;
        document.getElementById("weeks").innerHTML = weeks;
    }
    if (weeks == 4){
        months++;
        document.getElementById("weeks").innerHTML = 0;
        document.getElementById("months").innerHTML = months;
    }
    var newPrice = ((hours*200)+ (weeks*1000)+ (months*3000)).toPrecision(5);
    var tax = (newPrice*0.07).toPrecision(3)
    var total = (newPrice*1.07).toPrecision(5);
    document.getElementById("price").innerHTML = newPrice;
    document.getElementById("subtotal").innerHTML = newPrice;
    document.getElementById("tax").innerHTML = tax;
    document.getElementById("total").innerHTML = total;
}
