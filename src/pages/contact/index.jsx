import './style.scss'

const ContactPage = () => {
  return (
    <div className="contacts">
      <div className="contacts_header">
        <div className="medium-text1">MarooN</div>
        <div className={'contact1'}>
          <img className={'Cont11'} src={'/images/Rectangle 38.png'}></img>
          <div className={'Contacti11'}>Контакты</div>
          <div className={'naz11'}>Адрес</div>
          <div className={'tex11'}> ул. Большая Конюшенная, 19</div>
          <div className={'naz11'}>Телефон</div>
          <div className={'tex11'}>+7 (923) 888-90-60</div>
          <div className={'naz11'}>E-mail</div>
          <div className={'tex11'}>info@maroon.ru</div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
