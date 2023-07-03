import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class ONasPage extends Component {
  render() {
    return (
      <Container
        fluid
        className="p-0"
        style={{ overflowX: 'hidden', background: '#F8F8F8' }}
      >
        <Row className="gx-5">
          <Col>
            <div className="p-2" style={{ marginTop: '85px', width: '100%' }}>
              <h2 className="text-start">ДАРИМ НАСТРОЕНИЕ</h2>
              <h4 className="text-start">
                Уникальность кофе Evadia заключается в особом
                <br />
                ассортименте сортов, которые отбираются с учетом
                <br />
                высоких требовний к вкусу, соотношению цены к
                <br />
                качеству. Каждый сорт кофе обжаривается с учетом своих
                <br />
                уникальных характеристик, чтобы максимально
                <br />
                раскрылся вкус напитка. Утренний кофе станет для вас
                <br />
                настоящей церемонией
              </h4>
            </div>
            <div
              className="p-2 text-end"
              style={{ marginTop: '85px', width: '100%' }}
            >
              <img
                src="../images/Screenshot_1.png"
                className="float-left"
                width="100%"
                alt="Coffee Image"
              />
            </div>
          </Col>
          <Col>
            <div
              className="p-2 text-end"
              style={{ marginTop: '85px', width: '100%' }}
            >
              <img
                src="../images/image 2.png"
                className="float-left"
                width="100%"
                alt="Coffee Image"
              />
            </div>
            <div style={{ marginTop: '85px', width: '100%' }}>
              {' '}
              <h2>
                ПОСТОЯННОЕ ИЗУЧЕНИЕ ВСЕХ ОБЛАСТЕЙ ЗНАНИЙ СВЯЗАННЫХ С КОФЕ,
                ОБОБЩЕНИЕ МИРОВОГО ОПЫТА И ПРИМЕНЕНИЯ ИННОВАЦИЙ, ПОМОГАЮТ НАМ
                МАКСИМАЛЬНО РАСКРЫТЬ БОГАТСТВО КОФЕЙНОГО ВКУСА.
              </h2>
              <h4>
                Наше современное производство расположено в ближайшем
                Подмосковье в г. Железнодорожном. Производственное планирование
                и тщательно выверенная логистика позволяют полностью отгружать
                кофе в течение первых суток с момента обжарки.
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
