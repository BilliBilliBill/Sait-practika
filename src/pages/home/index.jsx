import React from 'react'
import './style.scss'
const HomePage = () => {
  return (
    <div className={'home'}>
      <div className={'home__header'}>
        <div className={'medium-text'}>MarooN</div>
        <div className={'medium-text-text'}>почувствуй себя леди</div>
        <button className={'but'}>Подробнее</button>
        <div className={'kartinki'}>
          <img className={'kartinki1'} src={'/images/1.png'} />
          <img className={'kartinki2'} src={'/images/2.png'} />
        </div>
        <div>
          <div className="Best">Бестселлеры</div>
          <div className="BestOp">
            Легендарные <br></br>продукты,<br></br> завоевавшие любовь<br></br>{' '}
            наших клиентов
          </div>
          <img className={'kartinki11'} src={'/images/крем_1.png'}></img>
          <img className={'kartinki12'} src={'/images/крем_2 1.png'}></img>
          <img className={'kartinki13'} src={'/images/крем_3 1.png'}></img>
          <img className={'kartinki14'} src={'/images/крем_4 1.png'}></img>
        </div>
        <div className="podpiska">
          <div className="pris">Присоединяйтесь к нам</div>
          <div className="pod">
            Подпишитесь на наш аккаунт<br></br> @marooncare <br></br>и узнавайте
            о новиках и акциях<br></br> первыми
          </div>
        </div>
        <button className={'but1'}>Подробнее</button>
        <div>
          <img className={'PrisoedFon'} src={'/images/60.png'}></img>
          <div className="Pr">Присоединяйтесь к нам</div>
          <div className="Pr1">
            Подпишитесь на наш аккаунт @marooncare<br></br> и узнавайте о
            новиках и акциях первыми
          </div>
          <img className={'g1'} src={'/images/g1.png'}></img>
          <img className={'g2'} src={'/images/g2.png'}></img>
          <img className={'g3'} src={'/images/g3.png'}></img>
          <img className={'g4'} src={'/images/g4.png'}></img>
          <img className={'g5'} src={'/images/g5.png'}></img>
          <img className={'g6'} src={'/images/g6.png'}></img>
        </div>
        <div className={'contact'}>
          <img className={'Cont'} src={'/images/Rectangle 38.png'}></img>
          <div className={'Contacti'}>Контакты</div>
          <div className={'naz'}>Адрес</div>
          <div className={'tex'}> ул. Большая Конюшенная, 19</div>
          <div className={'naz'}>Телефон</div>
          <div className={'tex'}>+7 (923) 888-90-60</div>
          <div className={'naz'}>E-mail</div>
          <div className={'tex'}>info@maroon.ru</div>
        </div>
      </div>
    </div>
  )
}
export default HomePage
