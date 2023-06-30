import React, { Component } from 'react'
import './style.scss'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from './logo192.png'
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
          variant="black"
          bg="black"
          className="navbar-dark"
        >
          <Container>
            <Navbar.Brand href="/" className="mr-auto">
              <img
                src={logo}
                height="35.58"
                width="100.77"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto justify-content-end flex-grow-1">
                <Nav.Link href="/">Главная</Nav.Link>
                <Nav.Link href="/Onas">О нас</Nav.Link>
                <Nav.Link href="/katalog">Мужчинам</Nav.Link>
                <Nav.Link href="/Skidki">Женщинам</Nav.Link>
                <Nav.Link href="/contact">Контакты</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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
