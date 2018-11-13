(function () {
    var link = document.querySelector(".login-link");
    var popup = document.querySelector(".modal-login");
    bindFocusesWithPopup(popup);
    var close = document.querySelector(".modal-close");
    var overlay = document.querySelector(".modal-overlay");

    var onPopUpEscPress = function (evt) {
        if (evt.key === "Escape") {
            closePopUp();
        }
    };

    function bindFocusesWithPopup(popup) {
        var focusable = popup.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');

        var firstFocusable = focusable[0];
        var onPopupTabPress = function (ev) {
            if (ev.key === "Tab") {
                ev.preventDefault();
                firstFocusable.focus();
                window.removeEventListener("keydown", onPopupTabPress);
            }
        };
        window.addEventListener("keydown", onPopupTabPress);

        var lastFocusable = focusable[focusable.length - 1];
        lastFocusable.addEventListener("keydown", function (evt) {
            if (evt.key === "Tab") {
                evt.preventDefault();
                firstFocusable.focus();
            }
        });
    }

    var openPopUp = function () {
        popup.classList.add("modal-show");
        overlay.classList.add("modal-show");
        document.addEventListener("keydown", onPopUpEscPress);
    };

    var closePopUp = function () {
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

