import { Link } from 'react-router-dom';

export const Header = () =>
  <header className="header">
    <nav>
      <ul className="menu">
        <li className="menu__item"><Link to='/' className='menu__link'>Главная</Link></li>
        <li className="menu__item"><Link to='/menu' className='menu__link'>Меню</Link></li>
        <li className="menu__item"><Link to='/about' className='menu__link'>О Нас</Link></li>
        <li className="menu__item"><Link to='/contact' className='menu__link'>Контакты</Link></li>
      </ul>
    </nav>
  </header>