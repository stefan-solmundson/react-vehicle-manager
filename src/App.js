// this is the tutorial we followed
// https://mdbootstrap.com/education/react/agenda-4-bootstrap/

import React, { Component } from 'react';
import EditAdd from "./components/EditAdd";
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import { ShowTables } from "./components/ShowTables";
import { Home } from "./components/Home";
import { Services } from "./components/Services";


import { MDBBtn, MDBBadge, MDBIcon, MDBDataTable, MDBContainer } from 'mdbreact';
import { Link } from "react-router-dom";
import { Table, Button } from 'reactstrap';

// import './App.css';

export class App extends Component {
  // state = {
  //   // reloadDataBase,
  // };

  constructor( props ) {
    /* properties
    vehicleHeadings
    vehicles
    */

    // const _pages = [
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
    // ];

    // const _pages = ["vehicles", "services", "bookings", "journeys", "refuels"];

    super( props );
    let _vehicles;
    // TODO: PUT A LOADER IN HERE FOR THE FIREBASE DATA
    _vehicles = [
      {
        vid: "Jeff's Jeep",
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
        vid: "Carol's Corolla",
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
        vid: "Carol's 2nd Corolla",
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
    let test = "twoo"

    this.state = {
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
      // IMPORTANT : make sure all page-specific data contains their
      // associated page's name in their own names
      pages: [ "vehicles", "services", "bookings", "journeys", "refuels" ],

      vehiclesHeadings: [
        {
          label: "Vehicle ID",
          field: "vid",
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
      vehicles: _vehicles,
      vehiclesDefaultRecord: {
        vid: "Jeff's Jeep",
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

      servicesHeadings: [
        {
          label: "Vehicle ID",
          field: "vid",
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
      services: [
        {
          vid: "Jeff's Jeep",
          VIN: "ExampleVIN",
          vehicleServicesArray: [
            // last service
            {
              serviceID: "#001-IJ454",
              odometer: "142000",
              date: "2019/04/03",
              serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
            },
            // 2nd last service
            {
              serviceID: "#002-FE654",
              odometer: "74000",
              date: "2015/06/01",
              serviceLocation: "Autobahn Mechanical and Electrical Services Victoria Park",
            },
          ],
        },
        {
          vid: "Carol's Corolla",
          VIN: "ExampleVIN",
          vehicleServicesArray: [
            {
              serviceID: "#001-AA000",
              odometer: "122000",
              date: "2018/08/22",
              serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
            },
          ],
        },
        {
          vid: "Carol's 2nd Corolla",
          VIN: "ExampleVIN",
          vehicleServicesArray: [
            {
              serviceID: "#001-AA000",
              odometer: "101000",
              date: "2018/08/23",
              serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
            },
          ],
        },
      ],
      servicesDefaultRecord: {
        vid: "Jeff's Jeep",
        VIN: "ExampleVIN",
        vehicleServicesArray: [
          {
            serviceID: "#001-IJ454",
            odometer: "142000",
            date: "2019/04/03",
            serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
          },
        ],
      },

      bookings: [
        {
          vid: "Jeff's Jeep",
          VIN: "ExampleVIN",
          vehicleBookingsArray: [
            // last booking
            {
              bookingID: "#002-EE037",
              bookingStartDate: "2019/04/06",
              bookingEndDate: "2019/04/09",
              odometerAtStart: "74000",
              dateCreated: "2019/04/06",
              dateLastUpdated: "2019/04/06",
            },
            // 2nd last booking
            {
              bookingID: "#001-KD037",
              bookingStartDate: "2019/02/06",
              bookingEndDate: "2019/03/09",
              odometerAtStart: "62333",
              dateCreated: "2019/02/06",
              dateLastUpdated: "2019/03/09",
            },
          ],
        },
        {
          vid: "Carol's Corolla",
          VIN: "ExampleVIN",
          vehicleBookingsArray: [
            {
              bookingID: "#001-II030",
              bookingStartDate: "2019/05/06",
              bookingEndDate: "2019/05/11",
              odometerAtStart: "91000",
              dateCreated: "2019/05/06",
              dateLastUpdated: "2019/05/06",
            },
          ],
        },
        {
          vid: "Carol's 2nd Corolla",
          VIN: "ExampleVIN",
          vehicleBookingsArray: [
            {
              bookingID: "#001-KJ022",
              bookingStartDate: "2019/05/06",
              bookingEndDate: "2019/05/11",
              odometerAtStart: "91000",
              dateCreated: "2019/05/06",
              dateLastUpdated: "2019/05/06",
            },
          ],
        },
      ],
      bookingsHeadings: [
        {
          label: "Vehicle ID",
          field: "vid",
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
        vid: "Carol's Corolla",
        VIN: "ExampleVIN",
        vehicleBookingsArray: [
          {
            bookingID: "#001-II030",
            bookingStartDate: "2019/05/06",
            bookingEndDate: "2019/05/11",
            odometerAtStart: "91000",
            dateCreated: "2019/05/06",
            dateLastUpdated: "2019/05/06",
          },
        ],
      },

      journeys: [
        {
          vid: "Jeff's Jeep",
          VIN: "ExampleVIN",
          vehicleJourneysArray: [
            // 2nd last journey
            {
              journeyID: "#0002-XXI7",
              bookingID: "#002-EE037",
              journeyStartDateTime: "2019/04/06 08:22",
              journeyEndDateTime: "2019/04/09 08:47",
              odometerAtStart: "74000",
              odometerAtEnd: "74018",
              journeyStartLocation: "89080-789777",
              journeyEndLocation: "89080-789889",
              dateCreated: "2019/04/06",
              dateLastUpdated: "2019/04/06",
            },
            // 2nd last journey
            {
              journeyID: "#0002-XXI7",
              bookingID: "#002-EE037",
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
        },
        {
          vid: "Carol's Corolla",
          VIN: "ExampleVIN",
          vehicleJourneysArray: [
            {
              journeyID: "#0002-XXI7",
              bookingID: "#002-EE037",
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
        },
        {
          vid: "Carol's 2nd Corolla",
          VIN: "ExampleVIN",
          vehicleJourneysArray: [
            {
              journeyID: "#0002-XXI7",
              bookingID: "#002-EE037",
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
        },
      ],
      journeysHeadings: [
        {
          label: "Vehicle ID",
          field: "vid",
        },
        {
          label: "VIN",
          field: "VIN",
        },
        {
          label: "Journey ID",
          field: "journeyID",
        },
        {
          label: "Booking ID",
          field: "bookingID",
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
      journeysDefaultRecord: {
        vid: "Carol's Corolla",
        VIN: "ExampleVIN",
        vehicleJourneysArray: [
          {
            journeyID: "#0002-XXI7",
            bookingID: "#002-EE037",
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
      },

      refuels: [
        {
          vid: "Jeff's Jeep",
          VIN: "ExampleVIN",
          vehicleRefuelsArray: [
            {
              bookingID: "#002-EE037",
              fuelQuantity: 65.2,
              fuelPrice: 1.55,
              dateCreated: "2019/04/06",
              dateLastUpdated: "2019/04/06",
            },
            {
              bookingID: "#001-JJI037",
              fuelQuantity: 33.2,
              fuelPrice: 1.52,
              dateCreated: "2019/04/06",
              dateLastUpdated: "2019/04/06",
            },
          ],
        },
        {
          vid: "Carol's Corolla",
          VIN: "ExampleVIN",
          vehicleRefuelsArray: [
            {
              bookingID: "#001-JJI037",
              fuelQuantity: 33.2,
              fuelPrice: 1.52,
              dateCreated: "2019/04/06",
              dateLastUpdated: "2019/04/06",
            },
          ],
        },
        {
          vid: "Carol's 2nd Corolla",
          VIN: "ExampleVIN",
          vehicleRefuelsArray: [
            {
              bookingID: "#001-JJI037",
              fuelQuantity: 33.2,
              fuelPrice: 1.52,
              dateCreated: "2019/04/06",
              dateLastUpdated: "2019/04/06",
            },
          ],
        },
      ],
      refuelsHeadings: [
        {
          label: "Vehicle ID",
          field: "vid",
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
        vid: "Carol's Corolla",
        VIN: "ExampleVIN",
        vehicleRefuelsArray: [
          {
            bookingID: "#001-JJI037",
            fuelQuantity: 33.2,
            fuelPrice: 1.52,
            dateCreated: "2019/04/06",
            dateLastUpdated: "2019/04/06",
          },
        ],
      },
    };
  }

  // console.log("props.vehicle in constructor", props.history.vehicle);
  // console.log(this.state.vehicles);
  // console.log(this.props.location.vehicles);
// };

  componentDidMount(): void {
  }

  deleteVehicle = ( vehicle ) => {
    this.setState( prevState => {
      let { vehicles } = prevState;
      const indexOfVehicle = vehicles.findIndex( v => v.vid === vehicle.vid );
      vehicles = this.state.vehicles.slice( 0, indexOfVehicle ).concat( this.state.vehicles.slice( indexOfVehicle + 1 ) );

      return ( { vehicles } );
    } );
  };

  editRecord = ( record, infoType, navigateBack ) => {
    console.log("hey");
    console.log( "infoType", infoType );
    const _data = this.state[ infoType ];
    // get index of vehicle
    const _indexOfRecord = _data.findIndex( v => v.VIN === record.VIN );
    _data[ _indexOfRecord ] = record;
    this.setState( { [ infoType ]: _data }, navigateBack );
  };

  addRecord = ( record, infoType, navigateBack ) => {
    // console.log("infoType", infoType);
    let _data = this.state[ infoType ];
    _data.push( record );
    console.log("_data", _data);
    console.log("record", record);
    this.setState( { [ infoType ]: _data }, navigateBack );
  };

  deleteRecord = ( record, infoType ) => {
    // console.log("infoType", infoType);
    const _indexOfRecord = this.state[ infoType ].findIndex( v => v.VIN === record.VIN );
    this.setState( { [ infoType ]: this.state.vehicles.slice( 0, _indexOfRecord ).concat( this.state.vehicles.slice( _indexOfRecord + 1 ) ) } );
  };

  render() {
    if ( this.state.vehicles == null ) {
      return (
        <div>Loading Data, setting states</div>
      )
    } else {
      return (
        <div>
          <Route
            exact path={ [ "/vehicles/", "/services/", "/bookings/", "/journeys/", "/refuels/" ] }
            render={
              props =>
                <Home
                  { ...props }
                  pages={ this.state.pages }
                />
            }
          />

          { this.state.pages.map( page =>
            <Route
              // path={["/edit/:vid", "/add/"]}
              exact path={ `/${ page }/` }
              render={
                props =>
                  <ShowTables
                    { ...props }
                    columnHeadings={ this.state[ `${ page }Headings` ] }
                    data={ this.state[ page ] }
                    dataArrayName={ page }
                    deleteRecord={ this.deleteRecord }
                  />
              }
            />
          ) }

          { this.state.pages.map( page =>
            <Route
              exact path={ [ `/${ page }/:operation/:vid`, `/${ page }/:operation/` ] }
              render={
                props =>
                  <EditAdd
                    { ...props }
                    columnHeadings={ this.state[ `${ page }Headings` ] }
                    data={ this.state[ page ] } // this is so that the vehicle can be retrieved by it's vid in the URL
                    dataArrayName={ page }
                    editRecord={ this.editRecord }
                    addRecord={ this.addRecord }
                    dataDefaultRecord={ this.state[ `${ page }DefaultRecord` ] } // this is for the add form
                  />
              }
            />
          ) }
        </div>
      )
    }
  }
}