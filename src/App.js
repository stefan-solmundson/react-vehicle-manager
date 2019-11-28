// this is the tutorial we followed
// https://mdbootstrap.com/education/react/agenda-4-bootstrap/

import React, { Component } from 'react';
import EditAdd from "./components/EditAdd/EditAdd";
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import { ShowTables } from "./components/ShowTables/ShowTables";
import { Home } from "./components/Home/Home";
import { Services } from "./components/Services";
import { PrintDetails } from "./components/PrintDetails/PrintDetails"
import firebase from "./Firebase";

import { MDBBtn, MDBBadge, MDBIcon, MDBDataTable, MDBContainer } from 'mdbreact';
import { Link } from "react-router-dom";
import { Table, Button } from 'reactstrap';

import { localData } from './LocalData';

// import './App.css';

export class App extends Component {
  // state = {
  //   // reloadDataBase,
  // };

  constructor( props ) {
    /* properties: blank... */
    super( props );
    const _pages = localData.pages;

    this.offline = true;
    this.updloadLocalData = false;

    // TODO: PUT A LOADER IN HERE FOR THE FIREBASE DATA
    this.firebaseCollections = [];
    _pages.map( ( page, index ) => {
      this.firebaseCollections[ index ] = firebase.firestore().collection( page );
    } );
    // this.firebaseCollections = [firebase.firestore().collection('vehicles')];

    // this.firebaseCollection = firebase.firestore().collection('boards');
    this.unsubscribe = null;

    // let _vehicles;
    // _vehicles = ..;

    this.state = localData;
  }

  // DOWNLOADS Firebase Data
  // UPLOADS Local Data to Firebase
  componentDidMount(): void {
    if ( this.offline === false ) {
      // Receives calls when the Firebase-source-data is updated & automatically updates the applications data
      this.firebaseCollections.map( ( firebaseCollection, index ) => {
        console.log( firebaseCollection );
        // .onSnapshot reloads a firebase collection when it is updated
        this.unsubscribe = firebaseCollection.onSnapshot( docSnapshot => {
          // doc : document : record

          // FIREBASE SORTING:
          // Firebase-collections/arrays are sorted from newest to oldest
          // &
          // Firebase-documents/object-properties are sorted by firstly by capitals & secondly alphabetically
          // -
          // 'vehiclesHeadings' is an array, so it will maintain a NON-alphabetical order in Firebase    *(if uploaded properly)
          const _data = [];
          docSnapshot.forEach( ( doc ) => {
            // console.dir(doc);
            // console.dir(doc.data());
            let _record = {};
            // this.state.vehiclesHeadings.map(e => {
            this.state[ this.state.pages[ index ] + "Headings" ].map( e => { // this.state.pages[index] === dataArrayName
              // console.log(e);
              _record[ e.field ] = doc.data()[ e.field ];
              // console.log(_record[e.field]);
            } );
            _data.push( _record );
          } );
          // console.log("_data", _data);
          this.setState( { [ this.state.pages[ index ] ]: _data } );
        } );
      } );
    }

    // Upload locally defined to Firebase Database
    if ( this.updloadLocalData === true ) {
      this.state.pages.map( _page => {
        console.log( _page );
        console.log( this.state[ _page ] );
        this.state[ _page ].map( _record => {
          // updates the firebase record
          firebase.firestore().collection( _page ).doc( _record[ _page.substring( 0, _page.length - 1 ) + "ID" ] ).set( _record )
            .then( function () {
              console.log( "Document successfully written!" );
            } )
            .catch( function ( error ) {
              console.error( "Error writing document: ", error );
            } )
        } );
      } );
    }
  }

  /**
   * Edits/Modifies a record/document in a dataArray/collection
   * @param record - the record/document (vehicle/booking/service/etc.)
   * @param recordIdField - the records uniqueID field/key (vehicleID/serviceID/bookingID/et
   * @param dataArrayName - the dataArray/collection (vehicles/services/bookings/etc.)
   * @param navigateBack - A function that navigates to the page before this function was called.
   */
  editRecord = ( record, recordIdField, dataArrayName, navigateBack ) => {
    // Object.keys(record).map(field => console.log(record[field]));

    if ( this.offline === false ) {
      // updates the firebase record
      firebase.firestore().collection( dataArrayName ).doc( record[ recordIdField ] ).set( record )
        .then( function () {
          console.log( "Document successfully written!" );
        } )
        .catch( function ( error ) {
          console.error( "Error writing document: ", error );
        } );
      navigateBack();
    } else {
      // updates the local record
      // console.log("dataArrayName", dataArrayName);
      const _data = this.state[ dataArrayName ];
      // get index of vehicle
      const _indexOfRecord = _data.findIndex( element => element[ recordIdField ] === record[ recordIdField ] );
      _data[ _indexOfRecord ] = record;
      this.setState( { [ dataArrayName ]: _data }, this.updateOdometer( record, navigateBack ) )
    }
  };

