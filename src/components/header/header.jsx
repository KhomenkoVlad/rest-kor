import { NavLink } from 'react-router-dom';

export const Header = () =>
  <header className="header">
    <nav>
      <ul className="navigation">
        <li className="navigation__item"><NavLink exact to='/' className='link navigation__link' activeClassName="navigation__link_active">Главная</NavLink></li>
        <li className="navigation__item"><NavLink to='/menu' className='link navigation__link' activeClassName="navigation__link_active">Меню</NavLink></li>
        <li className="navigation__item"><NavLink to='/about' className='link navigation__link' activeClassName="navigation__link_active">О Нас</NavLink></li>
        <li className="navigation__item"><NavLink to='/contact' className='link navigation__link' activeClassName="navigation__link_active">Контакты</NavLink></li>
        <li className="navigation-lang">
          <div className="link navigation__link navigation-lang__item_active">UA</div>
          <ul className="navigation-lang-list">
            <li className="link navigation-lang__item">RU</li>
            <li className="link navigation-lang__item">EN</li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>