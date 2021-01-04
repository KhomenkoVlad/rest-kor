import { Link } from 'react-router-dom';

export const Header = () =>
  <header className="header">
    <nav>
      <ul className="menu">
        <li className="menu__item"><Link to='/' className='menu__link'>ГЛАВНАЯ</Link></li>
        <li className="menu__item"><Link to='/menu' className='menu__link'>МЕНЮ</Link></li>
        <li className="menu__item"><Link to='/about' className='menu__link'>О НАС</Link></li>
        <li className="menu__item"><Link to='/contact' className='menu__link'>КОНТАКТЫ</Link></li>
      </ul>
    </nav>
  </header>