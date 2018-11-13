"use strict";

(function () {
    window.COLOR_ERROR = "#ff5332";

    var errorElemInLogin;

    var createErrorElemWithContent = function (content) {
        var elemErr = document.createElement("div");
        elemErr.classList.add("modal-error");
        elemErr.textContent = content;
        return elemErr;
    };

    var loginField = document.querySelector(".login-field");
    var userLogin = document.querySelector("#user-login");

    userLogin.addEventListener("blur", function () { // check valid input login on not focus
        if (!userLogin.checkValidity()) { // not valid login
            var errorDescription;

            if (userLogin.value.length === 0) {
                errorDescription = "Логин должен состоять минимум из 5 символов.";
                errorElemInLogin = createErrorElemWithContent(errorDescription);
                userLogin.style.borderBottomColor = COLOR_ERROR;
                loginField.insertBefore(errorElemInLogin, userLogin);
            }
            else if (/(^_)|(^\d)|(^\W)/.test(userLogin.value)) { // begin not letters
                errorDescription = "Логин должен начинатся с латинской буквы.";
                errorElemInLogin = createErrorElemWithContent(errorDescription);
                userLogin.style.borderBottomColor = "COLOR_ERROR";
                loginField.insertBefore(errorElemInLogin, userLogin);
            }
            else if (/\W/.test(userLogin.value)) {
                errorDescription = "Логин должен содержать только буквы, цифры или знак подчеркивания.";
                errorElemInLogin = createErrorElemWithContent(errorDescription);
                userLogin.style.borderBottomColor = COLOR_ERROR;
                loginField.insertBefore(errorElemInLogin, userLogin);
            }
            else if (/^\w{1,5}$/.test(userLogin.value)) { // empty field or less 5 symbols
                errorDescription = "Логин должен состоять минимум из 5 символов.";
                errorElemInLogin = createErrorElemWithContent(errorDescription);
                userLogin.style.borderBottomColor = COLOR_ERROR;
                loginField.insertBefore(errorElemInLogin, userLogin);
            }
        }
    });

    window.resetErrorOfLoginOnForm = function () {
        if (errorElemInLogin !== undefined) {
            loginField.removeChild(errorElemInLogin);
            userLogin.style.borderBottomColor = "";
            errorElemInLogin = undefined;
        }
    };

    userLogin.addEventListener("focus", function () {
        resetErrorOfLoginOnForm();
    });

    var errorElemInPassword;
    var passwordField = document.querySelector(".password-field");
    var userPassword = document.querySelector("#user-password");

    userPassword.addEventListener("blur", function () { // check valid input login on not focus
        if (!userPassword.checkValidity()) { // not valid login
            var errorDescription;

            if (userPassword.value.length === 0) {
                errorDescription = "Пароль должен состоять минимум из 5 символов.";
                errorElemInPassword = createErrorElemWithContent(errorDescription);
                userPassword.style.borderBottomColor = COLOR_ERROR;
                passwordField.insertBefore(errorElemInPassword, userPassword);
            }
            else if (/(^_)|(^\d)|(^\W)/.test(userPassword.value)) { // begin not letters
                errorDescription = "Пароль должен начинатся с латинской буквы.";
                errorElemInPassword = createErrorElemWithContent(errorDescription);
                userPassword.style.borderBottomColor = COLOR_ERROR;
                passwordField.insertBefore(errorElemInPassword, userPassword);
            }
            else if (/\W/.test(userPassword.value)) {
                errorDescription = "Пароль должен содержать только буквы, цифры или знак подчеркивания.";
                errorElemInPassword = createErrorElemWithContent(errorDescription);
                userPassword.style.borderBottomColor = COLOR_ERROR;
                passwordField.insertBefore(errorElemInPassword, userPassword);
            }
            else if (/^\w{1,5}$/.test(userPassword.value)) { // empty field or less 5 symbols
                errorDescription = "Пароль должен состоять минимум из 5 символов.";
                errorElemInPassword = createErrorElemWithContent(errorDescription);
                userPassword.style.borderBottomColor = COLOR_ERROR;
                passwordField.insertBefore(errorElemInPassword, userPassword);
            }
        }
    });

    window.resetErrorOfPasswordOnForm = function () {
        if (errorElemInPassword !== undefined) {
            passwordField.removeChild(errorElemInPassword);
            userPassword.style.borderBottomColor = "";
            errorElemInPassword = undefined;
        }
    };

    userPassword.addEventListener("focus", function () {
        resetErrorOfPasswordOnForm();
    });

    var loginForm = document.body.querySelector(".login-form");

    loginForm.addEventListener("invalid", function (evt) { // reset default alert error
        evt.preventDefault();
    }, true);
})();