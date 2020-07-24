
export default class UserInfo {
    constructor(
        { nameSelector, infoSelector }
    ) {
        this._nameSelector = document.querySelector(nameSelector);
        this._infoSelector = document.querySelector(infoSelector);
    }

    getUserInfo() {
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