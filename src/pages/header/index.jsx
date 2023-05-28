import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

export const HeaderPage = () => {
  return (
    <div className={'header'}>
      <div className={'header__logo'}>
        <img src={'/assest/logo.svg'} />
      </div>
      <div className={'header__menu'}>
        <div>
          <Link to={'/'}>Главная </Link>
        </div>
        <div>
          <Link to={'/ONas'}>О нас </Link>
        </div>
        <div>
          <Link to={'/Skidki'}>Скидки </Link>
        </div>
        <div>
          <Link to={'/contact'}>Контакты</Link>
        </div>
        <div>
          <Link to={'/katalog'}>Каталог </Link>
        </div>
      </div>
      <div className={'header__icons'}>
        <div>
          <img src={'/assest/logo2.svg'} />
        </div>
        <div>
          <img src={'/assest/logo3.svg'} />
        </div>
      </div>
    </div>
  )
}
