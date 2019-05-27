import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import data from "../burgerqueen.json";
import { Card, Table, TableBody } from "mdbreact";
import "../css/Dinner.css";
library.add(faPlusSquare);

class Dinner extends Component {
  constructor() {
    super();
    this.state = { operations: [], total: 0 };
  }

  handleClick = e => {
    const { value, name } = e.target;

    const array = this.state.operations;
    console.log(this.state.operations);
    array.push({ type: name, price: value });

    this.state.operations.forEach(obj => {
      this.setState({ total: this.state.total + parseInt(obj.price) });
    });
  };

  handleDelete = id => {
    this.setState({
      operations: this.state.operations.filter((e, i) => {
        return i !== id;
      })
    });
    this.state.operations.forEach((e, i) => {
      if (i === id) {
        this.setState({ total: this.state.total - parseInt(e.price) });
      }
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-5 col-sm-4 col-md-6">
          {data.Almuerzo.map((item, i) => (
            <div id="card" key={i}>
              <Card>
                <center>
                  <img
                    src={item.url}
                    alt={item.type}
                    height="100"
                    width="140"
                  />
                </center>
                <p>{item.type}</p>${item.price}
                <button
                  id={i}
                  onClick={this.handleClick}
                  name={item.type}
                  value={item.price}
                  type="button"
                  className="btn btn-primary "
                >
                  <FontAwesomeIcon icon="plus-square" />
                </button>
              </Card>
            </div>
          ))}
        </div>

        <div id="card2" className="col-7 col-sm-8 col-md-6">
          <div id="input">
            <label for="exampleForm2">Nombre cliente</label>
            <input type="text" id="exampleForm2" className="form-control" />
          </div>
          {this.state.operations.map((menu, i) => {
            return (
              <div id="card5" key={i}>
                <Table>
                  <TableBody>
                    <tr>
                      <td width="200" pr-1>
                        {menu.type}
                      </td>
                      <td width="200">{menu.price}</td>
                      <td width="200">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm "
                          onClick={() => this.handleDelete(i)}
                        >
                          <FontAwesomeIcon icon="trash-alt" />
                        </button>
                      </td>
                    </tr>
                  </TableBody>
                </Table>
              </div>
            );
          })}

          <div id="card6">
            <Table>
              <TableBody>
                <tr>
                  <td width="200">Total</td>
                  <td width="200">
                    <b>{this.state.total}</b>
                  </td>
                  <td width="200" />
                </tr>
                <tr>
                  <td width="200" />
                  <td>
                    <button type="button" className="btn btn-primary ">
                      Enviar a cocina <FontAwesomeIcon icon="paper-plane" />
                    </button>
                  </td>
                  <td width="200" />
                </tr>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
export default Dinner;
