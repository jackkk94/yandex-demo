import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Popup from '../components/Popup.js';
import UserInfo from '../components/UserInfo.js';
import {
    cardSelector,
    cardFormModalWindow,
    cardNameInputValue,
    cardLinkInputValue,
    placesWrap,
    titleInputValue,
    descriptionInputValue,
    profileTitle,
    profileDescription,
    editFormModalWindow
} from "./constants.js";

const popupWithImage = new PopupWithImage('.popup_type_image');
const popupAddCard = new Popup('.popup_type_new-card');
const profileEditCard = new Popup('.popup_type_edit');
const userInfo = new UserInfo({ nameSelector: '.profile__title', infoSelector: '.profile__description' });

/* Можно лучше: не стоит выносить в утилитарные методы функциональность, относящуюся непосредственно к какому-то опредленному классу
   Вероятно, тут лучшим решением будет создать файл с утилитами непосредственно на одном уровне с классом Card  */
export const renderCard = (data, wrap) => {
    const card = new Card(data, cardSelector, () => popupWithImage.open(data.link, data.name));
    wrap.prepend(card.getView());
};

/* Надо исправить: следует разместить данные методы в соответсвующих классах.
   Также, первый метод наполовину дублируется в соответсвующем классе */

export const cardFormSubmitHandler = (evt) => {
    evt.preventDefault();
    renderCard({
        name: cardNameInputValue.value,
        link: cardLinkInputValue.value
    }, placesWrap);
    popupAddCard.close(cardFormModalWindow);
};

export const profileFormSubmitHandler = (evt) => {
    evt.preventDefault();
    userInfo.setUserInfo(titleInputValue.value, descriptionInputValue.value);
    profileEditCard.close(editFormModalWindow);
};
