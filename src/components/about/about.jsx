import { mainImages } from '../../assets/images';
import { Cook } from './cook/cook';
import { Gallery } from './gallery/gallery';

export const About = () =>
  <>
    <section className='about-background'>
      <img className='background-image parallax-background' src={mainImages.backgroundMain} />
      <h1 className='background-page-capture'>О Нас</h1>
    </section>
    <main className='content about'>
      <Cook />
      <Gallery />
    </main>
  </>
