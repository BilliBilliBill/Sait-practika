import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './style.scss'

export default class SkidkiPage extends Component {
  render() {
    return (
      <Container fluid className="p-0" style={{ overflowX: 'hidden' }}>
        <h2 className="text-center">ОТЗЫВЫ</h2>
        <div style={{ marginTop: '5px' }}></div>
        <Container style={{ background: '#FFFFFF' }}>
          <div className="p-3">
            <div className="review-wrapper">
              <div className="review-rating">
              <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span> 
              </div>
              <div className="review-content">
                <h4>Елена Разуваева</h4>
                <p>
                 внимательные сотрудники, всегда
                  подскажут если что-то не понятно и дадут совет .Огромное
                  спасибо. удачи
                </p>
              </div>
            </div>

            <div className="review-wrapper">
              <div className="review-rating">
              <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span> 
              </div>
              <div className="review-content">
                <h4>Владимир Иванов</h4>
                <p>
                  1. не возвращают деньги 2.
                  никакой обратной связи. Семь раз подумайте, прежде чем
                  связываться с этой компанией.
                </p>
              </div>
            </div>

            <div className="review-wrapper">
              <div className="review-rating">
              <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span> 
              </div>
              <div className="review-content">
                <h4>79172097254@1coffee.ru</h4>
                <p>
                Можно посидеть поиграть в общем зале, компы достаточно мощные и цена маленькая, интерьер приятен глазу, если же хотите комп помощнее или посидеть отдельно от незнакомых людей, впринципе вариант есть пойти в vip зал
                </p>
              </div>
            </div>

            <div className="review-wrapper">
              <div className="review-rating">
              <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span> 
              </div>
              <div className="review-content">
                <h4>Ирина Жаданова</h4>
                <p>
                Эта сеть очень популярная и точки есть по всей России и даже в Беларуси, однозначно 10/10
Советую сходить в любой из клубов рядом с домом или работой, вам однозначно зайдет атмосфера. Я рада что не поленилась и зашла в этот клуб

                </p>
              </div>
            </div>

            <div className="review-wrapper">
              <div className="review-rating">
              <span>&#9733;&#9734;&#9734;&#9734;&#9734;</span> 
              </div>
              <div className="review-content">
                <h4>Михаил</h4>
                <p>
                Мошеннические действия управляющего
[ФИО вырезано модератором] - управляющее лицо в киберспортивных клубах Colizeum по г. Екатеринбург, заключил со мной
и с другими людьми договора инвестирования/займа - сумма хищения у меня составляет 390 т. р.

                </p>
              </div>
            </div>
            <div className="review-wrapper" >
              <div className="review-rating">
              <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span> 
              </div>
              <div className="review-content">
                <h4>Игорь</h4>
                <p>
                Клуб организует регулярные турниры и соревнования для всех уровней игроков, что позволяет испытать свои силы и получить новый игровой опыт.Я рекомендую этот клуб всем, кто ищет качественное игровое пространство в России.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    )
  }
}
