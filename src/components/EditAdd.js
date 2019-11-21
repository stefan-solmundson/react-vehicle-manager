// this is the tutorial we followed
// https://mdbootstrap.com/education/react/agenda-4-bootstrap/

import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBRow } from "mdbreact";

export class EditAdd extends Component {
  
  constructor(props) {
    super(props);

    let _record = undefined;
    if ( this.props.match.params.operation === "add" ) {
      _record = this.props.dataDefaultRecord;
      Object.keys( _record ).map( property => _record[ property ] = undefined );
      // console.dir(_dataDefaultRecord);
    } else {
      // find the record to be loaded for editing by its "vid"
      _record = this.props.data.find( v => v.vid === this.props.match.params.vid );
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
  onChange = ( e ) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState( prevState => {
      // let {record} = prevState;
      let record = { ...prevState.record };
      record[ name ] = value;

      return ( { record } )
    } );
    // if (this.props.data.find(element => element === this.state.record.vid)) {
    //   console.dir(this.props.data.find(element => element.vid === this.state.record.vid));
    // } else {
    // }
  };

  onSubmit = ( e ) => {
    e.preventDefault();

    console.log("1");
    // validation
    if ( this.props.match.params.operation === "add" ) {
      // blank vid
      if ( this.state.record.vid == null ) {
        alert( "Sorry, your record must have an Internal ID." );
      }
      // blank VIN
      else if ( this.state.record.VIN == null ) {
        alert( "Sorry, your record must have a VIN." );
      }
      // duplicate vid
      else if ( this.props.data.find( element => element.vid === this.state.record.vid ) ) {
        alert( "Sorry, your record must have a unique Internal ID." );
      }
      // duplicate VIN
      else if ( this.props.data.find( element => element.VIN === this.state.record.VIN ) ) {
        alert( "Sorry, your record must have a unique VIN." );
      }
      else {
        console.log("2");
        // call addRecord on App.js, then navigate to "/vehicles/" (ShowData) AFTER the setState in App.js has finished by using the setStates callback
        this.props.addRecord( this.state.record, this.props.dataArrayName, () => this.props.history.push( `/vehicles/` ) );
      }
    } else {
      console.log("3");
      // call editRecord on App.js, then navigate to "/vehicles/" (ShowData) AFTER the setState in App.js has finished by using the setStates callback
      this.props.editRecord( this.state.record, this.props.dataArrayName, () => this.props.history.push( `/vehicles/` ) );
    }
  };

// TODO: fix the edit script so that the array item is replaced/overwritten, NOT removed
  delete = ( e, index ) => {
    this.setState( { data: this.state.data.slice( 0, index ).concat( this.state.data.slice( index + 1 ) ) } );
  };

  onReset = ( e ) => {
    e.preventDefault();
  };

  render() {
    // Conditions to check it is not "just" the vehicles page

    // OK SO MOST OF THESE dataDefaultRecord's ARE MEANT TO BE records because this is both an editting & adding form
    const { record } = this.state;
    const { columnHeadings } = this.props;
    console.log("this.props", this.props );

    return (
      <MDBContainer className="p-3">
        <form onSubmit={ this.onSubmit }>
          <p className="h4 text-center mb-4">
            Edit record: { record ? `${ record.manufacturer } ${ record.model }` : '' }
          </p>
          <MDBContainer className="my-4">
            { record ?
              (
                Object.keys( record ).map( ( field, index ) => (
                  <>
                    <MDBRow>
                      <label htmlFor={ field } className="grey-text">
                        { columnHeadings[ index ].label }
                      </label>
                    </MDBRow>
                    <MDBRow>
                      { this.props.match.params.operation === "add" ?
                        (
                          <input
                            onChange={ this.onChange }
                            // defaultValue={record[field]}
                            // readOnly={field === 'vid'}
                            type="text"
                            name={ field }
                            id={ field }
                            className="form-control"
                          />
                        )
                        :
                        (
                          <input
                            onChange={ this.onChange }
                            defaultValue={ record[ field ] }
                            readOnly={ field === 'vid' || field === 'VIN' }
                            type="text"
                            name={ field }
                            id={ field }
                            className="form-control"
                          />
                        )
                      }
                    </MDBRow>
                  </>
                ) )
              )
              :
              (
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              )
            }
          </MDBContainer>
          <MDBBtn
            color="success"
            type="submit">
            Submit
          </MDBBtn>
          <MDBBtn
            onClick={ () => this.props.history.push( "/vehicles/" ) }
            color="danger">
            Cancel
          </MDBBtn>
        </form>
      </MDBContainer>
    );
  }
}

export default EditAdd;
