import { imageMain } from '../../assets/images';

export const Main = () =>
  <>
    <main className='layer-main'>
      <section className='layer background'>
        <div className='background__image' style={{ backgroundImage: `url('${imageMain.backgroundMain}')` }}></div>
        {/*<h1 className='background__caption'>CAFE</h1>*/}
        <img className='background__logo' src={imageMain.backgroundLogo} alt=""/>
      </section>
      <section className='layer content'>

      </section>
    </main>
  </>