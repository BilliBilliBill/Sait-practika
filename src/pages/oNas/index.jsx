import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.scss'

export default class ONasPage extends Component {
  render() {
    return (
      <div className="background-image">
        <Container className="text-center my-5 ">
        <div className="card" style={{ width: '100%', maxWidth: '2000px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="/images/мужик.png"
                  alt="Equipment"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8" style={{ backgroundColor: 'white' }}>
                <div className="card-body" style={{ backgroundColor: 'white' }}>
                  <h1
                    className="card-title"
                    style={{
                      color: '#333',
                      fontWeight: 'bold',
                      backgroundColor: 'white',
                    }}
                  >
                    Наша Миссия
                  </h1>
                  <h4
                    className="card-text"
                    style={{ color: '#666', backgroundColor: 'white' }}
                  >
YouPlay – это уютный компьютерный клуб, где каждый геймер найдет
              свое место. Мы оборудовали наш клуб всем необходимым для
              захватывающей онлайн-игры и незабываемого временипрепровождения.
              Здесь собираются ценители активного киберспортивного опыта и
              виртуального отдыха. Наша миссия - создать атмосферу, в которой вы
              сможете полностью погрузиться в мир игр, встретить
              единомышленников и сразиться с достойными противниками. Мощные
              компьютеры и комфортная атмосфера позволят вам насладиться игрой
              на полную мощность, без каких-либо помех.
                  </h4>
                  
                </div>
              </div>
            </div>

        </div>
        </Container>
      </div>
    )
  }
}
