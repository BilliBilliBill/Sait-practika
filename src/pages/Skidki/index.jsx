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
                <span>*****</span>
              </div>
              <div className="review-content">
                <h4>Елена Разуваева</h4>
                <p>
                  Отличный кофе и чай тоже, внимательные сотрудники, всегда
                  подскажут если что-то не понятно и дадут совет .Огромное
                  спасибо. удачи
                </p>
              </div>
            </div>

            <div className="review-wrapper">
              <div className="review-rating">
                <span>***</span>
              </div>
              <div className="review-content">
                <h4>Владимир Иванов</h4>
                <p>
                  не понравилось. 1. не пришел товар. 2. не возвращают деньги 3.
                  никакой обратной связи. Семь раз подумайте, прежде чем
                  связываться с этой компанией.
                </p>
              </div>
            </div>

            <div className="review-wrapper">
              <div className="review-rating">
                <span>*****</span>
              </div>
              <div className="review-content">
                <h4>79172097254@1coffee.ru</h4>
                <p>
                  Именно этот чай напомнил настоящий чай ассам, который я
                  заказывал из Индии. При открытии упаковки чувствуется аромат,
                  что говорит о качестве чая. Готовый чай наполняет кухню
                  приятными ароматами чая. Вкус фруктовый приятный, доставляет
                  удовольствие. Перепробовав большое количество разных чаёв,
                  надо прикупить ещё этого чая.
                </p>
              </div>
            </div>

            <div className="review-wrapper">
              <div className="review-rating">
                <span>*****</span>
              </div>
              <div className="review-content">
                <h4>Ирина Жаданова</h4>
                <p>
                  Чай заказываю уже несколько раз. Мягкий вкус, без горчинки.
                  Ароматный. Цвет насыщенно красный.
                </p>
              </div>
            </div>

            <div className="review-wrapper">
              <div className="review-rating">
                <span>*****</span>
              </div>
              <div className="review-content">
                <h4>Михаил</h4>
                <p>
                  Хороший вариант для эспрессо: плотный, насыщенный яркий вкус
                  какао и сладковатая кислинка. С молоком горчинка смягчилась,
                  но ярко выраженный вкус какао-бобов остался. Рекомендую!
                </p>
              </div>
            </div>
            <div className="review-wrapper" >
              <div className="review-rating">
                <span>*****</span>
              </div>
              <div className="review-content">
                <h4>Игорь</h4>
                <p>
                  Готовлю в эспрессо. Гармоничное сочетание. Легкая горчинка,
                  так же, легкая кислинка на заднем плане, но самое
                  запоминающееся - это слегка терпкий, цветочный аромат, в меру
                  сладкий, который мне очень пришелся по вкусу! Из имеющихся
                  сортов у меня в наличии, когда я вновь пробую Сидамо, это как
                  с хорошим другом, которого понимаешь с полуслова
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    )
  }
}
