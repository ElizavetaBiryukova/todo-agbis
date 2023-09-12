import { action, computed, makeAutoObservable, observable } from 'mobx'

type LanguagesMode = 'en' | 'ru'

const STORAGE_KEY = '@language'

export class Language {
    constructor() {
        makeAutoObservable(this)
    }

    @observable
    protected _languageMode: LanguagesMode = localStorage[STORAGE_KEY] || 'en'

    @computed
    get languageMode() {
        return this._languageMode
    }

    @action
    toggle() {
        switch (this._languageMode) {
            case 'ru':
                this._languageMode = 'en'
                break;

            default:
                this._languageMode = 'ru'
                break;
        }

        localStorage[STORAGE_KEY] = this._languageMode
    }

    @computed
    mode(en: string, ru: string) {
        switch (this._languageMode) {
            case 'ru':
                return ru

            default:
                return en
        }
    }
}