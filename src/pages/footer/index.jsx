import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-black py-1">
      <Container>
        <Row>
          <Col md={4}>
            <p className="mb-0 text-white">Nike</p>
          </Col>
          <Col md={8} className="d-flex justify-content-end">
            <ul className="list-inline mb-0 align-self-center">
              <li className="list-inline-item">
                <a href="#">
                  <img src="../assest/free-icon-vk-3670055.png" alt="VK" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <img
                    src="../assest/free-icon-instagram-3955024.png"
                    alt="Instagram"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <img
                    src="../assest/free-icon-telegram-4401433.png"
                    alt="Telegram"
                  />
                </a>
              </li>
              <li className="list-inline-item ">
                <p className="mb-0 text-white">Подписывайся</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
