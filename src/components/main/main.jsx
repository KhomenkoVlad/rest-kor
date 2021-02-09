import { Background } from './background/background';
import { QuickMenu } from './quickMenu/quickMenu';
import { MainAbout } from './mainAbout/mainAbout';
import { MakeOrder } from './makeOrder/makeOrder';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';


export const Home = () =>
  <>
    <div className='layer-main'>
    <Background />
    <main className='layer content'>
      <MainAbout />
      <QuickMenu />
      <Footer />
    </main>
    </div>
    {mainScript()}
  </>

const mainScript = () => {
  /*window.addEventListener('load', () => {
    document.body.addEventListener('change', () => {
      header.classList.add('header__main-page');
    });
  });*/
  //let header = document.getElementById('header');

  /*window.addEventListener('load', () => {
    let mainLink = document.getElementById('nav-main-id');
    header.style.position = 'fixed';
    
    document.body.addEventListener('click', () => {
      if (mainLink.classList.contains('navigation__link_active')) {
        header.style.position = 'fixed';
      } else {
        header.style.position = 'sticky';
      }
    });
  });*/
}  