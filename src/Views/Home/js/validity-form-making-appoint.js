"use strict";

(function () {
    var appointmentForm = document.body.querySelector(".appointment-form");

    var appointmentDate = appointmentForm.querySelector("#appointment-date");
    var appointmentTime = appointmentForm.querySelector("#appointment-time");
    var appointmentName = appointmentForm.querySelector("#appointment-name");
    var appointmentPhone = appointmentForm.querySelector("#appointment-phone");

    //set pattern date
    var currentDate = new Date();
    appointmentDate.pattern = "^((0[1-9])|([1-2][0-9])|(30|31))\\.((0[1-9])|(10|11|12))\\.(\\d{4})$"

    //valid date
    var errorDescriptionDate;

    appointmentDate.addEventListener("blur", function (evt) {
        var splitedDate = appointmentDate.value.split(".");
        //check valid date
        var splitedYear = parseInt(splitedDate[2]);
        if (splitedYear < currentDate.getFullYear()) { // check year
            errorDescriptionDate = "Неверно указан год. Сейчас " + currentDate.getFullYear() + "год.";
            appointmentDate.validity.valid = false; // not valid entered data
            appointmentDate.checkValidity();
        }

        var splitedMonth = parseInt(splitedDate[1]);
        //entered month less current month, while entered year the same as current year
        if (splitedMonth < currentDate.getMonth() + 1 && splitedYear === currentDate.getFullYear()) {
            errorDescriptionDate = "Неверно указан месяц.";
            appointmentDate.validity.valid = false; // not valid entered data
            appointmentDate.checkValidity();
        }

        var splitedDay = parseInt(splitedDate[0]);
        //entered day less current day, while entered month the same current month and
        // entered year the same as current year
        if (splitedDay < currentDate.getDate() && splitedMonth === currentDate.getMonth() + 1
            && splitedYear === currentDate.getFullYear()) {
            errorDescriptionDate = "Неверно указан день.";
            appointmentDate.validity.valid = false; // not valid entered data
           var res = appointmentDate.checkValidity();
           console.log(res);
        }
    });

    appointmentDate.addEventListener("invalid", function (evt) {
        if(appointmentDate.validity.patternMismatch) {
            appointmentDate.setCustomValidity("Неверный формат даты.")
        }
        else if(!appointmentDate.validity.valid) {
            appointmentDate.setCustomValidity(errorDescriptionDate);
        }
    });

})();