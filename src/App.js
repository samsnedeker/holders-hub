import './styles/App.css';
import React, { useState } from "react";
import ContractInputForm from './components/ContractInputForm';

const App = () => {

  const [currContract, setCurrContract] = useState("");


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
          <ContractInputForm></ContractInputForm>
          <div className="my-contracts-container">
            <p className="body-text gradient-background">
              My Contracts
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
