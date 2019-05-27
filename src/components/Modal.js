import React from "react";
import logo from "../img/bq.png";
import "../css/Modal.css";
import firebase from "firebase";
import {
  Container,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Input
} from "mdbreact";

class ModalPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.restorepassword = this.restorepassword.bind(this);

    this.state = {
      modal: false,
      emailRestor: ""
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChange(e) {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });

    console.log(value);
    console.log(name);
  }

  restorepassword() {
    var auth = firebase.auth();

    auth
      .sendPasswordResetEmail(this.state.emailRestor)
      .then(function() {
        document.getElementById("restor").value = "";
        console.log("Se envia email");
      })
      .catch(function(error) {
        console.log("Error");
      });
  }

  render() {
    return (
      <Container>
        <a className="brown-text" onClick={this.toggle}>
          ¿Olvidaste tu Contraseña?
        </a>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            <img width="60px" src={logo} alt="logo" />
          </ModalHeader>
          <ModalBody>
            <div className="grey-text">
              Se enviara un correo para el cambio de contraseña
              <Input
                value={this.state.emailRestor}
                onChange={this.handleChange}
                name="emailRestor"
                label="Correo"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                id="restor"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="text-center mt-4">
              <Button
                color="light-blue accent-2"
                onClick={this.restorepassword}
                type="submit"
              >
                Enviar<i className="fa fa-paper-plane-o ml-2" />
              </Button>
            </div>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default ModalPage;
