import React, { setState } from "react";

class Contracts extends React.Component {
    constructor(props) {
      super(props);
      this.state = {allContracts: []}
    };

    componentDidMount () {
        this.setState({allContracts: this.props.allContracts});
        console.log("component did mount,", this.state.allContracts)
    }

    render() {
      return (
        <div className="contractContainer">
          <div className="body-text gradient-text">
            Imported Contracts
          </div>
    
          {this.props.allContracts.map((contract, index) => {
            return (
              <>
              <div key={index} style={{ color: "white", backgroundColor: "#0d1116", marginTop: "10px", marginBottom: "10px", padding: "20px", marginLeft: "250px", marginRight:"250px", borderRadius: "5px", outlineColor: "grey", outlineStyle: "solid"}}>
                  {console.log("all contracts", this.props.allContracts)}
                <div>{contract}</div>
              </div>
              </>
            )
          })}
      </div>
      );
    }
  }
export default Contracts