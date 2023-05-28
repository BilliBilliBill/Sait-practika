import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
export const FooterPage = () => {
  return (
    <div className={'footer'}>
      <div className={'footer__menu'}>
        <p className="alignright">
          <img src={'/assest/MAROON.png'} />
        </p>
        <p className={'str'}>
          <Link to={'/'}>Главная </Link>
        </p>
        <p className={'str'}>
          <Link to={'/ONas'}>О нас </Link>
        </p>
        <p className={'str'}>
          <Link to={'/Skidki'}>Скидки </Link>
        </p>
        <p className={'str'}>
          <Link to={'/contact'}>Контакты</Link>
        </p>
        <p className={'str'}>
          <Link to={'/katalog'}>Каталог </Link>
        </p>
      </div>
      <div></div>
    </div>
  )
}
