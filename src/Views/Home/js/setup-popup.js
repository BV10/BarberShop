(function () {
    var link = document.querySelector(".login-link");
    var popup = document.querySelector(".modal-login");
    var close = document.querySelector(".modal-close");
    var overlay = document.querySelector(".modal-overlay");

    var onPopUpEscPress = function (evt) {
        if (evt.key === "Escape") {
            closePopUp();
        }
    };

    var openPopUp = function() {
        popup.classList.add("modal-show");
        overlay.classList.add("modal-show");
        document.addEventListener("keydown", onPopUpEscPress);
    };

    var closePopUp = function() {
        resetErrorOfLoginOnForm();
        resetErrorOfPasswordOnForm();
        popup.classList.remove("modal-show");
        overlay.classList.remove("modal-show");
        document.removeEventListener("keydown", onPopUpEscPress);
    };

    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        openPopUp();
    });

    overlay.addEventListener("click", function (evt) {
        closePopUp();
    });

    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        closePopUp();
    });

    window.highlightBtnCloseModal = function (btn) {
        btn.classList.add("modal-close-anyway");
    };

    window.resetHighlightBtnCloseModal = function (btn) {
        btn.classList.remove("modal-close-anyway");
    };

    //mouse enter on overlay
    overlay.addEventListener("mouseover", function (evt) {
        evt.preventDefault();
        highlightBtnCloseModal(close);
    });
    // mouse leave overlay
    overlay.addEventListener("mouseout", function (evt) {
       evt.preventDefault();
       resetHighlightBtnCloseModal(close);
    });
})();

