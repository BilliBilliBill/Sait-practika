import React, { Component } from 'react'
import './style.scss'
import CarouseBox from '../../Compponents/CarouseBox'
import { Container, Row, Col } from 'react-bootstrap'


export default class HomePage extends Component {
  render() {
    return (
      <Container fluid className="p-0" style={{ overflowX: 'hidden' }}>
        <CarouseBox />
        <img
          src="/images/g.png"
          className="img-fluid"
          style={{
            width: '100%',
          }}
        />
        <div className="GYMSTRONG" style={{ marginTop: '100px' }}>
          <div className="container">
            <div className="row gx-5">
              <div className="col">
                <div className="p-3">
                  <img src="/images/gg.png" width="500" height="500" />
                </div>
              </div>
              <div className="col">
                <div className="p-3 text-center">
                  <h1>
                    THE ESSENCE HANDCRAFTED<br></br>
                    OF FOOTWEAR.
                  </h1>
                  <h3>
                    Часть успеха Nike заключается в том, что мы знаем, что
                    делаем. Наша<br></br>
                    цель — разбудить желание у всех, кому интересен спорт. Мы
                    видим<br></br> атлета в каждом, у кого есть тело». Фил Найт,
                    основатель и руководитель<br></br> компании Nike
                  </h3>
                  <button className="btn btn-primary">Подробнее</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row style={{ background: '#F8F8F8', marginTop: '15px' }}>
          <Col xs={12} md={6}>
            <div>
              <div className="d-flex justify-content-center">
                <img className='img1'
                  src="/images/www.png"
                  style={{
                    marginBottom: '5px',
                    marginRight: '30px',
                    marginTop: '20px',
                  }}
                />
              </div>

              <h4 className="text-center">
                Если у человека есть тело, то он в любом случае атлет.<br></br>{' '}
                А значит, он — наша целевая аудитория
              </h4>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="mb-3 text-end">
              <img
                src="/images/Picture.png"
                className="img-fluid"
                style={{
                  marginBottom: '5px',
                  marginRight: '30px',
                  marginTop: '20px',
                }}
              />
            </div>
          </Col>
        </Row>

        <div>
          <div className="d-flex justify-content-center">
            <img src="/images/Title.png" width="416" height="60" alt="Title" />
          </div>

          <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
            <div className="col">
              <div className="p-3">
                <img src="/images/women.png" width="416" height="560" />
              </div>
            </div>
            <div className="col">
              <div className="p-3">
                <img src="/images/kids.png" width="416" height="560" />
              </div>
            </div>
            <div className="col">
              <div className="p-3">
                <img src="/images/men.png" width="416" height="560" />
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '85px' }}></div>
        <div className="row gx-5" style={{ background: '#F8F8F8' }}>
          <div className="col">
            <div className="p-3">
              <h2 style={{ marginTop: '10px' }}>Присоединяйтесь к нам</h2>
              <h3 style={{ marginTop: '35px' }}>Контакты</h3>
              <div style={{ marginTop: '25px' }}>
                <h3>Адрес</h3>
                <h4 style={{ marginTop: '5px' }}>
                  г. Барнаул, ул. Сухэ-Батора, 37
                </h4>
                <h3 style={{ marginTop: '5px' }}>Телефон</h3>
                <h4 style={{ marginTop: '5px' }}>+7 (962) 804-96-74</h4>
                <h3 style={{ marginTop: '5px' }}>E-mail</h3>
                <h4 style={{ marginTop: '5px' }}>gymstrong@mail.ru</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 ">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A09c6901f6fb959501ce89aa07da3f80f02d3a53ab4b6275138f5d09c96f935a3&amp;source=constructor"
                width="600"
                height="400"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}
