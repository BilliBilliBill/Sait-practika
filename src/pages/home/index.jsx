import React, { Component } from 'react'
import './style.scss'
import { Container, Row, Col, Form } from 'react-bootstrap'

export default class HomePage extends Component {
  render() {
    return (
      <Container fluid className="p-0" style={{ overflowX: 'hidden' }}>
        <div className="GYMSTRONG" style={{ marginTop: '100px' }}>
          <Container>
            <Row className="gx-5">
              <Col>
                <div className="p-2">
                  <h1>ОДНА ИЗ ЛУЧШИХ КОФЕЕН В ВАШЕМ РОДНОМ ГОРОДЕ</h1>
                  <h3>
                    Мы знаем, что такое долг перед обществом, и считаем, что
                    элита,<br></br> занимающаяся сбором средств, должна<br></br>{' '}
                    выполнять свои обязанности, не прибегая к помощи других
                    людей.
                  </h3>
                </div>
              </Col>
              <Col>
                <div className="p-2 text-end">
                  <img
                    src="/images/1.png"
                    width="350"
                    height="400"
                    alt="Coffee"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="d-flex justify-content-center">
          <img
            className="img1"
            src="/images/2.png"
            style={{ marginBottom: '5px', marginTop: '85px', width: '100%' }}
            alt="Coffee Image"
          />
        </div>

        <div>
          <img
            className="img1"
            src="/images/3.png"
            style={{
              marginBottom: '5px',
              marginTop: '85px',
              width: '100%',
            }}
            alt="Coffee Image"
          />
        </div>

        <div
          className="grid-container"
          style={{ marginLeft: '25px', marginTop: '85px', width: '100%' }}
        >
          <Row>
            <Col>
              <div className="grid-item d-none d-sm-block">
                <h2>Сильная команда</h2>
                <h4>
                  Мощная команда
                  <br />
                  профессионалов
                  <br />
                  увлеченных кофе
                </h4>
              </div>
            </Col>
            <Col>
              <div className="grid-item d-none d-sm-block">
                <h2>Выбираем лучшее</h2>
                <h4>
                  Выбираем из множества
                  <br />
                  образцов от фермеров и<br />
                  трейдеров, оценивая
                  <br />
                  потенциал вкуса.
                </h4>
              </div>
            </Col>
            <Col>
              <div className="grid-item d-none d-sm-block">
                <h2>Индивидуальность</h2>
                <h4>
                  Индивидуальный
                  <br />
                  профиль обжарки для
                  <br />
                  каждого вида кофе чтобы
                  <br />
                  полностью раскрыть
                  <br />
                  богатство вкуса.
                </h4>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={8}>
              <div className="grid-item img-container">
                <img
                  className="img1"
                  src="/images/image 1 (1).png"
                  style={{ marginBottom: '5px', width: '100%' }}
                  alt="Coffee Image"
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="grid-item">
                <h2>Гарантия качества</h2>
                <h4>
                  Вернём деньги, если
                  <br />
                  кофе не понравиться. Мы
                  <br />
                  уверены в качестве
                  <br />
                  нашего продукта. Но
                  <br />
                  ощущение вкуса
                  <br />
                  субъективно.
                </h4>
              </div>
            </Col>
          </Row>
        </div>

        <div className="d-flex justify-content-center">
          <img
            className="img1"
            src="/images/Group 120.png"
            style={{
              width: '90%',
              marginTop: '85px',
            }}
            alt="Coffee Image"
          />
        </div>
      </Container>
    )
  }
}
