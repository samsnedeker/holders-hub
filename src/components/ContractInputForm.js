import React, { Component, setState } from "react";

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
  
    handleSubmit() {
      if (this.state.validContract === true) {
        alert("Contract imported successfully!");
      } else {
        alert("Contract import failed. Please make sure you input a valid contract address!");

      }
    }

    handleValidation(event) {
      event.preventDefault();
      const address = this.state.address
      let error = "";
      let validContract = "";

      if (!(address.length === 42 && address.slice(0, 2) === "0x")) {
        validContract = false;
        error = "Invalid contract address!"
        this.setState( { error: error, validContract: false }, function() {
          this.handleSubmit();
        } )
    } else {
      this.setState( { validContract: true }, function() {
        this.handleSubmit();
      } )
    }
  }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleValidation}>
            <label>
              <input className="contract-input" placeholder="Contract Address" type="text" address={this.state.address}  onChange={this.handleChange}></input>
              <input className="cta-button gradient-background" type="submit" value="Submit" />
            </label>
          </form>
        </div>
      )
    }
  }

export default ContractInputForm