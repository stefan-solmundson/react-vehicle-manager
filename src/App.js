// this is the tutorial we followed
// https://mdbootstrap.com/education/react/agenda-4-bootstrap/

import React, {Component} from 'react';
import EditAdd from "./components/EditAdd/EditAdd";
import {Route} from "react-router-dom";
import {Switch} from "react-router";
import {ShowTables} from "./components/ShowTables/ShowTables";
import {Home} from "./components/Home/Home";
import firebase from "./Firebase";

import {MDBBtn, MDBBadge, MDBIcon, MDBDataTable, MDBContainer} from 'mdbreact';
import {Link} from "react-router-dom";
import {Table, Button, Input, Form, FormGroup} from 'reactstrap';

import {localData} from './LocalData';

import './App.css';

export class App extends Component {
  // state = {
  //   // reloadDataBase,
  // };

  constructor(props) {
    /* properties: blank... */
    super(props);
    const _pages = localData.pages;

    this.offline = true;
    this.updloadLocalData = false;
    this.vehicleManager = false;

    // TODO: PUT A LOADER IN HERE FOR THE FIREBASE DATA
    this.firebaseCollections = [];
    _pages.map((page, index) => {
      this.firebaseCollections[index] = firebase.firestore().collection(page);
    });
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
    if (this.offline === false) {
      // Receives calls when the Firebase-source-data is updated & automatically updates the applications data
      this.firebaseCollections.map((firebaseCollection, index) => {
        console.log(firebaseCollection);
        // .onSnapshot reloads a firebase collection when it is updated
        this.unsubscribe = firebaseCollection.onSnapshot(docSnapshot => {
          // doc : document : record

          // FIREBASE SORTING:
          // Firebase-collections/arrays are sorted from newest to oldest
          // &
          // Firebase-documents/object-properties are sorted by firstly by capitals & secondly alphabetically
          // -
          // 'vehiclesHeadings' is an array, so it will maintain a NON-alphabetical order in Firebase    *(if uploaded properly)
          const _data = [];
          docSnapshot.forEach((doc) => {
            // console.dir(doc);
            // console.dir(doc.data());
            let _record = {};
            // this.state.vehiclesHeadings.map(e => {
            this.state[this.state.pages[index] + "Headings"].map(e => { // this.state.pages[index] === dataArrayName
              // console.log(e);
              _record[e.field] = doc.data()[e.field];
              // console.log(_record[e.field]);
            });
            _data.push(_record);
          });
          // console.log("_data", _data);
          this.setState({[this.state.pages[index]]: _data});
        });
      });
    }

    // Upload locally defined to Firebase Database
    if (this.updloadLocalData === true) {
      this.state.pages.map(_page => {
        console.log(_page);
        console.log(this.state[_page]);
        this.state[_page].map(_record => {
          // updates the firebase record
          firebase.firestore().collection(_page).doc(_record[_page.substring(0, _page.length - 1) + "ID"]).set(_record)
              .then(function () {
                console.log("Document successfully written!");
              })
              .catch(function (error) {
                console.error("Error writing document: ", error);
              })
        });
      });
    }
  }

  /**
   * Edits/Modifies a record/document in a dataArray/collection
   * @param record - the record/document (vehicle/booking/service/etc.)
   * @param recordIdField - the records uniqueID field/key (vehicleID/serviceID/bookingID/et
   * @param dataArrayName - the dataArray/collection (vehicles/services/bookings/etc.)
   * @param navigateBack - A function that navigates to the page before this function was called.
   */
  editRecord = (record, recordIdField, dataArrayName, navigateBack) => {
    // Object.keys(record).map(field => console.log(record[field]));

    if (this.offline === false) {
      // updates the firebase record
      firebase.firestore().collection(dataArrayName).doc(record[recordIdField]).set(record)
          .then(function () {
            console.log("Document successfully written!");
          })
          .catch(function (error) {
            console.error("Error writing document: ", error);
          });
      navigateBack();
    } else {
      // updates the local record
      // console.log("dataArrayName", dataArrayName);
      const _data = this.state[dataArrayName];
      // get index of vehicle
      const _indexOfRecord = _data.findIndex(element => element[recordIdField] === record[recordIdField]);
      _data[_indexOfRecord] = record;
      this.setState({[dataArrayName]: _data}, this.updateOdometer(record, navigateBack))
    }
  };

  /**
   * Adds a record/document to a dataArray/collection
   * @param record - the record/document (vehicle/booking/service/etc.)
   * @param recordIdField - the records uniqueID field/key (vehicleID/serviceID/bookingID/et
   * @param dataArrayName - the dataArray/collection (vehicles/services/bookings/etc.)
   * @param navigateBack - A function that navigates to the page before this function was called.
   */
  addRecord = (record, recordIdField, dataArrayName, navigateBack) => {
    if (this.offline === false) {
      // Creates the firebase record
      firebase.firestore().collection(dataArrayName).doc(record[recordIdField]).set(record)
          .then(function () {
            console.log("Document successfully written!");
          })
          .catch(function (error) {
            console.error("Error writing document: ", error);
          });
      navigateBack();
    } else {
      // adds a local record
      // console.log("dataArrayName", dataArrayName);
      let _data = this.state[dataArrayName];
      _data.push(record);
      // console.log("_data", _data);
      // console.log("record", record);
      this.setState({[dataArrayName]: _data}, this.updateOdometer(record, navigateBack));
    }
  };

