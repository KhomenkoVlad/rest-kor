import { Link, NavLink } from 'react-router-dom';
import { mainImages } from '../../../assets/images';

export const Catalog = (menuTypeName) =>
  <>
    <article className='menu-catalog-item'>
      <img className='menu-catalog-item__image' src={mainImages.menuBackgroundSoup} alt=""/>
      <h4>Название</h4>
      <div>Mauris in varius dui. Praesent ex purus, pretium nec sollicitudin a, dignissim sit amet ante. Vivamus sem tortor, placerat ac eleifend scelerisque, pretium eu risus. Integer eget tortor mi. Etiam scelerisque mi vel lacus scelerisque congue. </div>
    </article>
    <article className='menu-catalog-item'>
      <img className='menu-catalog-item__image' src={mainImages.menuBackgroundSoup} alt=""/>
      <h4>Название</h4>
      <div>Mauris in varius dui. Praesent ex purus, pretium nec sollicitudin a, dignissim sit amet ante. Vivamus sem tortor, placerat ac eleifend scelerisque, pretium eu risus. Integer eget tortor mi. Etiam scelerisque mi vel lacus scelerisque congue. </div>
    </article>
    <article className='menu-catalog-item'>
      <img className='menu-catalog-item__image' src={mainImages.menuBackgroundSoup} alt=""/>
      <h4>Название</h4>
      <div>Mauris in varius dui. Praesent ex purus, pretium nec sollicitudin a, dignissim sit amet ante. Vivamus sem tortor, placerat ac eleifend scelerisque, pretium eu risus. Integer eget tortor mi. Etiam scelerisque mi vel lacus scelerisque congue. </div>
    </article>
    <article className='menu-catalog-item'>
      <img className='menu-catalog-item__image' src={mainImages.menuBackgroundSoup} alt=""/>
      <h4>Название</h4>
      <div>Mauris in varius dui. Praesent ex purus, pretium nec sollicitudin a, dignissim sit amet ante. Vivamus sem tortor, placerat ac eleifend scelerisque, pretium eu risus. Integer eget tortor mi. Etiam scelerisque mi vel lacus scelerisque congue. </div>
    </article>
  </>

const catalogMenuType = (menuTypeName) => {
  <article className='menu-catalog-item'>
    <p>{menuTypeName}</p>
  </article>
}

