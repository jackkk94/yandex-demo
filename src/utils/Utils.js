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


export const renderCard = (data, wrap) => {
    const card = new Card(data, cardSelector, () => popupWithImage.open(data.link, data.name));
    wrap.prepend(card.getView());
};

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
