import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem } from "mdbreact";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import EditAdd from "../EditAdd/EditAdd";
import { ShowTables } from "../ShowTables/ShowTables";

export class PrintDetails extends Component {
  state = {
    // printDetailsString: this.props.printDetails(this.props.match.params.vehicleID),
    // printDetailsString: "test",
  };

  componentDidMount() {}

  render() {
    // console.log();
    console.log("this.props", this.props);
    // const { columnHeadings, data, history } = this.props;
    // console.log( "this.props", this.props );
    // console.log( "columnHeadings", columnHeadings );
    // console.log( "data", data );
    // console.log("", );
    return (
      <div className="px-5 py-3">
        <p>test</p>
        { this.state.printDetailsString &&
        <>
          {/*<input value={ this.state.printDetailsString }/>*/ }
          { this.state.printDetailsString }
        </>
        }
      </div>
    )
  }
}

export default PrintDetails;

