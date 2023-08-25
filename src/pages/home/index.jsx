import React, { Component } from 'react'
import './style.scss'
import { Container, Row, Col, Form } from 'react-bootstrap'

export default class HomePage extends Component {
  render() {
    return (
      <Container fluid className="p-0" style={{ overflowX: 'hidden' }}>
        <div className="GYMSTRONG">
          <Row className="gx-5">
          <Col className="position-relative">
  <img
    src="/images/1667628222_3-8.jpg"
    width="90%"
    height="550"
    alt="Coffee"
  />
  <div
    className="position-absolute translate-middle text-center"
    style={{
      textAlign: 'center',
      top: 'calc(50% - 200px)',
      left: 'calc(50% - 0px)',
    }}
  >
    <h1
      style={{
        border: 'none',
        backgroundColor: 'transparent',
        color: '#FF5733',
        fontFamily: 'Arial, sans-serif',
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '20px',
      }}
      className="d-none d-md-block" 
    >
      Moscow Cyber Club
    </h1>
    <h3
      style={{
        border: 'none',
        backgroundColor: 'transparent',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        fontSize: '2rem',
      }}
      className="d-none d-md-block"
    >
      ИГРА, КАК
      <br /> ОБРАЗ ЖИЗНИ
    </h3>
    <h1
      style={{
        border: 'none',
        backgroundColor: 'transparent',
        color: '#FF5733',
        fontFamily: 'Arial, sans-serif',
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '10px',
      }}
      className="d-md-none" 
    >
      Moscow Cyber Club
    </h1>
    <h3
      style={{
        border: 'none',
        backgroundColor: 'transparent',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.5rem',
      }}
      className="d-md-none" 
    >
      ИГРА, КАК
      <br /> ОБРАЗ ЖИЗНИ
    </h3>
  </div>
</Col>

            <div className="row" style={{ marginTop: '10px' }}>
              <div className="col-md-6 text-center">
                <img
                  src="/images/123.png"
                  width="250"
                  height="250"
                  className="p-0"
                />
              </div>
              <div className="col-md-6">
                <div style={{ padding: '20px' }}>
                  <h2
                    className="text-center"
                    style={{
                      color: '#FF5733',
                      fontSize: '28px',
                      marginBottom: '20px',
                    }}
                  >
                    ВХОД В ЛИЧНЫЙ КАБИНЕТ ПОЛЬЗОВАТЕЛЯ
                  </h2>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: '0',
                      color: '#333',
                      fontSize: '18px',
                    }}
                  >
                    <li style={{ marginBottom: '10px' }}>
                      <span style={{ color: '#FF5733', fontWeight: 'bold' }}>
                        Узнать свой баланс
                      </span>{' '}
                      - проверьте доступные средства на вашем аккаунте.
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <span style={{ color: '#FF5733', fontWeight: 'bold' }}>
                        Посмотреть заполняемость клуба
                      </span>{' '}
                      - оцените текущее количество посетителей в клубе.
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <span style={{ color: '#FF5733', fontWeight: 'bold' }}>
                        Активация промокодов
                      </span>{' '}
                      - используйте промокоды для получения специальных
                      предложений и бонусов.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Row className="gx-4 no-gutters" style={{ marginTop: '100px' }}>
              <Col xs={12} sm={4}>
                <div className="p-0 text-center">
                  <img
                    src="/images/s1.png"
                    width="100%"
                    height="300"
                    alt="Coffee"
                  />
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="p-0 text-center">
                  <img
                    src="/images/s2.png"
                    width="100%"
                    height="300"
                    alt="Coffee"
                  />
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="p-0 text-center">
                  <img
                    src="/images/s3.png"
                    width="100%"
                    height="300"
                    alt="Coffee"
                  />
                </div>
              </Col>
            </Row>
          </Row>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <div
            style={{
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <h2
              className=" text-center"
              style={{
                color: '#FF5733',
                fontSize: '36px',
                marginBottom: '10px',
                backgroundColor: 'transparent',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
              }}
            >
              Добро пожаловать в YouPlay!
            </h2>
            <h1
              className="text-center"
              style={{
                color: '#fff',
                fontSize: '48px',
                fontWeight: 'bold',
                marginBottom: '20px',
                backgroundColor: 'transparent',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
              }}
            >
              Наша Миссия
            </h1>
            <h4
              className=" text-center"
              style={{
                color: '#eee',
                fontSize: '24px',
                lineHeight: '1.6',
                margin: 0,
                padding: 0,
                backgroundColor: 'transparent',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)',
              }}
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

        <div
          className="mt-100 d-flex justify-content-center"
          style={{
            backgroundImage: `url('/images/1613131697_6-p-fon-zheltaya-lenta-9.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginTop: '0px',
            padding: '20px',
          }}
        >
          <div className="card" style={{ width: '100%', maxWidth: '1000px' }}>
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
                  <h3
                    className="card-title"
                    style={{ color: '#FF5733', backgroundColor: 'white' }}
                  >
                    Top equipment
                  </h3>
                  <h1
                    className="card-title"
                    style={{
                      color: '#333',
                      fontWeight: 'bold',
                      backgroundColor: 'white',
                    }}
                  >
                    ОБОРУДОВАНИЕ
                  </h1>
                  <h4
                    className="card-text"
                    style={{ color: '#666', backgroundColor: 'white' }}
                  >
                    Мощные и продуктивные игровые компьютеры Наш клуб предлагает
                    ПК, различные девайсы и аксессуары, которые позволят вам
                    прочувствовать любимые игры в совершенно новом формате и на
                    максимальных настройках. Зарядитесь атмосферой
                    киберспортивной арены, которую предлагает наша площадка.
                  </h4>
                  <ul style={{ backgroundColor: 'white' }}>
                    <li
                      style={{
                        color: 'pink',
                        listStyleType: 'none',
                        paddingLeft: '20px',
                        backgroundColor: 'white',
                      }}
                    >
                      &#128295; МОНИТОРЫ
                    </li>
                    <li
                      style={{
                        color: 'pink',
                        listStyleType: 'none',
                        paddingLeft: '20px',
                        backgroundColor: 'white',
                      }}
                    >
                      &#128295; ВИДЕОКАРТЫ
                    </li>
                    <li
                      style={{
                        color: 'pink',
                        listStyleType: 'none',
                        paddingLeft: '20px',
                        backgroundColor: 'white',
                      }}
                    >
                      &#128295; ПЕРИФЕРИЯ
                    </li>
                    <li
                      style={{
                        color: 'pink',
                        listStyleType: 'none',
                        paddingLeft: '20px',
                        backgroundColor: 'white',
                      }}
                    >
                      &#128295; ПРОЦЕССОР
                    </li>
                    <li
                      style={{
                        color: 'pink',
                        listStyleType: 'none',
                        paddingLeft: '20px',
                        backgroundColor: 'white',
                      }}
                    >
                      &#128295; МЕБЕЛЬ
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="grid-container"
          style={{ marginLeft: '25px', marginTop: '85px', width: '100%' }}
        >
          <Row>
            <Col>
              <div className="grid-item d-none d-sm-block">
                <h2
                  className="text-center"
                  style={{
                    color: '#FF5733',
                    fontSize: '28px',
                    marginBottom: '20px',
                  }}
                >
                  ОБЩИЕ ПОЛОЖЕНИЯ
                </h2>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: '0',
                    marginLeft: '20px',
                    color: '#333',
                    fontSize: '18px',
                  }}
                >
                  <li style={{ marginBottom: '10px' }}>
                    <span style={{ color: '#FF5733', fontWeight: 'bold' }}>
                      Управляющие компьютерного клуба YouPlay
                    </span>{' '}
                    могут отказывать посетителям в пребывании на территории и
                    предоставлении услуг в случае невыполнения указанных ниже
                    Правил или по другим обоснованным причинам. Просим обратить
                    внимание, что внесенные за услуги аренды ПК денежные
                    средства в этом случае не возвращаются.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <span style={{ color: '#FF5733', fontWeight: 'bold' }}>
                      Если посетитель компьютерного клуба
                    </span>{' '}
                    приносит преднамеренный ущерб имуществу, то он обязан
                    возместить его в денежном эквиваленте причиненного вреда. В
                    случае нарушения этого правила, посетитель несет
                    административную ответственность, что регламентирует
                    законодательство Российской Федерации.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <span style={{ color: '#FF5733', fontWeight: 'bold' }}>
                      Руководители и сотрудники киберспортивных заведений
                    </span>{' '}
                    не несут персональной ответственности за предметы, личные
                    вещи и имущество посетителей, оставленные в заведении без
                    присмотра.
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="grid-item d-none d-sm-block">
                <h2
                  className="text-center"
                  style={{
                    color: '#FF5733',
                    fontSize: '28px',
                    marginBottom: '20px',
                  }}
                >
                  ПОСЕТИТЕЛЯМ ЗАПРЕЩАЕТСЯ
                </h2>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: '0',
                    marginLeft: '20px',
                    color: '#333',
                    fontSize: '18px',
                  }}
                >
                  <li style={{ marginBottom: '10px' }}>
                    <span style={{ color: '#FF5733', fontWeight: 'bold' }}>
                      Посещать территорию кибер клуба со своими продуктами и
                      напитками
                    </span>
                    , а также употреблять их.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <span style={{ color: '#FF5733', fontWeight: 'bold' }}>
                      Курить сигареты в помещение на территории киберклуба.
                    </span>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <span style={{ color: '#FF5733', fontWeight: 'bold' }}>
                      Находиться в состоянии алкогольного и наркотического
                      опьянения.
                    </span>{' '}
                    Употреблять спиртные напитки в клубе.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <span style={{ color: '#FF5733', fontWeight: 'bold' }}>
                      Использовать нецензурную лексику, бранные слова
                    </span>
                    , а также действовать неуважительно по отношению к другим
                    посетителям и персоналу клуба.
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="grid-item d-none d-sm-block">
                <h2
                  className="text-center"
                  style={{
                    color: '#FF5733',
                    fontSize: '28px',
                    marginBottom: '20px',
                  }}
                >
                  ПОСЕТИТЕЛЬ ИМЕЕТ ПРАВО
                </h2>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: '0',
                    marginLeft: '20px',
                    color: '#333',
                    fontSize: '18px',
                  }}
                >
                  <li style={{ marginBottom: '10px' }}>
                    <span style={{ color: '#FF5733', fontWeight: 'bold' }}>
                      Заранее забронировать по телефону или личным присутствием
                    </span>{' '}
                    необходимое количество оборудования на установленное время.
                    Если бронь не была подтверждена личным присутствием или
                    звонком в указанный срок, то администрация может ее снять в
                    одностороннем порядке.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <span style={{ color: '#FF5733', fontWeight: 'bold' }}>
                      Перенести оставшееся время аренды с одного компьютера на
                      другое
                    </span>
                    , для чего обращаются к администратору клуба. Перенос
                    времени возможен, если в центре на данный момент времени
                    имеются свободные ПК.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <span style={{ color: '#FF5733', fontWeight: 'bold' }}>
                      Попросить сотрудника клуба настроить компьютер,
                      периферийное устройство или софт
                    </span>
                    , заменить оборудование на аналогичное в случае
                    неисправности или нестабильной работы.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={8} className="mx-auto">
              <div className="grid-item img-container">
                <img
                  className="img1"
                  src="/images/cf6718bc2f4af4e.gif"
                  style={{ marginBottom: '5px', width: '100%' }}
                  alt="Coffee Image"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}
