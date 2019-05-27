import React, { Fragment } from "react";
import logo from "../img/bqueen.png";
import "../css/Navbar.css";
import firebaseApp from "../config/firebase";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Order from "../components/Order";
import Breakfast from "../components/Breakfast";
import Dinner from "../components/Dinner";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from "mdbreact";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  logout() {
    firebaseApp
      .auth()
      .signOut()
      .then(function() {
        console.log("Saliendo...");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar id="nav" dark expand="md" scrolling>
            <NavbarBrand href="/">
              <img width="120px" src={logo} alt="logo" />{" "}
              <span id="titule2">Con amor sabe mejor</span>
            </NavbarBrand>
            <NavbarToggler onClick={this.onClick} />
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav left id="tituleNav">
                <NavItem active />

                <NavItem>
                  <Dropdown>
                    <DropdownToggle nav caret>
                      Menú
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem href="#">
                        <Link to="/Breakfast">Desayunos</Link>​
                      </DropdownItem>
                      <DropdownItem href="#">
                        <Link to="/Dinner">Almuerzos y Cenas</Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
                <NavItem>
                  <NavLink to="#">
                    <Link id="titule3" to="/Pedido">
                      Pedidos
                    </Link>
                  </NavLink>
                </NavItem>
              </NavbarNav>
              <NavbarNav right id="tituleNav2">
                <NavItem>
                  <NavLink onClick={this.logout} to="#">
                    Cerrar Sesión{" "}
                  </NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
          <Route path="/Breakfast" component={Breakfast} />
          <Route path="/Dinner" component={Dinner} />
          <Route exact path="/Pedido" component={Order} />​ ​
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Nav;
