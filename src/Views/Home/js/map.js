var mapLinks = document.querySelectorAll(".js-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelectorAll(".modal-close");
var overLayMap = document.querySelector(".modal-overlay");

for (var i = 0; i < 2; i++) {
    mapLinks.item(i).addEventListener("click", function (evt) {
        evt.preventDefault();
        overlay.classList.add("modal-show");
        mapPopup.classList.add("modal-show");
    });    
}

mapClose.item(1).addEventListener("click", function (evt) { 
   evt.preventDefault();
   mapPopup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
});

overLayMap.addEventListener("click", function (evt) {
    mapPopup.classList.remove("modal-show");
    overLayMap.classList.remove("modal-show");
});