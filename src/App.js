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
    /* properties: blank... */

    super(props);
    let _vehicles;
    // TODO: PUT A LOADER IN HERE FOR THE FIREBASE DATA
    _vehicles = [
      {
        vehicleID: "Jeff's Jeep",
        VIN: "ExampleVIN",
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
        registrationNumber: "1ABC-123",
      },
      {
        vehicleID: "Carol's Corolla",
        VIN: "ExampleVIN",
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
        registrationNumber: "1ABC-123",
      },
      {
        vehicleID: "Carol's 2nd Corolla",
        VIN: "ExampleVIN",
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
        registrationNumber: "1ABC-123",
      }
    ];

    this.state = {

      // IMPORTANT : make sure all page-specific data contains their
      // associated page's name in their own names
      pages: ["vehicles", "services", "bookings", "journeys", "refuels"],

      vehicles: _vehicles,
      vehiclesHeadings: [
        {
          label: "Vehicle ID",
          field: "vehicleID",
        },
        {
          label: "VIN",
          field: "VIN",
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
          label: "Reg. No.",
          field: "registrationNumber",
        },
      ],
      vehiclesDefaultRecord: {
        vehicleID: "Jeff's Jeep",
        VIN: "ExampleVIN",
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
        registrationNumber: "1ABC-123",
      },

      services: [
        {
          vehicleID: "Jeff's Jeep",
          VIN: "ExampleVIN",
          serviceID: "001-IJ454",
          odometer: "142000",
          date: "2019/04/03",
          serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
        },
        {
          vehicleID: "Jeff's Jeep",
          VIN: "ExampleVIN",
          serviceID: "002-FE654",
          odometer: "74000",
          date: "2015/06/01",
          serviceLocation: "Autobahn Mechanical and Electrical Services Victoria Park",
        },
        {
          vehicleID: "Carol's Corolla",
          VIN: "ExampleVIN",
          serviceID: "001-AA000",
          odometer: "122000",
          date: "2018/08/22",
          serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
        },
        {
          vehicleID: "Carol's 2nd Corolla",
          VIN: "ExampleVIN",
          serviceID: "001-AA000",
          odometer: "101000",
          date: "2018/08/23",
          serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
        },
      ],
      servicesHeadings: [
        {
          label: "Vehicle ID",
          field: "vehicleID",
        },
        {
          label: "VIN",
          field: "VIN",
        },
        {
          label: "Service ID",
          field: "serviceID",
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
      servicesDefaultRecord: {
        vehicleID: "Jeff's Jeep",
        VIN: "ExampleVIN",
        serviceID: "001-IJ454",
        odometer: "142000",
        date: "2019/04/03",
        serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
      },

      bookings: [
        {
          vehicleID: "Jeff's Jeep",
          VIN: "ExampleVIN",
          bookingID: "002-EE037",
          bookingStartDate: "2019/04/06",
          bookingEndDate: "2019/04/09",
          odometerAtStart: "74000",
          dateCreated: "2019/04/06",
          dateLastUpdated: "2019/04/06",
        },
        {
          vehicleID: "Jeff's Jeep",
          VIN: "ExampleVIN",
          bookingID: "001-KD037",
          bookingStartDate: "2019/02/06",
          bookingEndDate: "2019/03/09",
          odometerAtStart: "62333",
          dateCreated: "2019/02/06",
          dateLastUpdated: "2019/03/09",
        },
        {
          vehicleID: "Carol's Corolla",
          VIN: "ExampleVIN",
          bookingID: "001-II030",
          bookingStartDate: "2019/05/06",
          bookingEndDate: "2019/05/11",
          odometerAtStart: "91000",
          dateCreated: "2019/05/06",
          dateLastUpdated: "2019/05/06",
        },
        {
          vehicleID: "Carol's 2nd Corolla",
          VIN: "ExampleVIN",
          bookingID: "001-KJ022",
          bookingStartDate: "2019/05/06",
          bookingEndDate: "2019/05/11",
          odometerAtStart: "91000",
          dateCreated: "2019/05/06",
          dateLastUpdated: "2019/05/06",
        },
      ],
      bookingsHeadings: [
        {
          label: "Vehicle ID",
          field: "vehicleID",
        },
        {
          label: "VIN",
          field: "VIN",
        },
        {
          label: "Booking ID",
          field: "bookingID",
        },
        {
          label: "Last Booking Start Date",
          field: "bookingStartDate",
        },
        {
          label: "Last Booking End Date",
          field: "bookingEndDate",
        },
        {
          label: "Odometer When Last Booked (km)",
          field: "odometerAtStart",
        },
        {
          label: "Date Last Booking was Created",
          field: "dateCreated",
        },
        {
          label: "Date Last Booking was Updated",
          field: "dateLastUpdated",
        },
      ],
      bookingsDefaultRecord: {
        vehicleID: "Jeff's Jeep",
        VIN: "ExampleVIN",
        bookingID: "002-EE037",
        bookingStartDate: "2019/04/06",
        bookingEndDate: "2019/04/09",
        odometerAtStart: "74000",
        dateCreated: "2019/04/06",
        dateLastUpdated: "2019/04/06",
      },

      journeys: [
        {
          vehicleID: "Jeff's Jeep",
          VIN: "ExampleVIN",
          bookingID: "002-EE037",
          journeyID: "0003-XXI7",
          journeyStartDateTime: "2019/04/06 08:22",
          journeyEndDateTime: "2019/04/09 08:47",
          odometerAtStart: "74000",
          odometerAtEnd: "74018",
          journeyStartLocation: "89080-789777",
          journeyEndLocation: "89080-789889",
          dateCreated: "2019/04/06",
          dateLastUpdated: "2019/04/06",
        },
        {
          vehicleID: "Jeff's Jeep",
          VIN: "ExampleVIN",
          bookingID: "002-EE037",
          journeyID: "0002-XXI7",
          journeyStartDateTime: "2019/04/06 08:22",
          journeyEndDateTime: "2019/04/09 08:47",
          odometerAtStart: "74000",
          odometerAtEnd: "74018",
          journeyStartLocation: "89080-789777",
          journeyEndLocation: "89080-789889",
          dateCreated: "2019/04/06",
          dateLastUpdated: "2019/04/06",
        },
        {
          vehicleID: "Carol's Corolla",
          VIN: "ExampleVIN",
          bookingID: "002-EE037",
          journeyID: "0002-XXI7",
          journeyStartDateTime: "2019/04/06 08:22",
          journeyEndDateTime: "2019/04/09 08:47",
          odometerAtStart: "74000",
          odometerAtEnd: "74018",
          journeyStartLocation: "89080-789777",
          journeyEndLocation: "89080-789889",
          dateCreated: "2019/04/06",
          dateLastUpdated: "2019/04/06",
        },
        {
          vehicleID: "Carol's 2nd Corolla",
          VIN: "ExampleVIN",
          bookingID: "002-EE037",
          journeyID: "0002-XXI7",
          journeyStartDateTime: "2019/04/06 08:22",
          journeyEndDateTime: "2019/04/09 08:47",
          odometerAtStart: "74000",
          odometerAtEnd: "74018",
          journeyStartLocation: "89080-789777",
          journeyEndLocation: "89080-789889",
          dateCreated: "2019/04/06",
          dateLastUpdated: "2019/04/06",
        },
      ],
      journeysHeadings: [
        {
          label: "Vehicle ID",
          field: "vehicleID",
        },
        {
          label: "VIN",
          field: "VIN",
        },
        {
          label: "Booking ID",
          field: "bookingID",
        },
        {
          label: "Journey ID",
          field: "journeyID",
        },
        {
          label: "Start Date-Time",
          field: "journeyStartDateTime",
        },
        {
          label: "End Date-Time",
          field: "journeyEndDateTime",
        },
        {
          label: "Odometer At Start (km)",
          field: "odometerAtStart",
        },
        {
          label: "Odometer At End (km)",
          field: "odometerAtEnd",
        },
        {
          label: "Starting Location",
          field: "journeyStartLocation",
        },
        {
          label: "Ending Location",
          field: "journeyEndLocation",
        },
        {
          label: "Date Created",
          field: "dateCreated",
        },
        {
          label: "Date Last Updated",
          field: "dateLastUpdated",
        },
      ],
      journeysDefaultRecord:  {
        vehicleID: "Carol's 2nd Corolla",
        VIN: "ExampleVIN",
        bookingID: "002-EE037",
        journeyID: "0002-XXI7",
        journeyStartDateTime: "2019/04/06 08:22",
        journeyEndDateTime: "2019/04/09 08:47",
        odometerAtStart: "74000",
        odometerAtEnd: "74018",
        journeyStartLocation: "89080-789777",
        journeyEndLocation: "89080-789889",
        dateCreated: "2019/04/06",
        dateLastUpdated: "2019/04/06",
      },

      refuels: [
        {
          vehicleID: "Jeff's Jeep",
          VIN: "ExampleVIN",
          bookingID: "002-EE037",
          refuelID: "0001-XX00",
          fuelQuantity: 65.2,
          fuelPrice: 1.55,
          dateCreated: "2019/04/06",
          dateLastUpdated: "2019/04/06",
            },
        {
          vehicleID: "Jeff's Jeep",
          VIN: "ExampleVIN",
          bookingID: "001-JJI037",
          refuelID: "0001-XX00",
          fuelQuantity: 33.2,
          fuelPrice: 1.52,
          dateCreated: "2019/04/06",
          dateLastUpdated: "2019/04/06",
        },
        {
          vehicleID: "Carol's Corolla",
          VIN: "ExampleVIN",
          bookingID: "001-JJI037",
          refuelID: "0001-XX00",
          fuelQuantity: 33.2,
          fuelPrice: 1.52,
          dateCreated: "2019/04/06",
          dateLastUpdated: "2019/04/06",
        },
        {
          vehicleID: "Carol's 2nd Corolla",
          VIN: "ExampleVIN",
          bookingID: "001-JJI037",
          refuelID: "0001-XX00",
          fuelQuantity: 33.2,
          fuelPrice: 1.52,
          dateCreated: "2019/04/06",
          dateLastUpdated: "2019/04/06",
        },
      ],
      refuelsHeadings: [
        {
          label: "Vehicle ID",
          field: "vehicleID",
        },
        {
          label: "VIN",
          field: "VIN",
        },
        {
          label: "Booking ID",
          field: "bookingID",
        },
        {
          label: "Refuel ID",
          field: "refuelID",
        },
        {
          label: "Fuel Purchased (L)",
          field: "fuelQuantity",
        },
        {
          label: "Fuel Price ($/L)",
          field: "fuelPrice",
        },
        {
          label: "Date Created",
          field: "dateCreated",
        },
        {
          label: "Date Last Updated",
          field: "dateLastUpdated",
        },
      ],
      refuelsDefaultRecord: {
        vehicleID: "Carol's 2nd Corolla",
        VIN: "ExampleVIN",
        bookingID: "001-JJI037",
        refuelID: "0001-XX00",
        fuelQuantity: 33.2,
        fuelPrice: 1.52,
        dateCreated: "2019/04/06",
        dateLastUpdated: "2019/04/06",
      },
    };
  }

  // console.log("props.vehicle in constructor", props.history.vehicle);
  // console.log(this.state.vehicles);
  // console.log(this.props.location.vehicles);
// };

  componentDidMount(): void {
  }

  // deleteVehicle = (vehicle) => {
  //   this.setState(prevState => {
  //     let {vehicles} = prevState;
  //     const indexOfVehicle = vehicles.findIndex(v => v.vehicleID === vehicle.vehicleID);
  //     vehicles = this.state.vehicles.slice(0, indexOfVehicle).concat(this.state.vehicles.slice(indexOfVehicle + 1));
  //
  //     return ({vehicles});
  //   });
  // };

  editRecord = (record, recordIdField, dataArrayName, navigateBack) => {
    // console.log("dataArrayName", dataArrayName);
    const _data = this.state[dataArrayName];
    // get index of vehicle
    const _indexOfRecord = _data.findIndex(element => element[recordIdField] === record[recordIdField]);
    _data[_indexOfRecord] = record;
    this.setState({[dataArrayName]: _data}, navigateBack);
  };

  addRecord = (record, dataArrayName, navigateBack) => {
    // console.log("dataArrayName", dataArrayName);
    let _data = this.state[dataArrayName];
    _data.push(record);
    console.log("_data", _data);
    console.log("record", record);
    this.setState({[dataArrayName]: _data}, navigateBack);
  };

  deleteRecord = (record, recordIdField, dataArrayName) => {
    // console.log("dataArrayName", dataArrayName);
    // console.log("recordIdField", recordIdField);
    const _indexOfRecord = this.state[dataArrayName].findIndex(element => element[recordIdField] === record[recordIdField]);
    // console.log("_indexOfRecord", _indexOfRecord);
    this.setState({[dataArrayName]: this.state[dataArrayName].slice(0, _indexOfRecord).concat(this.state[dataArrayName].slice(_indexOfRecord + 1))});
  };

  render() {
    if (this.state.vehicles == null) {
      return (
          <div>Loading Data, setting states</div>
      )
    } else {
      return (
          <div>
            <Route
                exact path={["/vehicles/", "/services/", "/bookings/", "/journeys/", "/refuels/"]}
                render={
                  props =>
                      <Home
                          {...props}
                          pages={this.state.pages}
                      />
                }
            />

            {this.state.pages.map(page =>
                <Route
                    // path={["/edit/:vehicleID", "/add/"]}
                    exact path={`/${page}/`}
                    render={
                      props =>
                          <ShowTables
                              {...props}
                              columnHeadings={this.state[`${page}Headings`]}
                              data={this.state[page]}
                              dataArrayName={page}
                              recordIdFieldName={page.substring(0, page.length - 1) + "ID"} // the UNIQUE ID Field for the record's type
                              deleteRecord={this.deleteRecord}
                          />
                    }
                />
            )}

            {this.state.pages.map(page =>
                <Route
                    exact path={[`/${page}/:operation/:recordID`, `/${page}/:operation/`]}
                    render={
                      props =>
                          <EditAdd
                              {...props}
                              columnHeadings={this.state[`${page}Headings`]}
                              data={this.state[page]} // this is so that the vehicle can be retrieved by it's vehicleID in the URL
                              dataArrayName={page}
                              recordIdFieldName={page.substring(0, page.length - 1) + "ID"} // the UNIQUE ID Field for the record's type
                              editRecord={this.editRecord}
                              addRecord={this.addRecord}
                              dataDefaultRecord={this.state[`${page}DefaultRecord`]} // this is for the add form
                          />
                    }
                />
            )}
          </div>
      )
    }
  }
}

// pages: [
//   {
//     dataArrayName: "vehicles",
//     recordName: "vehicle",
//     recordNameCapitalized: "Vehicle"
//   },
//   {
//     dataArrayName: "services",
//     recordName: "service",
//     recordNameCapitalized: "Service"
//   },
//   {
//     dataArrayName: "bookings",
//     recordName: "booking",
//     recordNameCapitalized: "Booking"
//   },
//   {
//     dataArrayName: "journeys",
//     recordName: "journey",
//     recordNameCapitalized: "Journey"
//   },
//   {
//     dataArrayName: "refuels",
//     recordName: "Refuel",
//     recordNameCapitalized: "refuels"
//   },
// ],