  /**
   * Adds a record/document to a dataArray/collection
   * @param record - the record/document (vehicle/booking/service/etc.)
   * @param recordIdField - the records uniqueID field/key (vehicleID/serviceID/bookingID/et
   * @param dataArrayName - the dataArray/collection (vehicles/services/bookings/etc.)
   * @param navigateBack - A function that navigates to the page before this function was called.
   */
  addRecord = ( record, recordIdField, dataArrayName, navigateBack ) => {
    if ( this.offline === false ) {
      // Creates the firebase record
      firebase.firestore().collection( dataArrayName ).doc( record[ recordIdField ] ).set( record )
        .then( function () {
          console.log( "Document successfully written!" );
        } )
        .catch( function ( error ) {
          console.error( "Error writing document: ", error );
        } );
      navigateBack();
    } else {
      // adds a local record
      // console.log("dataArrayName", dataArrayName);
      let _data = this.state[ dataArrayName ];
      _data.push( record );
      // console.log("_data", _data);
      // console.log("record", record);
      this.setState( { [ dataArrayName ]: _data }, this.updateOdometer( record, navigateBack ) );
    }
  };

  /**
   * Deletes a record/document from a dataArray/collection
   * @param record - the record/document (vehicle/booking/service/etc.)
   * @param recordIdField - the records uniqueID field/key (vehicleID/serviceID/bookingID/etc.)
   * @param dataArrayName - the dataArray/collection (vehicles/services/bookings/etc.)
   */
  deleteRecord = ( record, recordIdField, dataArrayName ) => {
    // console.log("dataArrayName", dataArrayName);
    // console.log("recordIdField", recordIdField);
    if ( this.offline === false ) {
      // TODO: make the offline remove system work
      // Deletes the firebase record
      firebase.firestore().collection( dataArrayName ).doc( record[ recordIdField ] ).delete()
        .then( function () {
          console.log( "Document successfully written!" );
        } )
        .catch( function ( error ) {
          console.error( "Error writing document: ", error );
        } );
    } else {
      const _indexOfRecord = this.state[ dataArrayName ].findIndex( element => element[ recordIdField ] === record[ recordIdField ] );
      // console.log("_indexOfRecord", _indexOfRecord);
      this.setState( { [ dataArrayName ]: this.state[ dataArrayName ].slice( 0, _indexOfRecord ).concat( this.state[ dataArrayName ].slice( _indexOfRecord + 1 ) ) } );
    }
  };

  /**
   * Updates the odometer to be the most recent (highest) value
   * -
   * this is flawed & over-calculates for the Firebase application,
   * it only needs to check if the current record has a higher odometer,
   * NOT every other one,
   * because the odometer would have been updated when those where changed,
   * AND if someone updates the database while you are accessing it
   * it automatically would update to include the new odometer reading
   * -
   * @param record - the record/document (vehicle/booking/service/etc.)
   * @param navigateBack - A function that navigates to the page before this function was called.
   */
  updateOdometer = ( record, navigateBack ) => {
    // const _currentVehicleOdometer = this.state.vehicles.find(vehicle => vehicle.vehicleID === record.vehicleID);
    //   const _highestOdometer = record.odometer > _currentVehicleOdometer ? record.;

    let _highestOdometer = this.state.vehicles.find( vehicle => vehicle.vehicleID === record.vehicleID ).odometer;

    // if it is a services record check if it's to check for the highest-odometer-reading
    this.state.services.filter( service => service.vehicleID === record.vehicleID )
    // .map(service => _highestOdometer = service.odometer > _highestOdometer ? service.odometer : _highestOdometer );
      .map( service => service.odometer > _highestOdometer ? _highestOdometer = service.odometer : null );

    // loop through bookings to check for the highest-odometer-reading
    this.state.bookings.filter( booking => booking.vehicleID === record.vehicleID )
      .map( booking => booking.odometerAtStart > _highestOdometer ? _highestOdometer = booking.odometerAtStart : null );

    // loop through journeys to check for the highest-odometer-reading
    this.state.journeys.filter( journey => journey.vehicleID === record.vehicleID )
      .map( journey => journey.odometerAtEnd > _highestOdometer ? _highestOdometer = journey.odometerAtEnd : null );


    // firebase odometer update
    if ( this.offline === false ) {
      let _record = this.state.vehicles.find( vehicle => vehicle.vehicleID === record.vehicleID );
      _record.odometer = _highestOdometer;
      firebase.firestore().collection( 'vehicles' ).doc( record.vehicleID ).set( _record )
        .then( function () {
          console.log( "Document successfully written!" );
        } )
        .catch( function ( error ) {
          console.error( "Error writing document: ", error );
        } );
      navigateBack();
    }
    // local odometer update
    else {
      // loop through services to check for the highest-odometer-reading
      this.state.services.filter( service => service.vehicleID === record.vehicleID )
      // .map(service => _highestOdometer = service.odometer > _highestOdometer ? service.odometer : _highestOdometer );
        .map( service => service.odometer > _highestOdometer ? _highestOdometer = service.odometer : null );

      // loop through bookings to check for the highest-odometer-reading
      this.state.bookings.filter( booking => booking.vehicleID === record.vehicleID )
        .map( booking => booking.odometerAtStart > _highestOdometer ? _highestOdometer = booking.odometerAtStart : null );

      // loop through journeys to check for the highest-odometer-reading
      this.state.journeys.filter( journey => journey.vehicleID === record.vehicleID )
        .map( journey => journey.odometerAtEnd > _highestOdometer ? _highestOdometer = journey.odometerAtEnd : null );

      let _vehicles = this.state.vehicles;
      const _indexOfVehicle = _vehicles.findIndex( element => element.vehicleID === record.vehicleID );
      _vehicles[ _indexOfVehicle ].odometer = _highestOdometer;
      // console.log("_vehicles[_indexOfVehicle].odometer", _vehicles[_indexOfVehicle].odometer);
      this.setState( { vehicles: _vehicles }, navigateBack );
    }
  };

