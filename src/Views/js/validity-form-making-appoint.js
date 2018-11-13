"use strict";
(function () {
    var appointmentForm = document.body.querySelector(".appointment-form");

    appointmentForm.addEventListener("invalid", function (evt) {
        evt.preventDefault();
        evt.target.dispatchEvent(new FocusEvent("blur"));
    }, true);

    function showInvalidityField(errorDescription, elemField) {
        elemField.value = "";
        elemField.style.borderColor = COLOR_ERROR;
        elemField.placeholder = errorDescription;
        elemField.classList.add("error-text-holder");
    }

    function resetInvalidityField(field, oldValue, oldPlaceHolder) {
        field.style.borderColor = "";
        field.classList.remove("error-text-holder");
        field.placeholder = oldPlaceHolder;
        if (oldValue) {
            field.value = oldValue;
        }
    }

    (function dateValidation() {
        // date validity
        var appointmentDate = appointmentForm.querySelector("#appointment-date");
        appointmentDate.addEventListener("invalid", function (evt) {
            evt.preventDefault()
        });

        var oldPlaceholderDate = appointmentDate.placeholder.toString();

        var oldValueDate;
        var errorDescriptionDate;
        var currentDate;

        appointmentDate.addEventListener("blur", function (evt) {
            currentDate = new Date();
            oldValueDate = appointmentDate.value;
            // check on match with pattern and empty
            if (!appointmentDate.checkValidity()) {
                showInvalidityField("Неверный формат", appointmentDate);
                return;
            }

            var splitedDate = appointmentDate.value.split(".");
            //check valid date
            var splitedYear = parseInt(splitedDate[2]);
            if (splitedYear < currentDate.getFullYear()) { // check year
                errorDescriptionDate = "Неверно указан год.";
                showInvalidityField(errorDescriptionDate, appointmentDate);
                return;
            }

            var splitedMonth = parseInt(splitedDate[1]);
            //entered month less current month, while entered year the same as current year
            if (splitedMonth < currentDate.getMonth() + 1 && splitedYear === currentDate.getFullYear()) {
                errorDescriptionDate = "Неверно указан месяц.";
                showInvalidityField(errorDescriptionDate, appointmentDate);
                return;
            }

            var splitedDay = parseInt(splitedDate[0]);
            //entered day less current day, while entered month the same current month and
            // entered year the same as current year
            if (splitedDay < currentDate.getDate() && splitedMonth === currentDate.getMonth() + 1
                && splitedYear === currentDate.getFullYear()) {
                errorDescriptionDate = "Неверно указан день.";
                showInvalidityField(errorDescriptionDate, appointmentDate);
            }
        });

        appointmentDate.addEventListener("focus", function (evt) {
            resetInvalidityField(appointmentDate, oldValueDate, oldPlaceholderDate);
        });

    })();

    (function timeValidation() {
        //time validity
        var appointmentTime = appointmentForm.querySelector("#appointment-time");
        appointmentTime.addEventListener("invalid", function (evt) {
            evt.preventDefault()
        });
        var oldPlaceholderTime = appointmentTime.placeholder;

        appointmentTime.addEventListener("focus", function (evt) {
            resetInvalidityField(appointmentTime, oldValueTime, oldPlaceholderTime)
        });

        var oldValueTime;
        appointmentTime.addEventListener("blur", function (evt) {
            oldValueTime = appointmentTime.value;
            if (!appointmentTime.checkValidity()) {
                showInvalidityField("Неверный формат", appointmentTime);
            }
        });

        appointmentTime.addEventListener("invalidity", function (evt) {
            evt.preventDefault();
        });
    })();

    (function nameValidation() {
        var appointmentName = appointmentForm.querySelector("#appointment-name");
        appointmentName.addEventListener("invalid", function (evt) {
            evt.preventDefault()
        });
        var oldPlaceholderName = appointmentName.placeholder;

        appointmentName.addEventListener("focus", function () {
            resetInvalidityField(appointmentName, oldValueName, oldPlaceholderName)
        });

        var oldValueName;
        appointmentName.addEventListener("blur", function () {
            oldValueName = appointmentName.value;
            if (!appointmentName.checkValidity()) {
                showInvalidityField("Неверный формат", appointmentName);
            }
        });

        appointmentName.addEventListener("invalidity", function (evt) {
            evt.preventDefault();
        });
    })();

    (function phoneValidity() {
        var appointmentPhone = appointmentForm.querySelector("#appointment-phone");
        appointmentPhone.addEventListener("invalid", function (evt) {
            evt.preventDefault()
        });
        var oldPlaceholderPhone = appointmentPhone.placeholder;

        appointmentPhone.addEventListener("focus", function () {
            resetInvalidityField(appointmentPhone, oldValuePhone, oldPlaceholderPhone)
        });

        var oldValuePhone;
        appointmentPhone.addEventListener("blur", function () {
            oldValuePhone = appointmentPhone.value;
            if (!appointmentPhone.checkValidity()) {
                showInvalidityField("Неверный формат", appointmentPhone);
            }
        });

        appointmentPhone.addEventListener("invalidity", function (evt) {
            evt.preventDefault();
        });
    })();

})();