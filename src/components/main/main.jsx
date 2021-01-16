import { Background } from './background/background';
import { QuickMenu } from './quickMenu/quickMenu';
import { MainAbout } from './mainAbout/mainAbout';
import { MakeOrder } from './makeOrder/makeOrder';
import { Footer } from '../footer/footer';

export const Main = () =>
  <>
    <main className='layer-main'>
      <Background />
      <section className='layer content'>
        <MainAbout />
        <QuickMenu />
        <Footer />
      </section>
    </main>
  </>