  /**
   * The total distance a vehicle has traveled
   * @param vehicle
   * @param state - optional - for passing a fake state for testing
   * @returns {number}
   */
  totalDistance = ( vehicle, state = this.state ) => {
    const _journeys = state.journeys.filter( journey => journey.vehicleID === vehicle.vehicleID );
    let _totalDistance = 0;
    _journeys.map( journey => _totalDistance += ( journey.odometerAtEnd - journey.odometerAtStart ) );
    return ( _totalDistance );
  };

  /**
   * Fuel Efficiency    *taking into account second-hand vehicles
   * @param vehicle
   * @returns {number} - Fuel efficiency in L/100km
   */
  fuelEfficiency = ( vehicle ) => {
    // Total amount of fuel purchased
    let _refuels = this.state.refuels.filter( refuel => refuel.vehicleID === vehicle.vehicleID );
    let _totalRefuel = 0;
    _refuels.map( refuel => {
      _totalRefuel += refuel.fuelQuantity;
    } );

    // Total Fuel Efficiency
    return ( 100 * ( _totalRefuel / this.totalDistance( vehicle ) ) ); // L/100_km
  };

  /**
   * The numbers of services a vehicle has received
   * @param vehicle
   * @returns {number}
   */
  totalServices = ( record ) => {
    return ( this.state.services.filter( service => service.vehicleID === record.vehicleID ).length );
  };

  /**
   * Returns the total amount of money earned by a vehicle    *(as a number)
   * Note: a vehicle's revenue does NOT include its expenses
   * @param record - the record/document (vehicle/booking/service/etc.)
   * @returns {number}
   */
  revenue = ( record ) => {
    let _totalCost = 0;
    // loop through bookings
    this.state.bookings.filter( booking => booking.vehicleID === record.vehicleID )
      .map( booking => {
        if ( booking.bookingType === "Per Day" ) {
          const costPerDay = 120;
          const date1 = new Date( "2019/04/06" );
          const date2 = new Date( "2019/04/09" );
          // (difference in milliseconds) / (milliseconds in a day)
          const differenceInDays = ( date2.getTime() - date1.getTime() ) / ( 1000 * 60 * 60 * 24 );
          _totalCost += differenceInDays * costPerDay;
        }
        // if ( booking.bookingType === "Per km" )
        else {
          // find the journeys the vehicle has taken on this booking
          this.state.journeys.filter( journey => journey.bookingID === booking.bookingID )
            .map( journey => {
              const costPerKm = 0.81;
              _totalCost += ( journey.odometerAtEnd - journey.odometerAtStart ) * costPerKm;
            } );
        }
      } );

    // total revenue earned by a vehicle
    return ( _totalCost );
  };

  /**
   * Returns the number of kilometers that have been travelled since the specified vehicle was serviced
   * Note: a vehicle's revenue does NOT include its expenses
   * @param record - the record/document (vehicle/booking/service/etc.)
   * @returns {number}
   */
  kilometersSinceLastService = ( record ) => {
    let _highestOdometer = 0;

    // find the service record with the highest odometer readings
    this.state.services.filter( service => service.vehicleID === record.vehicleID )
      .map( service => service.odometer > _highestOdometer ? _highestOdometer = service.odometer : null );

    // odo of vehicle - odo of last service
    return ( record.odometer - _highestOdometer )
  };

