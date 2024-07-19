document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    
    const show_side = document.querySelector(".iii")
    const hide_side = document.querySelector("#hide-side");
    const side_bar = document.querySelector("aside");

    show_side.addEventListener("click", () => {
        side_bar.style.display = "block";
    });
    
    hide_side.addEventListener("click", () => {
        side_bar.style.display = "none";
    });

});