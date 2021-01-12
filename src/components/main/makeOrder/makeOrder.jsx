export const MakeOrder = () =>
  <article className='orange-background make-order'>
    <h2 className='make-order__caption'>Сделать заказ</h2>
    <div className='make-order-item'>
      <h3 className='make-order-item__caption'>По Телефону:</h3>
      <a className='make-order-item__link' href="tel:+380681234567">+380 68 123 4567</a>
      <a className='make-order-item__link' href="tel:+380931234567">+380 93 123 4567</a>
    </div>
    <div className='make-order-item'>
      <h3 className='make-order-item__caption'>В приложении:</h3>
      <a className='make-order-item__link' href="https://google.com">www.google.com</a>
    </div>
  </article>