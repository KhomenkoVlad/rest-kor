import { HomeMenu } from './homeMenu/homeMenu';
import { HomeAbout } from './homeAbout/homeAbout';
import { MakeOrder } from './makeOrder/makeOrder';
import { mainImages } from '../../assets/images';


export const Home = () =>
  <>
    <section className='home-background'>
      <img className='background-image parallax-background' src={mainImages.backgroundMain} />
      <img className='home-background__logo' src={mainImages.backgroundLogo} alt="" />
      <h1 className='home-background__caption'>Ресторан какой-то кухни</h1>
    </section>
    <main className='content'>
      <HomeAbout />
      <HomeMenu />
    </main>
  </>
