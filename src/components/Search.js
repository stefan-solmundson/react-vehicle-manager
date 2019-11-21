
// this is the tutorial we followed
// https://mdbootstrap.com/education/react/agenda-4-bootstrap/

// MDBDataTables
// *click on the <API> icon at the top in the navigation bar
// https://mdbootstrap.com/docs/react/tables/datatables/

import React, {Component} from 'react';
import logo from './../logo.svg';
// import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';
// MDBBtn, MDBIcon,
import {MDBContainer, MDBRow, MDBCol, MDBDataTable, MDBBtn} from "mdbreact";
// ./ means we are searching for a file
// 'components/Vehicle' is NOT a directory, './components/Vehicle' IS a directory
// import Vehicle from './components/Vehicle';
import firebase from "./../Firebase";
import {Link} from 'react-router-dom';
import {Link as link2} from 'react-router-dom';

//
//
//
//

// function App() {
class App extends Component {
  // state must be created before it can be used in the constructor
  // state;

  constructor(props) {
    super(props);
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
      vehicles: [
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
        //   fuelEconomy: "",
        //   fuelCapacity: ,
        //   weight: ,
        //   VIN: "ExampleVIN",
        //   registrationNumber: "1ABC-123",
        // },
        // {
        //   iid: "Bob's Corolla",
        //   manufacturer: "Toyota",
        //   // odometer: 100000,
        //   model: "Corolla (E160)",
        // },
        // {
        //   iid: "Caren's Corolla",
        //   manufacturer: "Toyota",
        //   model: "Corolla (E160)",
        // },
        // {
        //   iid: "fdsafdas's Corolla",
        //   manufacturer: "Toyota",
        //   model: "Corolla (E160)",
        // },
        // {
        //   iid: "Fdasfsda's Sports Car",
        //   manufacturer: "Mitsubishi",
        //   model: "Lancer (??)"
        //   // action: <button onClick={this.clickHandler}>Action</button>,
        // },
      ],
      theDataTableBodyColor: "",
      // vehicle: this.props.location.vehicle,
      // testVar: false,
    };
    console.log("vehicle", this.state.vehicle);
    if (props.vehicle) {
      this.state.vehicles.push(props.vehicle);
    }
  };

  //
  //
  //

  // Are you sure you want to close the window
  // https://stackoverflow.com/questions/36355093/reactjs-browser-tab-close-event
  // doSomethingBeforeUnload = ( e ) => {
  //   this.setState( { theDataTableBodyColor: "red" } );
  //   // e.returnValue = 'Are you sure you want to close?';
  // };

  setupBeforeUnloadListener() {
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      // this.doSomethingBeforeUnload();
      return e.returnValue = 'Are you sure you want to close?';
    });
  };

  componentDidMount() {
    // this.setupBeforeUnloadListener();
    console.log(this.props.location.vehicle)
  };

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.setupBeforeUnloadListener, this.doSomethingBeforeUnload);
  };

  //
  //
  //

  test = () => {
    console.log("test")
    console.log(this.props.location.vehicle);
    console.log(this.props.location);
  }

  addNewVehicle = vehicle => {
    let _vehicles = this.state.vehicles;
    _vehicles.push(vehicle);
    this.setState({vehicles: _vehicles});
  };

  render() {
    this.tableData = {
      columns: this.state.columnHeadings,
      rows: this.state.vehicles
    };

    return (
        <div>
          {/*<MDBBtn onClick={this.test}>*/}
          {/*</MDBBtn>*/}
          <Link className="btn btn-secondary mr-2"
                to={{
                  pathname: "/edit/",
                  // tableData: this.tableData,
                  columnHeadings: this.state.columnHeadings,
                  vehicles: this.state.vehicles,
                }}>
            Edit Vehicle
          </Link>


          <MDBContainer className="w-100 p-5">
            {/*<div className="w-100 p-5">*/}
            {/*<MDBContainer>*/}
            {/*<MDBContainer className="bg-dark text-light">*/}

            {/*----Header*/}
            <MDBRow>
              <MDBCol>
                <img src={logo} width={64} alt="logo"/>
              </MDBCol>
              <MDBCol className="text-danger">
                <h1>Welcome</h1>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <Link to={{
                pathname: `/edit/${this.state.vehicles[1].iid}`,
                // data: this.tableData,
                editProps: this.tableData,
                columnHeadings: this.state.columnHeadings,
                vehicle: this.state.vehicles[1],
                vehicleOriginal: this.state.vehicles[1],
              }}>
                Edit 1st Vehicle
              </Link>
            </MDBRow>
          </MDBContainer>
          {/*----Main*/}
          {/*<MDBRow>*/}
          {/*Left Column*/}
          {/*<MDBCol size="12">*/}
          {/*{ console.log( this.tableData ) }*/}
          {/*<div className="scrollbar my-5 mx-auto" style{ scrollContainerStyle }>*/}
          {/*<div className="scrollbar my-5 mx-auto" scrollbar-juicy-peach>*/}
          {/*<MDBDataTable*/}
          {/*<MDBDataTable */}
          <div className="p-5">
            <MDBDataTable
                id="thingo"
                data={this.tableData}
                // id="theDataTable"
                // className="theDataTable"
                // color="danger"
                // fixed
                // responsiveXL
                // scrollX
                // order={ [ "iid", "asc" ] }
                striped
                bordered
                hover
                noBottomColumns
                // theadColor="indigo"
                tbodyColor={this.state.theDataTableBodyColor}
                // backgroundColor="red"
            />
          </div>

          {/*</div>*/}
          {/*</MDBCol>*/}

          {/*Right Column*/}
          {/*<MDBCol size="3" className="text-center">*/}
          {/*</MDBCol>*/}
          {/*</MDBRow>*/}

        </div>
    );
  }
}

export default App;