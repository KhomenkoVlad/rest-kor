import { mainImages } from '../../assets/images';

export const Contact = () =>
  <>
    <section className='contact-background'>
      <img className='background-image parallax-background' src={mainImages.backgroundMain} />
      <h1 className='background-page-capture'>Контакты</h1>
    </section>
    <main className='content contact'>
      <section className='section-wraper'>
        <h2 className='contact-locate__caption'>Месторасположение</h2>
        <div className='contact-locate'>
          <article className='contact-locate__info'>
            <p>г. Одесса, ул. Тенистая, 9/11</p>
            <p>emailname@gmail.com</p>
            <p>Ежедневно 11:00 - 22:00</p>
            <h3>Сдедите за нами в сети</h3>
            <ul className='contact-locate__list'>
              <li><a className='contact-locate__link' href="https://google.com">Facebook</a></li>
              <li><a className='contact-locate__link' href="https://google.com">Instagram</a></li>
              <li><a className='contact-locate__link' href="https://google.com">Tripadvisor</a></li>
            </ul>
          </article>
          <iframe className='contact-locate__map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14322.791442374591!2d30.74078053124304!3d46.48086662011819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suk!2sua!4v1613227391183!5m2!1suk!2sua" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
      </section>
      <section className='section-wraper contact-order'>
        <h2 className='contact-locate__caption'>Как сделать заказ</h2>
        <article>
          <h3>Закажите по телефону</h3>
          <ul className='contact-order__list'>
            <li><a className='contact-order__link' href="tel:+380681234567">+380681234567</a></li>
            <li><a className='contact-order__link' href="tel:+380931234567">+380931234567</a></li>
          </ul>
        </article>
        <article>
          <h3>Закажите в удобном вам мессенджере</h3>
          <ul className='contact-order__list'>
            <li><a className='contact-order__link' href="https://google.com">Telegram</a></li>
            <li><a className='contact-order__link' href="https://google.com">Viber</a></li>
          </ul>
        </article>
        <article>
          <h3>Закажите на специальном сайте</h3>
          <a className='contact-order__link' href="https://google.com">www.google.com</a>
        </article>
      </section>
    </main>
  </>
