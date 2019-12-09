// this is the tutorial we followed
// https://mdbootstrap.com/education/react/agenda-4-bootstrap/

import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBRow } from "mdbreact";
import firebase from "../../Firebase";
// import {FormInline} from "../../../mdbreact-modified.esm";
import { Table, Button, Input, Form, FormGroup, Label, Col, Container, Row } from 'reactstrap';
// import 'node'
// import {Row} from 'bootstrap';
// import

export class EditAdd extends Component {

  constructor( props ) {
    super( props );

    let _record = undefined;
    if ( this.props.match.params.operation === "add" ) {
      _record = this.props.dataDefaultRecord;
      Object.keys( _record ).map( property => _record[ property ] = undefined );
      // console.dir(_dataDefaultRecord);
    } else {
      // find the record to be loaded for editing by its specific "recordID"    *(e.g. vehicleID or serviceID or bookingID or etc.)
      _record = this.props.data.find( element => element[ props.recordIdFieldName ] === this.props.match.params.recordID );
    }
    let _recordValidFields = props.contactsValidFieldsRecord;
    // console.log( _recordValidFields );
    Object.keys( _recordValidFields ).map( property => _recordValidFields[ property ] = true );

    this.state = {
      record: _record,
      recordValidFields: _recordValidFields,
    };
  }

  // allows for the form to be edited
  onChange = ( e ) => {
    e.preventDefault();
    const { name, value } = e.target;
    let _recordValidFields = this.state.recordValidFields;
    let regex = undefined;
    // console.log(name);
    if ( name === "email" ) {
      // emailRegex
      regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    } else if ( name === ( "mobile" || "homePhone" ) ) {
      // phoneRegex
      regex = /^[0-9]+(?:[ _-][0-9]+)*$/;
    } else {
      // nameRegex
      regex = /^[A-Za-z0-9][A-Za-z0-9'_-]+$(?:[ _][A-Za-z0-9'_-]+)*$/
    }
    let result = value.match( regex );
    // console.log( result );
    if ( result !== null ) {
      _recordValidFields[ name ] = true;
    } else {
      _recordValidFields[ name ] = false;
    }
    // console.log( "_recordValidFields[ " + name + "] = " + _recordValidFields[ name ] );
    this.setState( { recordValidFields: _recordValidFields } );
    this.setState( prevState => {
      // let {record} = prevState;
      let record = { ...prevState.record };
      record[ name ] = value;
      return ( { record } )
    } );
  };

  // validation
  onSubmit = ( e ) => {
    e.preventDefault();
    // console.log(this.state.record.givenName);
    // console.log(this.state.record.givenName === "");
    // console.log(this.state.record.givenName == null);
    let allFieldsAreValid = true;
    // console.log(this.state.recordValidFields);
    Object.keys( this.state.recordValidFields ).map( field =>
    this.state.recordValidFields[field] ? null : allFieldsAreValid = false
     );
    if ( allFieldsAreValid ) {
      if ( ( this.state.record.givenName !== "" ) && ( this.state.record.familyName !== "" ) ) {

        if ( this.props.match.params.operation === "add" ) {
          // add the record to the data-array
          this.props.addRecord( this.state.record, this.props.recordIdFieldName, this.props.dataArrayName, () => this.props.history.push( `/${ this.props.dataArrayName }/` ) );
        } else {
          // update the record in the data-array
          // call editRecord on App.js, then navigate to "/vehicles/" (ShowData) AFTER the setState in App.js has finished by using the setStates callback
          this.props.editRecord( this.state.record, this.props.recordIdFieldName, this.props.dataArrayName, () => this.props.history.push( `/${ this.props.dataArrayName }/` ) );
        }
      } else {
        alert( "Sorry, both 'Given Name' & 'Family Name' Cannot be left blank." );
      }
    } else {
      alert( "Sorry, all fields must be properly formatted." );
    }
  };

  render() {
    const { record } = this.state;
    // console.log( record );
    const { columnHeadings } = this.props;
    // console.log("this.props", this.props);
    // console.log("record", record);

    return (
      <Container className="p-3 text-center">
        <form onSubmit={ this.onSubmit }>
          <p className={ this.props.dark ? "h4 text-center mb-4 text-white" : "h4 text-center mb-4" }>
            { this.props.match.params.operation === "add" ?
              // `Add Contact: ${record[this.props.givenName] ? record[this.props.givenName] : 'Add Record' }`
              "Add Contact:"
              :
              // `Edit Contact: ${record[this.props.givenName] ? record[this.props.givenName] : 'Edit Record' }`
              "Edit Contact:"
            }
          </p>
          <Container>
            {/*<Row>*/ }
            { record ?
              (
                Object.keys( record ).map( ( field, index ) => (
                  <React.Fragment>
                    { index !== Object.keys( record ).length - 1 &&
                    <Row className="m-sm-0 m-md-2">
                      <Col sm={ 3 }/>
                      <Col sm={ 3 }>
                        <Label htmlFor={ field } className="grey-text">
                          { columnHeadings[ index ].label }
                        </Label>
                      </Col>

                      {/*{this.props.match.params.operation === "add" ?*/ }
                      {/*    (*/ }
                      <Col sm={ 6 }>
                        <Input
                          onChange={ this.onChange }
                          // defaultValue={this.props.match.params.operation === "add" ? null : record[field]}
                          defaultValue={ record[ field ] }
                          // readOnly={ field === 'vehicleID' || field === 'VIN' }
                          type="text"
                          name={ field }
                          id={ field }
                          placeholder={ this.props.dataPlaceholderRecord[ field ] }
                          invalid={ !this.state.recordValidFields[ field ] }
                          // invalid={false}
                          // value={this.state.record[field]}
                        />
                      </Col>
                    </Row>
                    }
                  </React.Fragment>
                ) )
              )
              :
              (
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              )
            }
            {/*</Row>*/ }
          </Container>
          < MDBBtn
            color="success"
            type="submit">
            Submit
          </MDBBtn>
          <MDBBtn
            onClick={ () => this.props.history.push( `/${ this.props.dataArrayName }/` ) }
            color="danger">
            Cancel
          </MDBBtn>
        </form>
      </Container>
    );
  }
}

export default EditAdd;