import { backgroundImage } from '../../../assets/images';

export const Background = () =>
  <>
    <section className='layer background'>
      <div className='background__image' style={{ backgroundImage: `url('${backgroundImage.backgroundMain}')` }}></div>
      <img className='background__logo' src={backgroundImage.backgroundLogo} alt="" />
    </section>
  </>