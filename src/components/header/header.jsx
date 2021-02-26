import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t, i18n } = useTranslation();
  let currentLanguage = localStorage.getItem('i18nextLng');

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);

    const languageButtons = document.getElementsByClassName('navigation-lang__item');
    for (let element of languageButtons) {
      if (element.classList.contains('navigation-lang__item_active')) {
        element.classList.remove('navigation-lang__item_active');
        break;
      }
    };
    const thisButton = document.getElementById(language);
    thisButton.classList.add('navigation-lang__item_active');
  }

  window.addEventListener('load', () => {
    const languageButtons = document.getElementsByClassName('navigation-lang__item');
    const languageInLocalStorage = localStorage.getItem('i18nextLng');
    for (let element of languageButtons) {
      if (languageInLocalStorage.includes(element.id)) {
        changeLanguage(element.id);
        break;
      }
    };
  });

  return (
    <header className="header">
      <nav>
        <ul className="navigation">
          <li className="navigation__item"><NavLink exact to='/' className='link navigation__link' activeClassName="navigation__link_active">{t('header.home')}</NavLink></li>
          <li className="navigation__item"><NavLink to='/menu' className='link navigation__link' activeClassName="navigation__link_active">{t('header.menu')}</NavLink></li>
          <li className="navigation__item"><NavLink to='/about' className='link navigation__link' activeClassName="navigation__link_active">{t('header.about')}</NavLink></li>
          <li className="navigation__item"><NavLink to='/contact' className='link navigation__link' activeClassName="navigation__link_active">{t('header.contact')}</NavLink></li>
          <li className="navigation-lang">
            <div id='language-label' className="link navigation__item navigation__link navigation-lang__label">{currentLanguage}</div>
            <ul className="navigation-lang-list">
              <button id='uk' className="link navigation-lang__item" onClick={() => changeLanguage("uk")}>UK</button>
              <button id='ru' className="link navigation-lang__item" onClick={() => changeLanguage("ru")}>RU</button>
              <button id='en' className="link navigation-lang__item" onClick={() => changeLanguage("en")}>EN</button>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}