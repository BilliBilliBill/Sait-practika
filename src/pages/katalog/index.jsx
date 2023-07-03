import './style.scss'
import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

export default class CatalogPage extends Component {
  render() {
    return (
      <Container fluid className="p-0" style={{ overflowX: 'hidden' }}>
        <h2 className="text-center">КАТАЛОГ ТОВАРОВ</h2>
        <Container style={{ marginTop: '45px' }}>
          <Row className="gx-4 gy-4">
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Card.Img variant="top" src="/images/milano712.png" />
                <Card.Body>
                  <Card.Title>MILANO (712)</Card.Title>
                  <Card.Text>
                    темный шоколад, карамель, фундук. бленд Бразилия, Вьетнам
                    робуста 50%
                  </Card.Text>
                  <Button variant="primary">Купить</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Card.Img variant="top" src="/images/BRAZIL SANTOS 347.png" />
                <Card.Body>
                  <Card.Title>БРАЗИЛИЯ САНТОС 17/18</Card.Title>
                  <Card.Text>
                    шоколад, карамель, орех<br></br>
                    <br></br>
                    <br></br>
                  </Card.Text>
                  <Button variant="primary">Купить</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Card.Img variant="top" src="/images/311.png" />
                <Card.Body>
                  <Card.Title>БРАЗИЛИЯ ИПАНЕМА ДУЛЬЧЕ</Card.Title>
                  <Card.Text>
                    нектарин, карамель, миндаль, шоколад. Высокая сладость.
                    <br></br>
                    <br></br>
                  </Card.Text>
                  <Button variant="primary">Купить</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Card.Img variant="top" src="/images/DESIRE DARK 800.png" />
                <Card.Body>
                  <Card.Title>DESIRE DARK 800</Card.Title>
                  <Card.Text>
                    темный шоколад, сухофрукты, миндаль. бленд Эфиопия, Вьетнам
                    робуста 40%
                  </Card.Text>
                  <Button variant="primary">Купить</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Card.Img variant="top" src="/images/DEVIL ENERGY 800.png" />
                <Card.Body>
                  <Card.Title>DEVIL ENERGY 800</Card.Title>
                  <Card.Text>
                    шоколад, карамель, чернослив. купаж
                    Эфиопия,Мексика,Колумбия.
                  </Card.Text>
                  <Button variant="primary">Купить</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Card.Img
                  variant="top"
                  src="/images/VIETNAM DA LAT SCREEN18 314.png"
                />
                <Card.Body>
                  <Card.Title>VIETNAM DA LAT SCREEN18 314</Card.Title>
                  <Card.Text>персик, карамель, молочный шоколад</Card.Text>
                  <Button variant="primary">Купить</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}
