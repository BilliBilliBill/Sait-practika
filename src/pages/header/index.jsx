import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export const HeaderPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogoClick = () => {
    if (window.innerWidth <= 1200) {
      handleMenuToggle()
    }
  }

  return (
    <div className="header">
      <div className="header__logo" onClick={handleLogoClick}>
        <img src="/assest/logo.svg" alt="Logo" />
      </div>
      <div className={`header__menu ${isMenuOpen ? 'open' : ''}`}>
        <div>
          <Link to="/" onClick={handleMenuToggle}>
            Главная
          </Link>
        </div>
        <div>
          <Link to="/ONas" onClick={handleMenuToggle}>
            О нас
          </Link>
        </div>
        <div>
          <Link to="/Skidki" onClick={handleMenuToggle}>
            Скидки
          </Link>
        </div>
        <div>
          <Link to="/contact" onClick={handleMenuToggle}>
            Контакты
          </Link>
        </div>
        <div>
          <Link to="/katalog" onClick={handleMenuToggle}>
            Каталог
          </Link>
        </div>
      </div>
      <div className="header__icons">
        <div
          className={`header__burger-menu ${isMenuOpen ? 'visible' : ''}`}
          onClick={handleMenuToggle}
        >
          <div>
            <img src="/assest/logo2.svg" alt="Logo2" />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
