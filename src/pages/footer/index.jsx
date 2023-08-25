import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faVk,
  faInstagram,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-#F4F1EE py-1">
      <Container>
        <Row>
          <Col md={4}>
          </Col>
          <Col md={8} className="d-flex justify-content-end">
            <ul className="list-inline mb-0 align-self-center">
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faVk} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faTelegram} />
                </a>
              </li>
              <li className="list-inline-item">
                <p className="mb-0 text-white">Будьте всегда на связи</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
