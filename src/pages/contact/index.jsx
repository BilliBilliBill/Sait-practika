import React, { Component } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import './style.scss'

export default class ContactPage extends Component {
  render() {
    return (
      <Container fluid className="p-0 " style={{ overflowX: 'hidden' }}>
        <Container>
          <Row >
            <Col md={6}>
            <h2 className="gradient-text" >ЩЕЛКОВСКАЯ</h2>
            <h3>ЛОКАЦИЯ</h3>
            <h4>
              г.Москва, Щелковское шоссе 79к1 – 5 минут от метро <br></br>
              “Щелковское”, Рядом ТРЦ “Щелковский”
            </h4>
            <h3>ЧАСЫ РАБОТЫ</h3>
            <h4>Пон.-Воскр., работаем 24/7</h4>
            <h3>ПОЗВОНИТЬ</h3>
            <h4>Моб : +7(977)147-88-42</h4>
            </Col>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa29212d06021b948f948701485f3ec52570e9c93042c640d065770b5d4ce0e76&amp;source=constructor"
              width="100%"
              height="400"
              frameborder="0"
            ></iframe>
              <Col md={6}>
            <h2 className="gradient-text">СОКОЛЬНИКИ</h2>
            <h3>ЛОКАЦИЯ</h3>
            <h4>
              г.Москва,Сокольнический вал 1а,<br></br>
              Как добраться – от метро- м. Сокольники 7 минут,<br></br> главный
              вход парка, рядом “Скейтпарк” / Батутный центр “Just jumpArena” –
              на такси<br></br> – Остановка “Музей Зил”
            </h4>
            <h3>ЧАСЫ РАБОТЫ</h3>
            <h4>Пон.-Воскр., работаем 24/7</h4>
            <h3>ПОЗВОНИТЬ</h3>
            <h4>Моб : +7(967)076‒80‒88</h4>
            </Col>
            </Row>
            <div>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad14fd4f730c4cf9c1dcc79b4d69c49e87f14274bb79acd00c56531419829ab72&amp;source=constructor"
              width="100%"
              height="400"
              frameborder="0"
            ></iframe>
          </div>
        </Container>
      </Container>
    )
  }
}
