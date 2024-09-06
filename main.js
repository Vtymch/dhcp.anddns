document.addEventListener("DOMContentLoaded", function() {
    //Temabytterelement og element body
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    //Sjekker temaet som er lagret i localStorage, installasjon ved sideinnlasting
    if(localStorage.getItem("theme") === "light") {
        body.classList.add("light-theme");// Hvis lagret, legg til en klasse for lystemaet
    }
    //Hendelsesbehandler for temabytte
    themeToggle.addEventListener("click", function() {
        body.classList.toggle("light-theme"); //bytte hendelser til temabytte
    

        if (body.classList.containsta("light-theme")) { //Hvis lystemaet er aktivert, lagre det i localStorage
        localStorage.setItem("theme", "light");
        } else {
        localStorage.setItem("theme", "dark"); //Hvis det lette temaet er deaktivert og det svarte temaet er deaktivert, lagrer det i localStorage
        }
    });
});