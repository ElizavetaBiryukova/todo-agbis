import { useTranslation } from 'react-i18next';

export const ToggleLang = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className='text-xl flex flex-col'>
            <button onClick={() => changeLanguage("en")} className='cursor-pointer'>{t("en")}</button>
            <button onClick={() => changeLanguage("ru")} className='cursor-pointer'>{t("ru")}</button>
        </div>
    )
}