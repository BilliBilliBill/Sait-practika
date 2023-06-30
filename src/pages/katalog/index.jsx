import './style.scss'
import React, { Component } from 'react'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
export default class SkidkiPage extends Component {
  render() {
    return (
      <Container luid className="p-0" style={{ overflowX: 'hidden' }}>
        <div style={{ marginTop: '5px' }}></div>
        <Row className="gx-5">
          <Col>
            <div className="p-3">
              <div className="d-flex justify-content-center">
                <img
                  src="/images/sport.png"
                  className="img-fluid rounded"
                  style={{ width: '400px', height: 'auto' }}
                />
              </div>
              <Row>
                <Col xs={12} md={4} className="mb-3">
                  <img
                    src="/images/Product 08 1.png"
                    className="img-fluid rounded"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </Col>
                <Col xs={12} md={4} className="mb-3">
                  <img
                    src="/images/Product 09 1.png"
                    className="img-fluid rounded"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Col>
                <Col xs={12} md={4} className="mb-3">
                  <img
                    src="/images/Product 11 1.png"
                    className="img-fluid rounded"
                    style={{ position: ' relative', top: '-21px' }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4} className="mb-3">
                  <img
                    src="/images/Product 10 1.png"
                    className="img-fluid rounded"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Col>
                <Col xs={12} md={4} className="mb-3">
                  <img
                    src="/images/Product 12 1.png"
                    className="img-fluid rounded"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Col>
                <Col xs={12} md={4} className="mb-3">
                  <img
                    src="/images/Product 13 1.png"
                    className="img-fluid rounded"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
