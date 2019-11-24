// this is the tutorial we followed
// https://mdbootstrap.com/education/react/agenda-4-bootstrap/

import React, {Component} from 'react';
import {MDBBtn, MDBContainer, MDBRow} from "mdbreact";

export class EditAdd extends Component {

  constructor(props) {
    super(props);

    let _record = undefined;
    if (this.props.match.params.operation === "add") {
      _record = this.props.dataDefaultRecord;
      Object.keys(_record).map(property => _record[property] = undefined);
      // console.dir(_dataDefaultRecord);
    } else {
      // find the record to be loaded for editing by its specific "recordID"    *(e.g. vehicleID or serviceID or bookingID or etc.)
      _record = this.props.data.find(element => element[props.recordIdFieldName] === this.props.match.params.recordID);
    }

    this.state = {
      record: _record,
    };
  }

  // componentDidMount() {
  //   // console.log('All data coming from the state in App.js:')
  //   // console.dir(this.props.data);
  //
  //
  // }

  // allows for the form to be edited
  onChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    this.setState(prevState => {
      // let {record} = prevState;
      let record = {...prevState.record};
      record[name] = value;

      return ({record})
    });
    // if (this.props.data.find(element => element === this.state.record.vehicleID)) {
    //   console.dir(this.props.data.find(element => element.vehicleID === this.state.record.vehicleID));
    // } else {
    // }
  };

  // validation
  onSubmit = (e) => {
    e.preventDefault();

    // no field can be blank
    Object.keys(this.state.record).map((field, index) => {
      if (this.state.record[field] == null) {
        return (alert(`Sorry, your record's ${this.props.columnHeadings[index]} cannot be blank.`));
      }
      return (console.log(field + " was not blank."))
    });

    if (this.props.match.params.operation === "add") {
      // The record-types ID Field can NOT be a duplicate of another
      if (this.props.data.find(element => element[this.props.recordIdFieldName] === this.state.record[this.props.recordIdFieldName]))
        return(alert("Sorry, your record must have a unique " +
            this.props.dataArrayName.charAt(0).toUpperCase() + this.props.dataArrayName.substring(1, this.props.dataArrayName.length - 1) + " ID" +
            "."));

      // add the record to the data-array
      this.props.addRecord(this.state.record, this.props.dataArrayName, () => this.props.history.push(`/${this.props.dataArrayName}/`));
    }
    else {
      // update the record in the data-array
      // call editRecord on App.js, then navigate to "/vehicles/" (ShowData) AFTER the setState in App.js has finished by using the setStates callback
      this.props.editRecord(this.state.record, this.props.recordIdFieldName, this.props.dataArrayName, () => this.props.history.push(`/${this.props.dataArrayName}/`));
    }
  };

  // TODO: how to make the inputs look good https://reactstrap.github.io/components/form/

  render() {
    const {record} = this.state;
    const {columnHeadings} = this.props;
    // console.log("this.props", this.props);
    // console.log("record", record);

    return (
        <MDBContainer className="p-3">
          <form onSubmit={this.onSubmit}>
            <p className="h4 text-center mb-4">
              Edit record: {record ? `${record.manufacturer} ${record.model}` : ''}
            </p>
            <MDBContainer className="my-4">
              {record ?
                  (
                      Object.keys(record).map((field, index) => (
                          <>
                            {/*{ index !== Object.keys( record ).length - 1 ?*/}
                            {/*  (*/}
                            {/*    <>*/}
                            <MDBRow>
                              <label htmlFor={field} className="grey-text">
                                {columnHeadings[index].label}
                              </label>
                            </MDBRow>

                            <MDBRow>
                              {this.props.match.params.operation === "add" ?
                                  (
                                      <input
                                          onChange={this.onChange}
                                          // defaultValue={record[field]}
                                          // readOnly={ field === 'vehicleID' || field === 'VIN' }
                                          type="text"
                                          name={field}
                                          id={field}
                                          className="form-control"
                                      />
                                  )
                                  :
                                  (
                                      <input
                                          onChange={this.onChange}
                                          defaultValue={record[field]}
                                          readOnly={field === 'vehicleID' || field === 'VIN'}
                                          type="text"
                                          name={field}
                                          id={field}
                                          className="form-control"
                                      />
                                  )
                              }
                            </MDBRow>
                          </>
                      ))
                  )
                  :
                  (
                      <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                  )
              }
            </MDBContainer>
            < MDBBtn
                color="success"
                type="submit">
              Submit
            </MDBBtn>
            <MDBBtn
                onClick={() => this.props.history.push(`/${this.props.dataArrayName}/`)}
                color="danger">
              Cancel
            </MDBBtn>
          </form>
        </MDBContainer>
    );
  }
}

export default EditAdd;