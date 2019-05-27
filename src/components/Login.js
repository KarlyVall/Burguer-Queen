import React from "react";
import { Container, Row, Col, Input, Button, Card, CardBody } from "mdbreact";
import logo from "../img/bq.png";
import ModalPage from "../components/Modal";
import firebase from "firebase";
import "../css/Login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  login(e) {
    const { email, password } = this.state;
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange(e) {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div id="background">
        <Container className="pt-3">
          <Row>
            <Col md="3" />

            <Col md="6" className="pt-5">
              <Card>
                <CardBody>
                  <form>
                    <center>
                      <img width="120px" src={logo} alt="logo" />
                      <p
                        id="titule"
                        className="h4 text-center py-2 titule secondary-text"
                      />
                    </center>
                    <div className="grey-text">
                      <Input
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                        label="Correo"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <Input
                        value={this.state.password}
                        onChange={this.handleChange}
                        name="password"
                        label="Contraseña"
                        icon="lock"
                        group
                        type="password"
                        validate
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                      <Button
                        onClick={this.login}
                        color="light-blue accent-2"
                        type="submit"
                      >
                        Entrar
                      </Button>
                      <ModalPage />
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Col>
            <Col md="3" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
