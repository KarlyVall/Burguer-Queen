import React, { Component } from "react";
import "../css/Dinner.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Table, TableBody } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase";
const db = firebase.firestore();
library.add(faClipboardList);

class Order extends Component {
  constructor() {
    super();
    this.state = {
      postOrder: []
    };
  }

  handleViewOrder = () => {
    db.collection("order").onSnapshot(querySnapshot => {
      const postOrder = [];
      querySnapshot.forEach(doc => {
        console.log(`${doc.id} => ${doc.data()}`);

        const { user, operations } = doc.data();

        postOrder.push({
          user,
          operations
        });
      });

      console.log(this.state.postOrder);
      this.setState({
        postOrder
      });
    });
  };

  render() {
    const { postOrder } = this.state;
    const array = postOrder.map((menu, i) => {
      return (
        <div key={i}>
          <Table>
            <TableBody>
              <tr>
                <td width="200" pr-1>
                  {menu.user}
                </td>
              </tr>
            </TableBody>
          </Table>
        </div>
      );
    });

    return (
      <div>
        {array}
        <button
          type="button"
          onClick={this.handleViewOrder}
          className="btn btn-primary "
        >
          Pedidos <FontAwesomeIcon icon="clipboard-list" />
        </button>
      </div>
    );
  }
}

export default Order;
