import { NavLink } from 'react-router-dom';

export const Header = () =>
  <header className="header">
    <nav>
      <ul className="menu">
        <li className="menu__item"><NavLink exact  to='/' className='menu__link' activeClassName="menu__link_active">ГЛАВНАЯ</NavLink></li>
        <li className="menu__item"><NavLink to='/menu' className='menu__link' activeClassName="menu__link_active">МЕНЮ</NavLink></li>
        <li className="menu__item"><NavLink to='/about' className='menu__link' activeClassName="menu__link_active">О НАС</NavLink></li>
        <li className="menu__item"><NavLink to='/contact' className='menu__link' activeClassName="menu__link_active">КОНТАКТЫ</NavLink></li>
      </ul>
    </nav>
  </header>