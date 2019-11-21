// this is the tutorial we followed
// https://mdbootstrap.com/education/react/agenda-4-bootstrap/

// MDBDataTables
// https://mdbootstrap.com/docs/react/tables/datatables/

import React, { Component } from 'react';
import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBTable,
  MDBTableHead,
  MDBDataTable,
  MDBTableBody,
  MDBTableFoot
} from "mdbreact";
// ./ means we are searching for a file
// 'components/Vehicle' is NOT a directory, './components/Vehicle' IS a directory
// import Vehicle from './components/Vehicle';
import firebase from "./Firebase";

// function App() {
class App extends Component {
  // state must be created before it can be used in the constructor
  // state;

  constructor( props ) {
    super( props );
    this.state = {
      vehicles: [
        {
          iid: "Jeff's Jeep",
          manufacturer: "Jeep",
          model: "Wrangler (JK)",
          odometer: 280000,
          requiresServicing: "Yes",
          dateManufactured: 2017,
          datePurchased: 2017,
          dateLastServiced: "",
          kilometersSinceServiced: 2800000,
          kilometersPerService: 90000,
          fuelCapacity: 104,
          fuelEconomy: "",
          weight: 1.45,
          VIN: "ExampleVIN",
          registrationNumber: "1ABC-123",
        },
        // {
        //   iid: "",
        //   manufacturer: "",
        //   model: "",
        //   odometer: ,
        //   requiresServicing: ,
        //   dateManufactured: ,
        //   datePurchased: ,
        //   dateLastServiced: "",
        //   kilometersSinceServiced: ,
        //   kilometersPerService: ,
        //   fuelCapacity: ,
        //   fuelEconomy: "",
        //   weight: ,
        //   VIN: "ExampleVIN",
        //   registrationNumber: "1ABC-123",
        // },
        {
          iid: "Bob's Corolla",
          manufacturer: "Toyota",
          odometer: 100000,
          model: "Corolla (E160)"
        },
        {
          iid: "Caren's Corolla",
          manufacturer: "Toyota",
        },
        {
          iid: "fdsafdas's Corolla",
          manufacturer: "Toyota",
        },
        {
          iid: "fdasfsda's Sports Car",
          manufacturer: "Mitsubishi",
        },
      ],
      columnHeadings: [
        {
          label: "Internal ID",
          field: "iid",
        },
        {
          label: "Make",
          field: "manufacturer",
        },
        {
          label: "Model",
          field: "model",
        },
        {
          label: "Odometer (km)",
          field: "odometer",
        },
        {
          label: "Requires Servicing",
          field: "requiresServicing",
        },
        {
          label: "Date Manufactured",
          field: "dateManufactured",
        },
        {
          label: "Date Purchased",
          field: "datePurchased",
        },
        {
          label: "Last Service",
          field: "dateLastServiced",
        },
        {
          label: "kms since Last Service",
          field: "kilometersSinceServiced",
        },
        {
          label: "kms per Service",
          field: "kilometersPerService",
        },
        {
          label: "Fuel Economy",
          field: "fuelEconomy",
        },
        {
          label: "Fuel Capacity",
          field: "fuelCapacity",
        },
        {
          label: "Weight",
          field: "weight",
        },
        {
          label: "VIN",
          field: "VIN",
        },
        {
          label: "Reg. No.",
          field: "registrationNumber",
        },
      ]
    }
  };

  vehicles: [];

  // this.state.tableData = {
  //   columns: [
  //     {
  //       label: "Internal ID",
  //       field: "iid",
  //     },
  //     {
  //       label: "Make",
  //       field: "manufacturer",
  //     },
  //     {
  //       label: "Model",
  //       field: "Model",
  //     },
  //     {
  //       label: "Odometer (km)",
  //       field: "odometer",
  //     },
  //     {
  //       label: "Requires Servicing",
  //       field: "requiresServicing",
  //     },
  //     {
  //       label: "",
  //       field: "dateManufactured",
  //     },
  //     {
  //       label: "",
  //       field: "datePurchased",
  //     },
  //     {
  //       label: "",
  //       field: "dateLastServiced",
  //     },
  //     {
  //       label: "",
  //       field: "kilometersSinceServiced",
  //     },
  //     {
  //       label: "",
  //       field: "fuelEconomy",
  //     },
  //     {
  //       label: "",
  //       field: "fuelCapacity",
  //     },
  //     {
  //       label: "",
  //       field: "weight",
  //     },
  //     {
  //       label: "",
  //       field: "VIN",
  //     },
  //     {
  //       label: "",
  //       field: "registrationNumber",
  //     },
  //   ],
  //   rows: [
  //     this.state.vehicles.map( vehicle => (
  //       {
  //         iid: vehicle.iid,
  //         manufacturer: vehicle.manufacturer,
  //         model: vehicle.model,
  //         odometer: vehicle.odometer,
  //         requiresServicing: vehicle.requiresServicing,
  //         dateManufactured: vehicle.dateManufactured,
  //         datePurchased: vehicle.datePurchased,
  //         dateLastServiced: vehicle.dateLastServiced,
  //         kilometersSinceServiced: vehicle.kilometersSinceServiced,
  //         fuelEconomy: vehicle.fuelEconomy,
  //         fuelCapacity: vehicle.fuelCapacity,
  //         weight: vehicle.weight,
  //         VIN: vehicle.VIN,
  //         registrationNumber: vehicle.registrationNumber,
  //       },
  //
  //     ), )
  //   ]
  // }

// ??? look up
// handleDelete = vehicleId => {
//   const vehicles = this.state.vehicles.filter( vehicle => (
//     vehicle.id !== vehicleId
//   ) );
//   this.setState( { vehicles } );
// };

  render() {
    this.tableData = {
      columns: this.state.columnHeadings,
      rows: this.state.vehicles
    };

    return (
      <MDBContainer className="w-100">
        {/*<MDBContainer>*/ }
        {/*<MDBContainer className="bg-dark text-light">*/ }

        {/*----Header*/ }
        <MDBRow>
          <MDBCol>
            <img src={ logo } width={ 64 } alt="logo"/>
          </MDBCol>
          <MDBCol className="text-danger">
            <h1>Welcome</h1>
          </MDBCol>
        </MDBRow>

        {/*----Main*/ }
        <MDBRow>
          {/*Left Column*/ }
          {/*<MDBCol size="12">*/ }
          { console.log( this.tableData ) }
          {/*<div className="scrollbar my-5 mx-auto" style{ scrollContainerStyle }>*/}
          {/*<div className="scrollbar my-5 mx-auto" scrollbar-juicy-peach>*/}
            <MDBDataTable

              data={ this.tableData }
              striped bordered hover color="danger" noBottomColumns/>
          {/*</div>*/}
          {/*</MDBCol>*/ }

          {/*Right Column*/ }
          <MDBCol size="3" className="text-center">
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