  /**
   * Returns true if the vehicle supplied needs a service    *(based on distance travelled only)
   * @param vehicle
   * @returns {boolean}
   */
  requiresAService = ( vehicle ) => {
    if ( this.kilometersSinceLastService( vehicle ) > vehicle.kilometersPerService ) {
      return ( true );
    } else {
      // // if it hasn't been serviced in 1.5 years
      // // get the latest data it was serviced
      // if () {
      //
      // } else {
      //   return(false);
      // }
      return ( false );
    }
  };

  /**
   * Displays a summary of useful information about a vehicle
   * @param vehicle
   */
  printDetails = ( vehicle ) => {
    // console.log( vehicle );
    return (
      <React.Fragment>
        <dl className="row">
          <dt className="col-sm-3">Vehicle:</dt>
          <dd className="col-sm-9"> { vehicle.manufacturer } { vehicle.model } { vehicle.dateManufactured }</dd>
          <dt className="col-sm-3">Registration No:</dt>
          <dd className="col-sm-9"> { vehicle.registrationNumber }</dd>
          <dt className="col-sm-3">Total kilometers travelled:</dt>
          <dd className="col-sm-9"> { this.totalDistance( vehicle ) } km</dd>
          <dt className="col-sm-3">Total services:</dt>
          <dd className="col-sm-9"> { this.totalServices( vehicle ) }</dd>
          <dt className="col-sm-3">Revenue recorded:</dt>
          <dd className="col-sm-9"> ${ Number( this.revenue( vehicle ) ).toFixed( 2 ) }</dd>
          <dt className="col-sm-3">Kilometers since last service:</dt>
          <dd className="col-sm-9"> { this.kilometersSinceLastService( vehicle ) } km</dd>
          <dt className="col-sm-3">Fuel economy:</dt>
          <dd className="col-sm-9"> { this.fuelEfficiency( vehicle ) } L/100km</dd>
          <dt className="col-sm-3">Requires a service:</dt>
          <dd className="col-sm-9"> { this.requiresAService( vehicle ) === true ? "Yes" : "No" }</dd>
        </dl>
      </React.Fragment>
    );
  };

  render() {
    // let testData = "vehicles";
    // console.log( this.printDetails( this.state.vehicles[ 0 ] ) );
    // console.log( this.state );

    if ( this.state.vehicles == null ) {
      return (
        <div>Loading Data, setting states</div>
      )
    } else {
      return (
        <div>
          <button data-testid="button" onClick={ () => console.log( this.printDetails( this.state.vehicles[ 0 ] ) ) }>
            test
          </button>

          <Route
            exact path={ [ "/", "/vehicles/", "/services/", "/bookings/", "/journeys/", "/refuels/" ] }
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
              // path={["/edit/:vehicleID", "/add/"]}
              exact path={ `/${ page }/` }
              render={
                props =>
                  <ShowTables
                    { ...props }
                    columnHeadings={ this.state[ `${ page }Headings` ] }
                    data={ this.state[ page ] }
                    dataArrayName={ page }
                    recordIdFieldName={ page.substring( 0, page.length - 1 ) + "ID" } // the UNIQUE ID Field for the record's type
                    deleteRecord={ this.deleteRecord }
                    printDetails={ this.printDetails }
                  />
              }
            />
          ) }

          { this.state.pages.map( page =>
            <Route
              exact path={ [ `/${ page }/:operation/:recordID`, `/${ page }/:operation/` ] }
              render={
                props =>
                  <EditAdd
                    { ...props }
                    columnHeadings={ this.state[ `${ page }Headings` ] }
                    data={ this.state[ page ] } // this is so that the vehicle can be retrieved by it's vehicleID in the URL
                    dataArrayName={ page }
                    recordIdFieldName={ page.substring( 0, page.length - 1 ) + "ID" } // the UNIQUE ID Field for the record's type
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

// {/*{<Route*/}
// {/*  exact path={ [ `/vehicles//:vehicleID/print_details` ] }*/}
// {/*  render={*/}
// {/*    props =>*/}
// {/*      <PrintDetails*/}
// {/*        { ...props }*/}
// {/*        data={ this.state.vehicles}*/}
// {/*        dataArrayName="vehicles"*/}
// {/*        printDetails={ this.printDetails } // this is for the add form*/}
// {/*      />*/}
// {/*  }*/}
// {/*/>*/}

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