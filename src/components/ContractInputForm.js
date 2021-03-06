import React, { Component, useContext } from "react";

class ContractInputForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        address: "",
        error: "",
        validContract: "",
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleValidation = this.handleValidation.bind(this);
    }
  
    handleChange(event) {
      this.setState({ address: event.target.value })
    }
  
    handleSubmit(error) {
      if (this.state.validContract === true) {
        this.props.handleStateChange(this.props.allContracts.push(this.state.address));
        console.log("All Contracts: ", this.props.allContracts);
        alert("Contract imported successfully!");
      } else {
        alert(error);

      }
    }

    handleValidation(event) {
      event.preventDefault();
      const address = this.state.address
      let error = "";
      let validContract = "";

      if (!address | address.length === 0) {
        validContract = false;
        error = "Please input a contract address."
        this.setState( { error: error, validContract: false }, function() {
          this.handleSubmit(error);
        } )
      }
      else if (!(address.length === 42 && address.slice(0, 2) === "0x")) {
        validContract = false;
        error = "Contract address not valid. Please input a valid contract address."
        this.setState( { error: error, validContract: false }, function() {
          this.handleSubmit(error);
        } )
      } 
      else if (this.props.allContracts.includes(address)) {
        error = "This contract has already been imported!"
        this.setState( { error: error, validContract: false }, function() {
          this.handleSubmit(error);
        } )
      }
      else {
        this.setState( { validContract: true }, function() {
          this.handleSubmit(error);
        } )
      }
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleValidation}>
            <label>
              <input className="contract-input" placeholder="Contract Address" type="text" address={this.state.address}  onChange={this.handleChange}></input>
              <input className="cta-button gradient-background" type="submit" value="Import" />
            </label>
          </form>
        </div>
      )
    }
  }

export default ContractInputForm