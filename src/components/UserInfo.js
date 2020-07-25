
export default class UserInfo {
    constructor(
        { nameSelector, infoSelector }
    ) {
        this._nameSelector = document.querySelector(nameSelector);
        this._infoSelector = document.querySelector(infoSelector);
    }

    getUserInfo() {
        /* Можно лучше: можно сразу возвращать готовый объект, не объявляя лишние переменные */
        const profileTitle = this._nameSelector.textContent;
        const profileDescription = this._infoSelector.textContent;

        return {
            profileTitle,
            profileDescription
        }
    }

    setUserInfo(profileTitle,profileDescription) {
        this._nameSelector.textContent = profileTitle;
        this._infoSelector.textContent = profileDescription;
    }
}

/* Можно лучше: исправить форматирование - лишняя строчка в начале файла, нет пустой строчки в конце файла,
   кое-где не хватает пробелов (например, в сигнатуре функции setUserInfo) */
