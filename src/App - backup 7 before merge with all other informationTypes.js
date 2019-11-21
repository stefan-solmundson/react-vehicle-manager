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
    vehicleHeadings
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
      vehicleHeadings: [
        {
          label: "Internal ID",
          field: "iid",
        },
        {
          label: "Model",
          field: `model`,
        },
        {
          label: "Make",
          field: "manufacturer",
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
      defaultVehicle: {
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
      servicesHeadings: [
        {
          label: "Internal ID",
          field: "iid",
        },
        {
          label: "Odometer Reading",
          field: "odometer",
        },
        {
          label: "Date Last Serviced",
          field: "date",
        },
        {
          label: "Location of Last Service",
          field: "serviceLocation",
        },
      ],
      services: [
        {
          iid: "Jeff's Jeep",
          VIN: "ExampleVIN",
          // vehServHistArr: [
          vehicleServiceHistoryArray: [
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
          VIN: "ExampleVIN",
          vehicleServiceHistoryArray: [
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
          VIN: "ExampleVIN",
          vehicleServiceHistoryArray: [
            // last service
            {
              odometer: "101000",
              date: "2018/08/23",
              serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
            },
          ],
        },
      ],
      defaultService: [
        {
          iid: "Jeff's Jeep",
          vehicleServiceHistoryArray: [
            // last service
            {
              odometer: "142000",
              date: "2019/04/03",
              serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
            },
          ]
        }
      ]
    };
  }

  // console.log("props.vehicle in constructor", props.history.vehicle);
  // console.log(this.state.vehicles);
  // console.log(this.props.location.vehicles);
// };

  componentDidMount(): void {
  }

  deleteRecord = (vehicle) => {
    this.setState(prevState => {
      let {vehicles} = prevState;
      const indexOfVehicle = vehicles.findIndex(v => v.iid === vehicle.iid);
      vehicles = this.state.vehicles.slice(0, indexOfVehicle).concat(this.state.vehicles.slice(indexOfVehicle + 1));

      return ({vehicles});
    });
  };
  // old version
  // deleteRecord = (e, index) => {
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

  editRecord = (vehicle, callback) => {
    this.setState(prevState => {
      const {vehicles} = prevState;
      const indexOfVehicle = vehicles.findIndex(v => v.iid === vehicle.iid);
      vehicles[indexOfVehicle] = vehicle;

      return ({vehicles});
    }, callback);
  };

  addRecord = (vehicle, callback) => {
    let _vehicles = this.state.vehicles;
    _vehicles.push(vehicle);
    this.setState({vehicles: _vehicles}, callback);
  };

  addRecordServiceRecord = (vehicle, callback) => {

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
              {/*<Route*/}
              {/*    exact path="/"*/}
              {/*    render={*/}
              {/*      props =>*/}
              {/*          <Home*/}
              {/*              {...props}*/}
              {/*              columnHeadings={this.state.vehicleHeadings}*/}
              {/*              data={this.state.vehicles}*/}
              {/*              deleteRecord={this.deleteRecord}*/}
              {/*          />*/}
              {/*    }*/}
              {/*/>*/}
              {/*pass props from react-router (such as history and match), along with vehicles from the state and editRecord*/}
              <Route
                  // path={["/edit/:iid", "/add/"]}
                  path={["/edit/:iid", "/add/"]}
                  render={
                    props =>
                        <EditAdd
                            {...props}
                            // vehicleHeadings={this.state.vehicleHeadings}
                            columnHeadings={this.state.vehicleHeadings}
                            data={this.state.vehicles}
                            editRecord={this.editRecord}
                            addRecord={this.addRecord}
                            defaultVehicle={this.state.defaultVehicle}
                        />
                  }
              />
              {/*<Route*/}
              {/*    path="/add/"*/}
              {/*    render={*/}
              {/*      props =>*/}
              {/*          <Edit*/}
              {/*              {...props}*/}
              {/*              vehicleHeadings={this.state.vehicleHeadings}*/}
              {/*              vehicles={this.state.vehicles}*/}
              {/*              editRecord={this.state.vehicles[0]}*/}
              {/*          />*/}
              {/*    }*/}
              {/*/>*/}
              {/*<Route exact path="/services/"*/}
              {/*       render={*/}
              {/*         props =>*/}
              {/*             <Services*/}
              {/*                 {...props}*/}
              {/*                 servicesHeadings={this.state.servicesHeadings}*/}
              {/*                 services={this.state.services}*/}
              {/*                 // deleteRecord={this.deleteRecord}*/}
              {/*             />*/}
              {/*       }*/}
              {/*/>*/}
              <Route exact path="/services/"
                     render={
                       props =>
                           <Home
                               {...props}
                               columnHeadings={this.state.servicesHeadings}
                               // services={this.state.services}
                               data={this.state.services}
                               // deleteRecord={this.deleteRecord}
                           />
                     }
              />
            </Switch>
          </div>

      )
    }
  }
}