import { Link } from 'react-router-dom';
import { mainImages } from '../../../assets/images';

export const QuickMenu = () =>
  <section className='quick-menu'>
    <h2 className='quick-menu__caption'>Меню</h2>
    <Link to='/menu/1' className='link quick-menu__link' style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
      <span className='quick-menu__text'>Супы</span>
    </Link>
    <Link to='/menu/2' className='link quick-menu__link' style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
      <span className='quick-menu__text'>Горячие блюда</span>
    </Link>
    <Link to='/menu/3' className='link quick-menu__link' style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
      <span className='quick-menu__text'>Блюда во фритюре</span>
    </Link>
    <Link to='/menu/4' className='link quick-menu__link' style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
      <span className='quick-menu__text'>Лапша</span>
    </Link>
    <Link to='/menu/5' className='link quick-menu__link' style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
      <span className='quick-menu__text'>Салаты</span>
    </Link>
    <Link to='/menu/6' className='link quick-menu__link' style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
      <span className='quick-menu__text'>Суши</span>
    </Link>
  </section>