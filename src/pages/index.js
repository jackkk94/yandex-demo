import './index.css';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';

import {
  initialCards,
  placesWrap,
  editFormModalWindow,
  cardFormModalWindow,
  openEditFormButton,
  openCardFormButton,
  titleInputValue,
  descriptionInputValue,
  cardSelector,
  defaultFormConfig
} from '../utils/constants.js';

import { renderCard, cardFormSubmitHandler, profileFormSubmitHandler } from '../utils/Utils.js';
import PopupWithForm from '../components/PopupWithForm.js';

const popupWithImage = new PopupWithImage('.popup_type_image');
const popupCardAdd = new PopupWithForm('.popup_type_new-card', cardFormSubmitHandler);
const popupEditProfile = new PopupWithForm('.popup_type_edit', profileFormSubmitHandler);
const userInfo = new UserInfo({ nameSelector: '.profile__title', infoSelector: '.profile__description' });


popupWithImage.setEventListeners();
popupCardAdd.setEventListeners();
popupEditProfile.setEventListeners();

openCardFormButton.addEventListener('click', () => {
  popupCardAdd.open();
})

openEditFormButton.addEventListener('click', () => {
  const { profileTitle, profileDescription } = userInfo.getUserInfo();
  titleInputValue.value = profileTitle;
  descriptionInputValue.value = profileDescription;

  popupEditProfile.open();
})

const cardSection = new Section({
  items: initialCards,
  renderer: item => renderCard(item, placesWrap)
}, cardSelector);

cardSection.renderItems();

const editFormValidator = new FormValidator(defaultFormConfig, editFormModalWindow);
const cardFormValidator = new FormValidator(defaultFormConfig, cardFormModalWindow);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

/* Надо исправить: все написано отлично, однако почему-то этот файл форматирован
   двумя пробелами, зотя остальные js файлы четырьмя */
