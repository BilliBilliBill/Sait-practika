import './style.scss'

const ContactPage = () => {
  return (
    <div className="contact">
      <div className="contacts_header">
        <div className="medium-text1">MarooN</div>
        <div className={'contact1'}>
          <img className={'Cont1'} src={'/images/Rectangle 38.png'}></img>
          <div className={'Contacti1'}>Контакты</div>
          <div className={'naz1'}>Адрес</div>
          <div className={'tex1'}> ул. Большая Конюшенная, 19</div>
          <div className={'naz1'}>Телефон</div>
          <div className={'tex1'}>+7 (923) 888-90-60</div>
          <div className={'naz1'}>E-mail</div>
          <div className={'tex1'}>info@maroon.ru</div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
