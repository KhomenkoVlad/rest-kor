import { mainImages } from '../../../assets/images';
import { aboutImages } from '../../../assets/images';

export const Gallery = () =>
  <>
    <section className='section-wraper'>
      <h2 className='about-gallery__caption'>Галерея</h2>
      <div className='about-gallery'>
        <img className='about-gallery__image' src={mainImages.menuBackgroundSoup} />
        <img className='about-gallery__image' src={mainImages.menuBackgroundSoup} />
        <img className='about-gallery__image' src={mainImages.mainAboutImage} />
        <img className='about-gallery__image' src={mainImages.menuBackgroundSoup} />
        <img className='about-gallery__image' src={mainImages.menuBackgroundSoup} />
        <img className='about-gallery__image' src={mainImages.mainAboutImage} />
        <img className='about-gallery__image' src={aboutImages.aboutCook} />
        <img className='about-gallery__image' src={mainImages.menuBackgroundSoup} />
        <img className='about-gallery__image' src={mainImages.mainAboutImage} />
        <img className='about-gallery__image' src={mainImages.menuBackgroundSoup} />
        <img className='about-gallery__image' src={mainImages.mainAboutImage} />
      </div>
    </section>
  </>