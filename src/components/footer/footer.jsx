import { mainImages } from '../../assets/images';

export const Footer = () =>
  <footer className='footer'>
    <div className='section-wraper footer-wrap'>
      <div className='footer__item footer__logo'>
        <img className='footer__logo' src={mainImages.backgroundLogo} alt="logo" />
      </div>
      <div className='footer__item'>
        <p><i className="far fa-calendar-alt"></i> Ежедневно</p>
        <p><i className="fas fa-clock"></i> 11:00 - 22:00</p>
        <p><i className="fas fa-map-marked-alt"></i> г. Одесса,<span className='footer__item_wraping' /> ул. Тенистая, 9/11</p>
      </div>
      <div className='footer__item'>
        <p>
          <i className="fas fa-phone-alt"></i>
          <a className='footer__item-link' href="tel:+380681234567">+380681234567</a> <wbr />
        </p>
        <p>
          <i className="fas fa-phone-alt"></i>
          <a className='footer__item-link' href="tel:+380931234567">+380931234567</a>
        </p>
        <p>
          <i className="fas fa-mobile-alt"></i>
          <a className='footer__item-link' href="https://google.com">www.google.com</a>
        </p>
      </div>
      <div className='footer__item'>
        <p>
          <span className="footer__social">
            <a className='footer__item-link ' href="https://google.com"><i className="fab fa-facebook"></i></a>
            <a className='footer__item-link' href="https://google.com"><i className="fab fa-viber"></i></a>
          </span>
          <span className="footer__social">
            <a className='footer__item-link' href="https://google.com"><i className="fab fa-telegram"></i></a>
            <a className='footer__item-link' href="https://google.com"><i className="fab fa-instagram"></i></a>
          </span>
        </p>
      </div>
    </div>
  </footer>