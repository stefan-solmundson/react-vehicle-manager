// this is the tutorial we followed
// https://mdbootstrap.com/education/react/agenda-4-bootstrap/

import React, {Component} from 'react';
import {MDBBtn, MDBBadge, MDBIcon, MDBDataTable, MDBContainer} from 'mdbreact';
import {Link} from "react-router-dom";

class EditAdd extends Component {
  state = {};

  constructor(props) {
    const _originalVehicles = props.location.vehicles;
    super(props);
    this.state = {
      columnHeadings: props.location.columnHeadings,
      headingsAndData: [],
      vehicle: props.location.vehicles[props.location.index],
      // vehicles: props.location.vehicles,
      originalVehicles: _originalVehicles,
      // hasUpdated: {},
      editOrAdd: props.location.editOrAdd,
      // index: props.location.index,
      // vehicles: props.location.vehicles,
    };


    // console.log("props.vehicle in constructor", props.history.vehicle);
    console.log("this.state.vehicle in constructor", this.state.vehicle);
    // console.log("state test");
    // console.log("tableData", props.location.columnHeadings);
    // console.log("columnHeadings", props.location.columnHeadings);
    // console.log("vehicle", props.location.vehicle);
    // //
    // console.log("props test");
    // console.log("edit", props.location.editProps);
    // console.log("wazza constructor");
  }

  componentDidMount(): void {
    // if (this.state.hasUpdated != true) {
    //     // this.setState({hasUpdated: true} );
    //     // this.setState({vehicleOriginal: this.state.vehicle} );
    //     // console.log(this.state.vehicle);
    //     this.setState({vehicleOriginal: this.state.vehicle, hasUpdated: true} );
    //     // this.setState({vehicleOriginal: this.state.vehicle, hasUpdated: true} );
    // }

    // let _vehicle = this.state.vehicle;
    // _vehicle.iid = "Carol's Crazy Corolla!!";
    // this.setState({vehicle: _vehicle});
    // if NO Data try to load data from firebase
    // if no data still display "vehicle iid does not exist" in a popup
    // console.log(this.state.vehicle)
    let combined = [];
    for (let i = 0; i < this.state.columnHeadings.length; i++) {
      // console.log(this.props.location.columnHeadings[i].field);
      let heading = this.props.location.columnHeadings[i].field;
      // console.log(this.state.vehicle[heading]);
      combined[i] = [this.props.location.columnHeadings[i], this.state.vehicle[this.props.location.columnHeadings[i].field]];
      // console.log(combined[i]);
    }
    this.setState({headingsAndData: combined});
    console.log("this.props.location.vehicles in componentDidMount()", this.props.location.vehicles);
    // this.setState({originalVehicles: this.state.originalVehicles});
    console.log("hello");
    // console.log(combined);
    // console.log(typeof combined);
  }

  // allows for the form to be edited
  onChange = (e) => {
    e.preventDefault();
    // const state = this.state;
    // state[e.target.name] = e.target.value;
    let _vehicle = this.state.vehicle;
    _vehicle[e.target.name] = e.target.value;
    this.setState({vehicle: _vehicle});

    // console.log(e);
    // console.log(e.target.name);
    // console.log(e.target.value);
    // console.log(this.state.vehicle);
    // console.log("vehicleOriginal", this.state.vehicleOriginal);
    // console.log("vehicleOriginal", this.getInitialState());
    // console.log("hasUpdated", this.state.hasUpdated);
    // console.log(this.props.history.vehicle);
    console.log(this.state.originalVehicles);
  };

  onSubmit = (e) => {
    e.preventDefault();
    // const {title, description, author} = this.state;

    // LEAVE THIS HERE !!! it is for the firebase
    // I dunno if a key actually exists in this component?
    // this.delete(this.state.key);

    // this prevents blank records from being created/submitted
    // strName.trim() is used in-case a blank space is entered,
    // it prevents blank spaces from being accepted unlike strName.length > 0
    // if (title.trim() && description.trim() && author.trim()) {
    //     // ref is part of firestore
    //     this.ref.add({
    //         title,
    //         description,
    //         author
    //     }).then((docRef) => {
    //         this.setState({
    //             title: '',
    //             description: '',
    //             author: ''
    //         });
    // back to the home-page
    // this.props.history.push({pathname: "/", state: {vehicle: this.state.vehicle}});
    console.log("The form was submitted.");
    let _vehicles = this.props.location.vehicles;
    _vehicles[this.props.location.index] = this.state.vehicle;
    this.props.history.push({pathname: "/", vehicles: _vehicles});
    // this.setState({vehicles: _vehicles}, () => this.backToHome())
  };

