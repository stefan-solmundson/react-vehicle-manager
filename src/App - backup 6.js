// this is the tutorial we followed
// https://mdbootstrap.com/education/react/agenda-4-bootstrap/

import React, {Component} from 'react';
import EditAdd from "./components/EditAdd";
import {Route} from "react-router-dom";
import {Switch} from "react-router";
import {ShowTables} from "./components/ShowTables";
import {Home} from "./components/Home";
import {Services} from "./components/Services";


import {MDBBtn, MDBBadge, MDBIcon, MDBDataTable, MDBContainer} from 'mdbreact';
import {Link} from "react-router-dom";
import {Table, Button} from 'reactstrap';

// import './App.css';

export class App extends Component {
  // state = {
  //   // reloadDataBase,
  // };

  constructor(props) {
    /* properties
    columnHeadings
    vehicles
    */

    super(props);
    let _vehicles;
    // TODO: PUT A LOADER IN HERE FOR THE FIREBASE DATA
    _vehicles = [
      {
        iid: "Jeff's Jeep",
        manufacturer: "Jeep",
        model: "Wrangler (JK)",
        odometer: 280000,
        requiresServicing: "Yes",
        dateManufactured: 2017,
        datePurchased: "2017/05/20",
        dateLastServiced: -1,
        kilometersSinceServiced: 2800000,
        kilometersPerService: 90000,
        fuelEconomy: -1,
        fuelCapacity: 104,
        weight: 1.45,
        VIN: "ExampleVIN",
        registrationNumber: "1ABC-123",
      },
      {
        iid: "Carol's Corolla",
        manufacturer: "Toyota",
        model: "Corolla (E160)",
        odometer: 20000,
        requiresServicing: "No",
        dateManufactured: 2014,
        datePurchased: "2018/05/10",
        dateLastServiced: -1,
        kilometersSinceServiced: 2000,
        kilometersPerService: 110000,
        fuelEconomy: -1,
        fuelCapacity: 82.5,
        weight: 1.08,
        VIN: "ExampleVIN",
        registrationNumber: "1ABC-123",
      },
      {
        iid: "Carol's 2nd Corolla",
        manufacturer: "Toyota",
        model: "Corolla (E160)",
        odometer: 20000,
        requiresServicing: "No",
        dateManufactured: 2014,
        datePurchased: "2018/06/04",
        dateLastServiced: -1,
        kilometersSinceServiced: 2000,
        kilometersPerService: 110000,
        fuelEconomy: -1,
        fuelCapacity: 82.5,
        weight: 1.08,
        VIN: "ExampleVIN",
        registrationNumber: "1ABC-123",
      }
    ];

    this.state = {
      columnHeadings: [
        {
          label: "Internal ID",
          field: "iid",
          sort: 'asc',
          width: 20,
        },
        {
          label: "Model",
          field: `model`,
          sort: 'asc',
          width: 20,
        },
        {
          label: "Make",
          field: "manufacturer",
          sort: 'asc',
          width: 150
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
          label: "Fuel Capacity (L)",
          field: "fuelCapacity",
        },
        {
          label: "Weight (T)",
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
      ],
      vehicles: _vehicles,
      services: [
        {
          iid: "Jeff's Jeep",
          array: [
            // last service
            {
              odometer: "142000",
              date: "2019/04/03",
              serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
            },
            // 2nd last service
            {
              odometer: "74000",
              date: "2015/06/01",
              serviceLocation: "Autobahn Mechanical and Electrical Services Victoria Park",
            },
          ],
          // VIN: "ExampleVIN",
        },
        {
          iid: "Carol's Corolla",
          array: [
            // last service
            {
              odometer: "122000",
              date: "2018/08/22",
              serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
            },
          ],
        },
        {
          iid: "Carol's 2nd Corolla",
          array: [
            // last service
            {
              odometer: "101000",
              date: "2018/08/23",
              serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
            },
          ],
        },
      ],
    };
  }

  // console.log("props.vehicle in constructor", props.history.vehicle);
  // console.log(this.state.vehicles);
  // console.log(this.props.location.vehicles);
// };

  componentDidMount(): void {
  }

  deleteVehicle = (vehicle) => {
    this.setState(prevState => {
      let {vehicles} = prevState;
      const indexOfVehicle = vehicles.findIndex(v => v.iid === vehicle.iid);
      vehicles = this.state.vehicles.slice(0, indexOfVehicle).concat(this.state.vehicles.slice(indexOfVehicle + 1));

      return ({vehicles});
    });
  };
  // old version
  // deleteVehicle = (e, index) => {
  //   this.setState({vehicles: this.state.vehicles.slice(0, index).concat(this.state.vehicles.slice(index + 1))});
  // };

// delete( id ) {
//     firebase.firestore().collection( 'boards' )
//         .doc( id ).delete().then( () => {
//         console.log( "Document successfully deleted!" );
//         this.props.history.push( "/" );
//     } ).catch( ( error ) => {
//         console.error( "Error removing document: ", error );
//     });
// }

  editVehicle = (vehicle, callback) => {
    this.setState(prevState => {
      const {vehicles} = prevState;
      const indexOfVehicle = vehicles.findIndex(v => v.iid === vehicle.iid);
      vehicles[indexOfVehicle] = vehicle;

      return ({vehicles});
    }, callback);
  };

  render() {
    if (this.state.vehicles == null) {
      return (
          <div>Loading Data, setting states</div>
      )
    } else {
      return (
          <div>
            {/*<p>test</p>*/}

            <Switch>
              {/*pass props from react-router (such as history and match), along with vehicles from the state*/}
              <Route
                  exact path="/"
                  render={
                    props =>
                        <Home
                            {...props}
                            columnHeadings={this.state.columnHeadings}
                            vehicles={this.state.vehicles}
                            deleteVehicle={this.deleteVehicle}
                        />
                  }
              />
              {/*pass props from react-router (such as history and match), along with vehicles from the state and editVehicle*/}
              <Route
                  path="/edit/:iid"
                  render={
                    props =>
                        <EditAdd
                            {...props}
                            vehicles={this.state.vehicles}
                            editVehicle={this.editVehicle}
                        />
                  }
              />
              <Route exact path="/add/" component={EditAdd}/>
              <Route exact path="/services/"
                     render={
                       props =>
                           <Services
                               {...props}
                               columnHeadings={this.state.columnHeadings}
                               vehicles={this.state.vehicles}
                               deleteVehicle={this.deleteVehicle}
                               services={this.state.services}
                           />
                     }
              />
            </Switch>
          </div>

      )
    }
  }
}


// iid: this.props.iid,
// model: this.props.model,
// manufacturer: this.props.manufacturer,
// odometer: this.props.odometer,
// requiresServicing: this.props.requiresServicing,
// dateManufactured: this.props.dateManufactured,
// datePurchased: this.props.datePurchased,
// dateLastServiced: this.props.dateLastServiced,
// kilometersSinceServiced: this.props.kilometersSinceServiced,
// kilometersPerService: this.props.kilometersPerService,
// fuelCapacity: this.props.fuelCapacity,
// fuelEconomy: this.props.fuelEconomy,
// weight: this.props.weight,
// VIN: this.props.VIN,
// registrationNumber: this.props.registrationNumber,

/*
<tr>
  {this.state.columnHeadings.map(temp =>
      <td>{temp.field}</td>
  )}
</tr>

{vehicle[index].map(vehicleData =>

{this.state.vehicles.map((vehicle, index) =>
    <tr>
      {[this.state.vehicles[1]].map(vehicleData =>
          <td>{vehicleData}</td>
      )}
    </tr>
)}
*/

// editDelete = (vehicle, index) => {
//   console.log(this.state.operation);
//   if (this.state.operation === "edit") {
//     console.log("Editting vehicle:", index);
//     console.log(vehicle);
//   }
//   if (this.state.operation === "delete") {
//     console.log("Deleting vehicle:", index);
//     console.log(vehicle);
//   }
// };

// add() {
//   console.log("adding vehicle")
// }
//
// edit = e => {
//   // console.log(e.state.operation);
//   e.this.setState({operation: "edit"})
// };

{/*<MDBBtn onClick={this.add}>*/
}
{/*  Add*/
}
{/*</MDBBtn>*/
}
{/*<MDBBtn onClick={this.edit}>*/
}
{/*<MDBBtn onClick={function () {*/
}
{/*  here.setState({operation: "edit"})*/
}
{/*}}>*/
}
{/*  EditAdd*/
}
{/*</MDBBtn>*/
}
{/*<MDBBtn onClick={this.delete}>*/
}
{/*    Delete*/
}
{/*</MDBBtn>*/
}


{/*<MDBBtn onClick={this.add}>*/
}
{/*  Add*/
}
{/*</MDBBtn>*/
}
{/*<MDBBtn onClick={this.edit}>*/
}
{/*<MDBBtn onClick={function () {*/
}
{/*  here.setState({operation: "edit"})*/
}
{/*}}>*/
}
{/*  EditAdd*/
}
{/*</MDBBtn>*/
}
{/*<MDBBtn onClick={this.delete}>*/
}
{/*    Delete*/
}
{/*</MDBBtn>*/
}


// let _vehicles;
// if (props.location.vehicles) {
//   _vehicles = props.location.vehicles;
// } else {
//   console.log("loading the vehicle data, because this.props.location.vehicles was NOT defined OR was null");
//   // TODO: PUT A LOADER IN HERE FOR THE FIREBASE DATA
//   _vehicles = [
//     {
//       iid: "Jeff's Jeep",
//       manufacturer: "Jeep",
//       model: "Wrangler (JK)",
//       odometer: 280000,
//       requiresServicing: "Yes",
//       dateManufactured: 2017,
//       datePurchased: "2017/05/20",
//       dateLastServiced: -1,
//       kilometersSinceServiced: 2800000,
//       kilometersPerService: 90000,
//       fuelEconomy: -1,
//       fuelCapacity: 104,
//       weight: 1.45,
//       VIN: "ExampleVIN",
//       registrationNumber: "1ABC-123",
//     },
//     {
//       iid: "Carol's Corolla",
//       manufacturer: "Toyota",
//       model: "Corolla (E160)",
//       odometer: 20000,
//       requiresServicing: "No",
//       dateManufactured: 2014,
//       datePurchased: "2018/05/10",
//       dateLastServiced: -1,
//       kilometersSinceServiced: 2000,
//       kilometersPerService: 110000,
//       fuelEconomy: -1,
//       fuelCapacity: 82.5,
//       weight: 1.08,
//       VIN: "ExampleVIN",
//       registrationNumber: "1ABC-123",
//     },
//     {
//       iid: "Carol's 2nd Corolla",
//       manufacturer: "Toyota",
//       model: "Corolla (E160)",
//       odometer: 20000,
//       requiresServicing: "No",
//       dateManufactured: 2014,
//       datePurchased: "2018/06/04",
//       dateLastServiced: -1,
//       kilometersSinceServiced: 2000,
//       kilometersPerService: 110000,
//       fuelEconomy: -1,
//       fuelCapacity: 82.5,
//       weight: 1.08,
//       VIN: "ExampleVIN",
//       registrationNumber: "1ABC-123",
//     }
//   ];


{/*<Route path="/create" component={ Create }/>*/
}
{/*<Route path="/show/:id" component={ Show }/>*/
}


{/*---- MY OLD CODE*/
}


{/*<div className="p-5">*/
}

{/*  /!*this.state.headingsAndData.map(item =>*!/*/
}
{/*  <Table striped bordered>*/
}
{/*    <thead>*/
}
{/*    <tr>*/
}
{/*      <th></th>*/
}
{/*      {*/
}
{/*        (this.state.columnHeadings !== undefined)*/
}
{/*        &&*/
}
{/*        this.state.columnHeadings.map(heading =>*/
}
{/*            <th>{heading.label}</th>*/
}
{/*        )}*/
}
{/*    </tr>*/
}
{/*    </thead>*/
}
{/*    <tbody>*/
}

{/*    {*/
}
{/*      (this.state.vehicles !== undefined)*/
}
{/*      &&*/
}
{/*      this.state.vehicles.map((vehicle, index) =>*/
}
{/*          <tr>*/
}
{/*            <td>*/
}
{/*              /!*<Link className="btn btn-grey m-1"*!/*/
}
{/*              /!*<Link className="btn btn-secondary m-1"*!/*/
}
{/*              <Link className="btn btn-secondary m-1"*/
}
{/*                    to={{*/
}
{/*                      pathname: `/edit/${vehicle.iid}`,*/
}
{/*                      columnHeadings: this.state.columnHeadings,*/
}
{/*                      vehicles: this.state.vehicles,*/
}
{/*                      originalVehicles: this.state.vehicles,*/
}
{/*                      editOrAdd: "edit",*/
}
{/*                      index: index,*/
}
{/*                      hasLoaded: false,*/
}
{/*                    }}>*/
}
{/*                EditAdd*/
}
{/*              </Link>*/
}
{/*              <Button color="danger"*/
}
{/*                      className="m-1"*/
}
{/*                  // onClick={this.delete(this, index)}>*/
}
{/*                      onClick={() => this.delete(this, index)}>*/
}
{/*                Delete*/
}
{/*              </Button>*/
}
{/*            </td>*/
}
{/*            {*/
}
{/*              Object.keys(vehicle).map(key =>*/
}
{/*                  <td>{vehicle[key]}</td>*/
}
{/*              )*/
}
{/*            }*/
}

{/*          </tr>*/
}
{/*      )}*/
}
{/*    <tr>*/
}
{/*      <td>*/
}
{/*        <Link className="btn btn-primary m-1"*/
}
{/*              to={{*/
}
{/*                pathname: "/add/",*/
}
{/*                columnHeadings: this.state.columnHeadings,*/
}
{/*                vehicle: this.state.vehicles[0],*/
}
{/*                editOrAdd: "add",*/
}
{/*              }}>*/
}
{/*          Add*/
}
{/*        </Link>*/
}
{/*      </td>*/
}
{/*      {*/
}
{/*        [...Array(this.state.columnHeadings.length)].map(() =>*/
}
{/*            <td></td>*/
}
{/*        )*/
}
{/*      }*/
}
{/*    </tr>*/
}

{/*    </tbody>*/
}

{/*  </Table>*/
}
{/*</div>*/
}

{/*/!*<label htmlFor="title">*!/*/
}
{/*/!*    {item[0].label}*!/*/
}
{/*/!*</label>*!/*/
}
{/*/!*<input type="text"*!/*/
}
{/*/!*       className="form-control"*!/*/
}
{/*/!*       name={item[0].field}*!/*/
}
{/*/!*       value={this.state.vehicle[item[0].field]}*!/*/
}
{/*/!*       onChange={this.onChange}*!/*/
}
{/*/!*       placeholder={item[1]}>*!/*/
}

{/*/!*<strong>{ this.state.vehicle.manufacturer }</strong> - { this.state.vehicle.model }*!/*/
}
{/*/!*ml = margin left*!/*/
}
{/*/!*mr = margin right*!/*/
}
{/*/!*mb = margin bottom*!/*/
}
{/*/!*mt = margin top*!/*/
}
{/*/!*<MDBBadge color="danger"*!/*/
}
{/*/!*          className="ml-2 float-right"*!/*/
}
{/*/!*          onClick={ () => this.props.onDelete( this.props.id ) }>*!/*/
}
{/*/!*    <MDBIcon icon="minus"/>*!/*/
}
{/*/!*</MDBBadge>*!/*/
}


{/*/!*<Link to={{*!/*/
}
{/*/!*    pathname: "/",*!/*/
}
{/*/!*    vehicle: this.state.vehicle,*!/*/
}
{/*/!*}}>*!/*/
}
{/*/!*    Home*!/*/
}
{/*/!*</Link>*!/*/
}
