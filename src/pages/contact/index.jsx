import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class ContactPage extends Component {
  render() {
    return (
      <Container fluid className="p-0" style={{ overflowX: 'hidden' }}>
        <div style={{ marginTop: '85px' }}></div>
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
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
            <div className="p-3" style={{ marginRight: '50px' }}>
              <iframe
                className="iframe"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A09c6901f6fb959501ce89aa07da3f80f02d3a53ab4b6275138f5d09c96f935a3&amp;source=constructor"
                width="813"
                height="500"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}