  /**
   * Deletes a record/document from a dataArray/collection
   * @param record - the record/document (vehicle/booking/service/etc.)
   * @param recordIdField - the records uniqueID field/key (vehicleID/serviceID/bookingID/etc.)
   * @param dataArrayName - the dataArray/collection (vehicles/services/bookings/etc.)
   */
  deleteRecord = (record, recordIdField, dataArrayName) => {
    // console.log("dataArrayName", dataArrayName);
    // console.log("recordIdField", recordIdField);
    if (this.offline === false) {
      // TODO: make the offline remove system work
      // Deletes the firebase record
      firebase.firestore().collection(dataArrayName).doc(record[recordIdField]).delete()
          .then(function () {
            console.log("Document successfully written!");
          })
          .catch(function (error) {
            console.error("Error writing document: ", error);
          });
    } else {
      const _indexOfRecord = this.state[dataArrayName].findIndex(element => element[recordIdField] === record[recordIdField]);
      // console.log("_indexOfRecord", _indexOfRecord);
      this.setState({[dataArrayName]: this.state[dataArrayName].slice(0, _indexOfRecord).concat(this.state[dataArrayName].slice(_indexOfRecord + 1))});
    }
  };

  /**
   * Sorts a data-table by the specified field
   * can do both ascending & descending order
   * @param dataArrayName
   * @param field - the field to be sorted by in descending order (cannot be switched to ascending)
   * @param ascendingOrder - true if ascending order is desired, false for descending order
   */
  sortArrayByField = (dataArrayName, field, ascendingOrder = true) => {
    let _dataArray = this.state[dataArrayName];

    console.log(_dataArray);

    _dataArray.sort(function (aa, bb) {
      // let aaa = 5;
      // let bbb = "b";
      let aaa = aa[field];
      let bbb = bb[field];
      aaa = typeof (aaa) === "string" ? aaa.toUpperCase() : aaa;
      bbb = typeof (bbb) === "string" ? bbb.toUpperCase() : bbb;
      console.log(aaa);
      console.log(bbb);
      if (aaa < bbb) {
        console.log(-1);
        return -1;
      }
      if (aaa > bbb) {
        console.log(1);
        return 1;
      }
      // aaa.toUpperCase();
      console.log(aaa);
      console.log(bbb);
      console.log(typeof (bbb));

    });

    if (!ascendingOrder) {
      _dataArray = _dataArray.reverse();
    }
    console.log(_dataArray);
    this.setState({[dataArrayName]: _dataArray,});
    // return(!ascendingOrder);
  };

  /**
   * Searches through a data-table presenting positive search results first,
   * leaving the negative search results below the positive ones
   * non-case sensitive search
   * @param dataArrayName
   * @param searchStr - the string being used for the search
   */
  searchArray = (dataArrayName, searchStr) => {
    // https://stackoverflow.com/questions/17387435/javascript-sort-array-of-objects-by-a-boolean-property/17387493
    // console.log( searchStr );
    searchStr = searchStr.toUpperCase();
    let _dataArray = this.state[dataArrayName];

    // console.log( _dataArray );

    _dataArray.sort(function (aa, bb) {
      // does the row/record contain the string
      let aaContainsSearchStr = false;
      let bbContainsSearchStr = false;
      Object.keys(aa).map(field => {
        if (aa[field].toString().toUpperCase().includes(searchStr)) {
          aaContainsSearchStr = true
        }
        if (bb[field].toString().toUpperCase().includes(searchStr)) {
          bbContainsSearchStr = true
        }
      });
      // console.log("aa.vehicleID \t\t" + aa.vehicleID, "\ncontains searchStr \t" + aaContainsSearchStr);
      // console.log("bb.vehicleID \t\t" + bb.vehicleID, "\ncontains searchStr \t" + bbContainsSearchStr);
      return (
          bbContainsSearchStr - aaContainsSearchStr
          // bbContainsSearchStr - aaContainsSearchStr
      );
    });

    // console.log( _dataArray );

    this.setState({[dataArrayName]: _dataArray});
  };

  render() {
    // console.log( this.state );

    if (this.state.contacts == null) {
      return (
          <div>Loading Data, setting states</div>
      )
    } else {
      return (
          <body className={this.state.dark ? "bgDark" : ""}>
          {/*<Button onClick={ () => this.sortArrayByField( "vehicles", "vehicleID" ) }>*/}
          {/*<Button onClick={ () => console.log(window.innerWidth) }>*/}
          {/*  test Sort*/}
          {/*</Button>*/}
          <div className="text-center">
            <Button
                // className="sm"
                className={this.state.dark ? " btn-outline-white m-2" : "btn-outline-black m-2"}
                onClick={() => this.setState({dark: !(this.state.dark)})}>
              {this.state.dark && "Light"}
              {!this.state.dark && "Dark"}
            </Button>


            <Route
                exact path={["/", "/contacts/"]}
                render={
                  props =>
                      <Home
                          {...props}
                          pages={this.state.pages}
                      />
                }
            />
          </div>

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
                            recordIdFieldName={"givenName"} // the UNIQUE ID Field for the record's type
                            deleteRecord={this.deleteRecord}
                            sortArrayByField={this.sortArrayByField}
                            searchArray={this.searchArray}
                            dark={this.state.dark}
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
                            recordIdFieldName={"givenName"} // the UNIQUE ID Field for the record's type
                            editRecord={this.editRecord}
                            addRecord={this.addRecord}
                            dataDefaultRecord={this.state[`${page}DefaultRecord`]} // this is for the add form
                            dark={this.state.dark}
                        />
                  }
              />
          )}
          </body>
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