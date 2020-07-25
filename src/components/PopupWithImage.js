import Popup from '../components/Popup.js';
import { imageCaption } from '../utils/constants.js'


export default class PopupWithImage extends Popup {
    constructor(
        selector
    ) {
        super(selector);
        this._popapImg = this._selector.querySelector('.popup__image');
    }

    _addImage(link, alt) {
        this._popapImg.src = link;
        this._popapImg.alt = `Изображение ${alt}`;
    }

    _addCaption(caption) {
        imageCaption.textContent = caption;
    }

    open(link, alt) {
        super.open();
        this._addImage(link, alt);
        this._addCaption(alt);
    }

}

/* Можно лучше: все сделано отлично, но создание alt можно вынести в util функции */
