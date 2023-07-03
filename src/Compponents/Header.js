import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import HomePage from '../pages/home'
import ONasPage from '../pages/oNas'
import KatalogPage from '../pages/katalog'
import ContactPage from '../pages/contact'
import SkidkiPage from '../pages/Skidki'

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="md"
          variant="#f4f1ee"
          bg="#f4f1ee"
          className="navbar-#f4f1ee"
        >
          <Container>
            <Navbar.Brand href="/" className="mr-auto">
              <img
                src="data:image/webp;base64,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"
                height="20.58"
                width="70.77"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto justify-content-end flex-grow-1">
                <Nav.Link href="/">Главная</Nav.Link>
                <Nav.Link href="/katalog">Кофе</Nav.Link>
                <Nav.Link href="/Skidki">Отзывы</Nav.Link>
                <Nav.Link href="/contact">Контакты</Nav.Link>
                <Nav.Link href="/Onas">О нас</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <hr style={{ margin: 0 }} />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Onas" element={<ONasPage />} />
            <Route path="/katalog" element={<KatalogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/Skidki" element={<SkidkiPage />} />
          </Routes>
        </Router>
      </>
    )
  }
}