  // TODO: fix the edit script so that the array item is replaced/overwritten, NOT removed
  delete = (e, index) => {
    this.setState({vehicles: this.state.vehicles.slice(0, index).concat(this.state.vehicles.slice(index + 1))});
  };

  onReset = (e) => {
    e.preventDefault();
    // console.log("The form was cancelled.");
    // console.log(this.vehicleOriginal);
    // this.props.history.push({pathname: "/", vehicle: this.state.vehicle});
    // this.props.history.push({pathname: "/", vehicle: this.state.vehicleOriginal});
    console.log(this.state.originalVehicles);
    this.props.history.push({pathname: "/", vehicles: this.state.originalVehicles});
    // this.props.history.push({pathname: "/", vehicles: this.originalVehicles});
  };

  // delete( id ) {
  //     firebase.firestore().collection( 'boards' )
  //         .doc( id ).delete().then( () => {
  //         console.log( "Document successfully deleted!" );
  //         this.props.history.push( "/" );
  //     } ).catch( ( error ) => {
  //         console.error( "Error removing document: ", error );
  //     });
  // }

  render() {
    // this.tableData = {
    //   columns: this.state.columnHeadings,
    //   rows: [ this.state.vehicle ]
    // };
    // console.log( "tableData", this.tableData );
    // console.log("props test (inside or render())")
    // console.log("edit", this.props.location.editProps);
    // console.log("vehicle", this.state.vehicle);
    // console.log("wazza render");

    // console.log(this.state.headingsAndData)
    // this.state.headingsAndData.map(item =>
    //     console.log("test2")
    //     console.log(item + 2)
    //     console.log(item[2])
    // )


    return (
        <React.Fragment>
          {/*<MDBBtn onClick={console.log()}>*/}
          {/*  test*/}

          {/*</MDBBtn>*/}
          <MDBContainer className="w-100 p-5">

            <h5>
              <strong>{this.state.vehicle.manufacturer}</strong> - {this.state.vehicle.model}
            </h5>

            <h6>
              <form onSubmit={this.onSubmit} onReset={this.onReset}>

                {
                  this.state.editOrAdd === "add" &&
                  this.state.headingsAndData.map(item =>
                      <div>
                        <div className="form-group">
                          <label htmlFor="title">
                            {item[0].label}
                          </label>
                          <input type="text"
                                 className="form-control"
                                 name={item[0].field}
                                 onChange={this.onChange}
                                 placeholder={item[0].label}>
                          </input>
                        </div>
                      </div>
                  )
                }
                {
                  this.state.editOrAdd === "edit" &&
                  this.state.headingsAndData.map(item =>
                      <div>
                        <div className="form-group">
                          <label htmlFor="title">
                            {item[0].label}
                          </label>
                          <input type="text"
                                 className="form-control"
                                 name={item[0].field}
                                 value={this.state.vehicle[item[0].field]}
                                 onChange={this.onChange}
                                 placeholder={item[1]}>
                          </input>
                        </div>
                      </div>
                  )
                }


                {/*mr-2 = margin right 2*/}
                <button type="submit"
                        className="btn btn-success mr-2 ml-0">
                  Save
                </button>
                <button type="reset"
                        className="btn btn-danger mr-2">
                  Cancel
                </button>
                {/*<Link to={`/show/${this.state.key}`}*/}
                {/*      className="btn btn-secondary mr-2">*/}
                {/*  Cancel Old Link*/}
                {/*</Link>*/}

                {/*<Link to={{*/}
                {/*  pathname: "/",*/}
                {/*  // data: this.tableData,*/}
                {/*  vehicle: this.state.vehicle,*/}
                {/*}}>*/}
                {/*  Home & Save*/}
                {/*</Link>*/}
              </form>

              {/*<strong>{ this.state.vehicle.manufacturer }</strong> - { this.state.vehicle.model }*/}
              {/*ml = margin left*/}
              {/*mr = margin right*/}
              {/*mb = margin bottom*/}
              {/*mt = margin top*/}
              {/*<MDBBadge color="danger"*/}
              {/*          className="ml-2 float-right"*/}
              {/*          onClick={ () => this.props.onDelete( this.props.id ) }>*/}
              {/*  <MDBIcon icon="minus"/>*/}
              {/*</MDBBadge>*/}
            </h6>


            {/*<Link to={{*/}
            {/*  pathname: "/",*/}
            {/*  vehicle: this.state.vehicle,*/}
            {/*}}>*/}
            {/*  Home*/}
            {/*</Link>*/}
          </MDBContainer>

        </React.Fragment>
    );
  }
}

export default EditAdd;


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