import './style.scss'
import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

export default class CatalogPage extends Component {
  render() {
    return (
      <Container fluid className="p-0 " style={{ overflowX: 'hidden' }}>
        <Card>

            <img src="/images/A1.png" alt="Equipment" className="img-fluid" />
            <img src="/images/A2.png" alt="Equipment" className="img-fluid" />
        </Card>
        <h4 className="text-center " style={{ marginTop: '45px' }}>
          Акционные Кейсы клуба на Пк <br></br> <br></br>Акции клуба актуальны на весь 2023 год.
          Действуют только в<br></br> клубе на Щелковской. Об изменениях условий и форм
          акций вы<br></br> всегда можете узнать в наших социальных сетях и у админов<br></br>
          клуба. При активации кейса не забывайте сообщить админу<br></br> кодовое слово.
        </h4>
        <Container className="bg-blue" style={{ marginTop: '45px' }}>
          <Row className="gx-4 gy-4 ">
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Card.Body>
                  <Card.Title className="promotion-title text-center">
                    #Киберканикулы
                  </Card.Title>
                  <Card.Text className="promotion-price text-center">
                    270 Руб
                  </Card.Text>
                  <Card.Text>
                    4 часа игры. Акция действует только для школьников в период
                    каникул. Щелковское
                  </Card.Text>
                  <Button variant="primary">Кодовое слово</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Card.Body>
                  <Card.Title className="promotion-title text-center">
                    #КиберШок
                  </Card.Title>
                  <Card.Text className="promotion-price text-center">
                    280 Руб
                  </Card.Text>
                  <Card.Text>
                    3 часа игры Акция действует с пон по пят., в будние дни С
                    10:00 до 17:00 Щелковское
                  </Card.Text>
                  <Button variant="primary">Кодовое слово</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Card.Body>
                  <Card.Title className="promotion-title text-center">
                    #КиберУтро
                  </Card.Title>
                  <Card.Text className="promotion-price text-center">
                    210 Руб
                  </Card.Text>
                  <Card.Text>
                    4 часа игры. Акция действует с пон. по воскр. 07:00 утра до
                    11:00. Щелковское
                  </Card.Text>
                  <Button variant="primary">Кодовое слово</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Card.Body>
                  <Card.Title className="promotion-title text-center">
                    #КиберПушка
                  </Card.Title>
                  <Card.Text className="promotion-price text-center">
                    380 Руб
                  </Card.Text>
                  <Card.Text>
                    5 часов игры. Акция действует в будние дни с 13:00 - 18:00.
                    м.Щелковское
                  </Card.Text>
                  <Button variant="primary">Кодовое слово</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Card.Body>
                  <Card.Title className="promotion-title text-center">
                    #CyberGirl
                  </Card.Title>
                  <Card.Text className="promotion-price text-center">
                    Free Руб
                  </Card.Text>
                  <Card.Text>
                    Весь день игры за компом для девчонок - бесплатно по средам
                    с 12:00 - 15:00. Сокольники , Щелковское
                  </Card.Text>
                  <Button variant="primary">Кодовое слово</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <div style={{ marginTop: '45px' }}>
          <img src="/images/бронь.png" width="100%" />
        </div>
        <div>
          <h3 className="text-center" style={{ marginTop: '45px' }}>
            Акционные Кейсы клуба на аренду ТВ<br></br><br></br> Акции клуба актуальны на весь
            2023 год. Акции действуют<br></br> только в клубе на Щелковской-Сокольники.
            Об изменениях <br></br>условий и форм акций вы всегда можете узнать в наших<br></br>
            социальных сетях и у админов клуба. При активации кейса не<br></br> забывайте
            сообщить админу кодовое слово
          </h3>
        </div>
      </Container>
    )
  }
}
