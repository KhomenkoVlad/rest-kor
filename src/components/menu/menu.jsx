import { Route } from 'react-router-dom';
import { SideNav } from './sideNav/sideNav';
import { Catalog } from './catalog/catalog';
import { mainImages } from '../../assets/images';

export const Menu = () =>
  <>
    <section className='menu-background'>
      <img className='background-image parallax-background' src={mainImages.backgroundMain} />
      <h1 className='background-page-capture'>Меню</h1>
    </section>

    <div className='menu-wrapper'>
      <main className='menu'>
        <SideNav />
        <section className='menu-catalog'>
          <Route exact path="/menu" />
          <Route path="/menu/1" component={() => Catalog('111111')} />
          <Route path="/menu/2" component={() => Catalog('222222')} />
        </section>
      </main>
    </div>
  </>