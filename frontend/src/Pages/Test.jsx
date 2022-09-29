import React from "react";
import web3 from "../smart_contract/web3";
import purchase from "../smart_contract/purchase";
//bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
//react icon
import { TiTick } from "react-icons/ti";
//redux
import { useDispatch, useSelector } from "react-redux";
//react-router-dom
import { Link } from "react-router-dom";


class Test extends React.Component {
  state = {
    apato: "",
    customer: "",
    balance: "",
    value: "",
    message: "",
    showordertotal: "showordertotal",
  };
  async componentDidMount() {

    const apato = await purchase.methods.apato().call();
    const customer = await purchase.methods.customer().call();
    const balance = await web3.eth.getBalance(purchase.options.address);

    this.setState({ apato, customer, balance });
  }

//   onSubmit = async (event) => {
//     event.preventDefault();

//     const accounts = await web3.eth.getAccounts();

//     this.setState({ message: "Waiting on transaction success..." });

//     await purchase.methods.enter().send({
//       from: accounts[0],
//       value: web3.utils.toWei(this.state.value, "ether"),
//     });

//     this.setState({ message: "You have been entered!" });
//   };

//   onClick = async () => {
//     const accounts = await web3.eth.getAccounts();

//     this.setState({ message: "Waiting on transaction success..." });

//     await purchase.methods.pickWinner().send({
//       from: accounts[0],
//     });

//     this.setState({ message: "A winner has been picked!" });
//   };

  render() {
    return (
      <div>
        {/* summary card */}
        <div className="container">
          <div className="d-flex   text-center justify-content-center align-items-center">
            <Card style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title> Summary </Card.Title>
                <hr />
                <Card.Text>
                  <h1>{this.state.balence}</h1>
                  Order Total: $ {this.state.showordertotal && this.state.showordertotal}
                  <br />
                  <br />
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="account number"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                      <Link
                        to="/customer/payment_status"
                        className="rmLinkStyle"
                      >
                        {" "}
                        <TiTick />
                      </Link>
                    </Button>
                  </InputGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
{/* 
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {this.state.manager}. There are currently{" "}
          {this.state.players.length} people entered, competing to win{" "}
          {web3.utils.fromWei(this.state.balance, "ether")} ether!
        </p>

        <hr />
        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter</label>
            <input
              value={this.state.value}
              onChange={(event) => this.setState({ value: event.target.value })}
            />
          </div>
          <button>Enter</button>
        </form>

        <hr />

        <h4>Ready to pick a winner?</h4>
        <button onClick={this.onClick}>Pick a winner!</button>

        <hr />

        <h1>{this.state.message}</h1> */}
      </div>
    );
  }
}
export default Test;
