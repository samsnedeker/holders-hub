import './styles/App.css';
import React, { useState } from "react";
import ContractInputForm from './components/ContractInputForm';
import Contracts from './components/Contracts'

export const ContractContext = React.createContext();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allContracts: [],
    };
  }

  handleStateChange = () => {
    console.log("handling state change");
    this.setState({ allContracts: this.state.allContracts });
    console.log("state updated: ", this.state.allContracts);
  }

  render() {
    return (
      <div className="App">
        <header className="container">
          <div className="header-container">
            <p className="header gradient-text">
              Welcome to Holder's Hub
            </p>
            <p className="sub-text">
              Import your contract below 
            </p>
            {/* <ContractInputForm></ContractInputForm> */}
            {/* <div className="my-contracts-container">
              <p className="body-text gradient-background">
                My Contracts
              </p>
            </div> */}
            <ContractInputForm allContracts={this.state.allContracts} handleStateChange={this.handleStateChange}></ContractInputForm>
            <Contracts allContracts={this.state.allContracts}></Contracts>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
