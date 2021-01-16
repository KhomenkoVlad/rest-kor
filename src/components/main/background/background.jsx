import { mainImages } from '../../../assets/images';

export const Background = () =>
  <>
    <section className='layer background'>
      <div className='background__image' style={{ backgroundImage: `url('${mainImages.backgroundMain}')` }}></div>
      <img className='background__logo' src={mainImages.backgroundLogo} alt="" />
    </section>
  </>