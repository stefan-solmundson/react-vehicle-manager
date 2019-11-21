// this is the tutorial we followed
// https://mdbootstrap.com/education/react/agenda-4-bootstrap/

import React, {Component} from 'react';
import {MDBBtn, MDBContainer, MDBRow} from "mdbreact";

export class Edit extends Component {
  state = {};

  componentDidMount() {
    console.log('All vehicles coming from the state in App.js:')
    console.dir(this.props.vehicles);

    // find the vehicle to be edited by its "iid"
    const vehicle = this.props.vehicles.find(
        v => v.iid === this.props.match.params.iid
    );
    console.log('Vehicle selected by iid:');
    console.dir(vehicle);

    this.setState({vehicle});
  }

  // allows for the form to be edited
  onChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    this.setState(prevState => {
      // let {vehicle} = prevState;
      let vehicle = {...prevState.vehicle};
      vehicle[name] = value;

      return ({vehicle})
    })
  };

  onSubmit = (e) => {
    e.preventDefault();

    // call editVehicle on App.js, then navigate to "/" (ShowTables)
    this.props.editVehicle(
        this.state.vehicle,
        () => this.props.history.push(`/`)
    );
  };

  // TODO: fix the edit script so that the array item is replaced/overwritten, NOT removed
  delete = (e, index) => {
    this.setState({vehicles: this.state.vehicles.slice(0, index).concat(this.state.vehicles.slice(index + 1))});
  };

  onReset = (e) => {
    e.preventDefault();
  };

  render() {
    const {vehicle} = this.state;
    return (
        <MDBContainer className="p-3">
          <form onSubmit={this.onSubmit}>
            <p className="h4 text-center mb-4">Edit
              vehicle: {vehicle ? `${vehicle.manufacturer} ${vehicle.model}` : ''}</p>
            {
              // if the vehicle has been found, render all of its details in the form
              // otherwise, show a loading spinner
              vehicle ?
                  (
                      Object
                          .keys(vehicle)
                          .map((field, index) => (
                              <MDBContainer key={index} className="my-4">
                                <MDBRow>
                                  <label htmlFor={field} className="grey-text">
                                    {field}
                                  </label>
                                </MDBRow>
                                <MDBRow>
                                  <input
                                      onChange={this.onChange}
                                      defaultValue={vehicle[field]}
                                      readOnly={field === 'iid'}
                                      type="text"
                                      name={field}
                                      id={field}
                                      className="form-control"
                                  />
                                </MDBRow>
                              </MDBContainer>
                          ))
                  )
                  :
                  (
                      <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                  )
            }
            <MDBBtn
                color="success"
                type="submit">
              Submit
            </MDBBtn>
            <MDBBtn
                onClick={() => this.props.history.push("/")}
                color="danger">
              Cancel
            </MDBBtn>
          </form>
        </MDBContainer>
    );
  }
}

export default Edit;
