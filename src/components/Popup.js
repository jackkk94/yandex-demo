import { ESC_KEYCODE } from "../utils/constants.js";

export default class Popup {
    constructor(
        selector
    ) {
        this._selector = document.querySelector(selector);
    }

    _handleEscClose(evt) {
        evt.preventDefault();
        if (evt.which === ESC_KEYCODE) {
            this.close();
        }
    }

    _removeListeners() {
        this._selector.removeEventListener('click', this._handleClickEvent.bind(this));
        document.removeEventListener('keyup', this._handleEscapeEvent.bind(this));
    }

    _handleClickEvent(evt) {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
            this.close();
        }
    }

    _handleEscapeEvent(evt) {
        document.querySelectorAll('.popup_is-opened').length > 0 && this._handleEscClose(evt);
    }

    open() {
        this._selector.classList.add('popup_is-opened');
    }

    close() {
        this._selector.classList.remove('popup_is-opened');
        this._removeListeners();
    }

    setEventListeners() {
        this._selector.addEventListener('click', this._handleClickEvent.bind(this));
        document.addEventListener('keyup', this._handleEscapeEvent.bind(this));
    }

}

/* Сделано отлично! Не забыто удаление Event Listeners, и то что при передаче функций в addEventListener / removeEventListener
    следует использовать bind */
