(function () {

    var mapLinks = document.querySelectorAll(".js-button-map");
    var mapPopup = document.querySelector(".modal-map");
    var mapClose = document.querySelector(".modal-close-map");
    var overLayMap = document.querySelector(".modal-overlay");

    var onMapPopupEscPress = function (evt) {
        if (evt.key === "Escape") {
            closeModalMap();
        }
    };

    var closeModalMap = function () {
        mapPopup.classList.remove("modal-show");
        overLayMap.classList.remove("modal-show");
        document.removeEventListener("keydown", onMapPopupEscPress);
    };

    var openModalMap = function () {
        overLayMap.classList.add("modal-show");
        mapPopup.classList.add("modal-show");
        document.addEventListener("keydown", onMapPopupEscPress);
    };

    for (var i = 0; i < 2; i++) {
        mapLinks.item(i).addEventListener("click", function (evt) {
            evt.preventDefault();
            openModalMap()
        });
    }

    mapClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        closeModalMap();
    });

    overLayMap.addEventListener("click", function () {
       closeModalMap();
    });

    //mouse enter on overlay
    overLayMap.addEventListener("mouseover", function (evt) {
        evt.preventDefault();
        highlightBtnCloseModal(mapClose);
    });
    // mouse leave overlay
    overLayMap.addEventListener("mouseout", function (evt) {
        evt.preventDefault();
        resetHighlightBtnCloseModal(mapClose);
    });
})();