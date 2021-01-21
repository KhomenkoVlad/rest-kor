import { NavLink } from 'react-router-dom';
import { mainImages } from '../../../assets/images';

export const SideNav = () => <>
  <aside className='menu-side'>
    <input type="checkbox" id="menu-side-nav__checkbox" />
    <label className='menu-side-nav__checkbox-toggle' htmlFor="menu-side-nav__checkbox"></label>
    <nav className='menu-side-nav'>
      <h2 className="menu-side-nav__caption">Категории меню</h2>
      <ul className="menu-side-nav__list">
        <li className="menu-side-nav__item">
          <NavLink to='/menu/2' className="menu-side-nav__link" activeClassName="menu-side-nav__link_active" style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
            <div className="menu-side-nav__link-area">
              <h3 className="menu-side-nav__link-caption">1111</h3>
            </div>
          </NavLink>
        </li>
        <li className="menu-side-nav__item">
          <NavLink to='/menu/1' className="menu-side-nav__link" activeClassName="menu-side-nav__link_active" style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
            <div className="menu-side-nav__link-area">
              <h3 className="menu-side-nav__link-caption">1111</h3>
            </div>
          </NavLink>
        </li>
        <li className="menu-side-nav__item">
          <NavLink to='/menu/1' className="menu-side-nav__link" activeClassName="menu-side-nav__link_active" style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
            <div className="menu-side-nav__link-area">
              <h3 className="menu-side-nav__link-caption">1111</h3>
            </div>
          </NavLink>
        </li>
        <li className="menu-side-nav__item">
          <NavLink to='/menu/1' className="menu-side-nav__link" activeClassName="menu-side-nav__link_active" style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
            <div className="menu-side-nav__link-area">
              <h3 className="menu-side-nav__link-caption">1111</h3>
            </div>
          </NavLink>
        </li>
        <li className="menu-side-nav__item">
          <NavLink to='/menu/1' className="menu-side-nav__link" activeClassName="menu-side-nav__link_active" style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
            <div className="menu-side-nav__link-area">
              <h3 className="menu-side-nav__link-caption">1111</h3>
            </div>
          </NavLink>
        </li>
        <li className="menu-side-nav__item">
          <NavLink to='/menu/1' className="menu-side-nav__link" activeClassName="menu-side-nav__link_active" style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
            <div className="menu-side-nav__link-area">
              <h3 className="menu-side-nav__link-caption">1111</h3>
            </div>
          </NavLink>
        </li>
        <li className="menu-side-nav__item">
          <NavLink to='/menu/1' className="menu-side-nav__link" activeClassName="menu-side-nav__link_active" style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
            <div className="menu-side-nav__link-area">
              <h3 className="menu-side-nav__link-caption">1111</h3>
            </div>
          </NavLink>
        </li>
        <li className="menu-side-nav__item">
          <NavLink to='/menu/1' className="menu-side-nav__link" activeClassName="menu-side-nav__link_active" style={{ backgroundImage: `url('${mainImages.menuBackgroundSoup}')` }}>
            <div className="menu-side-nav__link-area">
              <h3 className="menu-side-nav__link-caption">1111</h3>
            </div>
          </NavLink>
        </li>

      </ul>
    </nav>
  </aside></>