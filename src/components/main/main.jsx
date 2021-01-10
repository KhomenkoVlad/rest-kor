import { Background } from './background/background';
import { QuickMenu } from './quickMenu/quickMenu';

export const Main = () =>
  <>
    <main className='layer-main'>
      <Background />
      <section className='layer content'>
        <QuickMenu />
      </section>
    </main>
  </>