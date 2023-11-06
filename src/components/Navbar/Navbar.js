import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { isLogin } from "../../utils";

function Navigation() {
  const expand = "md";
  const [loginStatus, setLoginStatus] = useState(
    isLogin() ? "Logout" : "Login"
  );
  const logoutHandler = () =>{
    document.cookie = "username=admin; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/";
    setLoginStatus('Login')
  }
  return (
    <Navbar
      key={expand}
      style={{ backgroundColor: "#86C3B2" }}
      expand={expand}
      className=" mb-3 fixed-top"
    >
      <Container>
        <Navbar.Brand style={{ fontSize: "30px" }}>Niloufar</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
              <NavLink to="/panel" className="nav-link">
                Panel
              </NavLink>
              {isLogin() ? (
                <NavLink to="/login" onClick={logoutHandler} className="nav-link">
                  {loginStatus}
                </NavLink>
              ) : (
                <NavLink to="/login" className="nav-link">
                  {loginStatus}
                </NavLink>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
export default Navigation;
