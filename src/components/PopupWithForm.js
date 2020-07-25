import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
    constructor(
        selector,
        handleSubmit
    ) {
        super(selector);
        this._handleSubmit = handleSubmit;
    }

    /* Надо исправить: кажется данный метод нигде не используется */
    _getInputValues() {
        /* Надо исправить: values  следует объявлять через const, а не let, они не перезаписываются
           Однако можно лучше - сразу возвращать значение, не присваивая его*/
        let values = Array.from(this._selector.querySelector('form').elements)
            .filter(el => el.type !== "submit")
            .map(el => {
                return { name: el.name, type: el.type }
            })

        return values;
    }

    close() {
        super.close();
        this._selector.querySelector('form').reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._selector.addEventListener('submit', this._handleSubmit);
    }



}
