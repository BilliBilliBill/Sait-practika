import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class ContactPage extends Component {
  render() {
    return (
      <Container fluid className="p-0" style={{ overflowX: 'hidden' }}>
        <Container>
          <h2 className="text-center">КОНТАКТЫ</h2>
          <div style={{ marginTop: '45px' }}>
            <div
              className="image-container"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <img
                className="img1"
                src="/images/image 1 (1).png"
                alt="Coffee Image"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <div style={{ marginTop: '45px' }}>
            <h2>ДЛЯ СВЯЗИ</h2>
            <h4>
              По заказам и доставке sale@evadia.ru<br></br>
              Для сотрудничества sale@evadia.ru<br></br>
              По оптовым заказам sale@evadia.ru<br></br>
            </h4>
            <h4>
              Адрес :<br></br>
              Московская область, г.<br></br>
              Железнодорожный, ул. Южная , д.1<br></br>
            </h4>
          </div>
        </Container>
      </Container>
    )
  }
}
