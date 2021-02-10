import { Link } from 'react-router-dom';
import { mainImages } from '../../../assets/images';

export const HomeMenu = () =>
  <section className='home-menu'>
    <h2 className='caption home-menu__caption'>Меню</h2>
    <div  className='home-menu_wrapper'>
      <Link to='/menu/1' className='link home-menu__link' style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
        <span className='home-menu__text'>Супы</span>
      </Link>
      <Link to='/menu/2' className='link home-menu__link' style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
        <span className='home-menu__text'>Горячие блюда</span>
      </Link>
      <Link to='/menu/3' className='link home-menu__link' style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
        <span className='home-menu__text'>Блюда во фритюре</span>
      </Link>
      <Link to='/menu/4' className='link home-menu__link' style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
        <span className='home-menu__text'>Лапша</span>
      </Link>
      <Link to='/menu/5' className='link home-menu__link' style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
        <span className='home-menu__text'>Салаты</span>
      </Link>
      <Link to='/menu/6' className='link home-menu__link' style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
        <span className='home-menu__text'>Суши</span>
      </Link>
    </div>
  </section>