// this is the tutorial we followed
// https://mdbootstrap.com/education/react/agenda-4-bootstrap/

import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBRow } from "mdbreact";

export class EditAdd extends Component {

  constructor( props ) {
    super( props );

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
      } else {
        // call addRecord on App.js, then navigate to "/vehicles/" (ShowData) AFTER the setState in App.js has finished by using the setStates callback
        this.props.addRecord( this.state.record, this.props.dataArrayName, () => this.props.history.push( `/${ this.props.dataArrayName }/` ) );
      }
    } else {
      // call editRecord on App.js, then navigate to "/vehicles/" (ShowData) AFTER the setState in App.js has finished by using the setStates callback
      this.props.editRecord( this.state.record, this.props.dataArrayName, () => this.props.history.push( `/${ this.props.dataArrayName }/` ) );
    }
  };

  // TODO: how to make the inputs look good https://reactstrap.github.io/components/form/

  render() {
    // Conditions to check it is not "just" the vehicles page

    // OK SO MOST OF THESE dataDefaultRecord's ARE MEANT TO BE records because this is both an editting & adding form
    const { record } = this.state;
    const { columnHeadings } = this.props;
    console.log( "this.props", this.props );
    console.log( "record", record );
    console.log( "Object.keys(record).length", Object.keys( record ).length );
    const offset = Object.keys( record ).length - 2;
    console.log( "record.vehicleServicesArrray", record.vehicleServicesArray );

    console.log( "record.vehicleServicesArray.map( sField => console.log( sField ) );\n\n*below" );
    record.vehicleServicesArray.map( sField => console.log( sField ) );

    // record.vehicleServicesArray == field
    let field = record.vehicleServicesArray;
    console.log( "field is an array, here is field:", field );
    record.vehicleServicesArray.map( sField => console.log( "name's of the objects within the sField Array\n-->\nssField names: ", Object.keys( sField ) ) );
    // THEN
    field.map( sField =>
      console.log( "field contains elements,\n" +
        "each of field's elements is called an sField because they are inside of field,\n" +
        "each sField is an object,\n" +
        "here are the sFields:", sField )
    );

    console.log( "here are the arrays of keys from each sField: ",
      field.map( sField =>
        console.log( Object.keys( sField ) )
      )
    );
    console.log( "field are arrays,\nsfield's are objects,\nssfield's are properties;\n" );

    field.map( sField => {
      console.log( "new sfield" );
      Object.keys( sField ).map( ssFieldKey =>
        console.log( "here are the key, value pair of the sfields within field", ssFieldKey, sField[ ssFieldKey ] ) )
    } );

    // I need to map through the keys in each sField, I need to use these keys to access the properties within each sField

    record.vehicleServicesArray.map(
      sField => Object.keys( sField )
    ).map( ssFieldName =>
      record.vehicleServicesArray.map(
        sFieldArray => console.log( ssFieldName, sFieldArray[ ssFieldName ] )
      )
    );
    // So I need to access the subfield arrays & used the ssField names on them to access their properties
    // record.vehicleServicesArray.map(
    //   sField => Object.keys( sField )
    // ).map(
    //   ssFieldName => ss
    // );
    // const thing = this.props.match.params.operation === "add" ? "field === 'vid'" : undefined;

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
                    { index !== Object.keys( record ).length - 1 ?
                      (
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
                                  // readOnly={ field === 'vid' || field === 'VIN' }
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
                      )
                      :
                      (
                        <>
                          {
                            record[field].map( sField =>
                              <div className="border m-5">
                                {
                                  Object.keys( sField ).map( ssFieldKey =>
                                    <>
                                      <p>Label: { ssFieldKey }</p>
                                      <p>Value: { sField[ ssFieldKey ] }</p>
                                    </>
                                  )
                                }
                              </div>
                            )
                          }
                          </>
                      )
                    }
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
      </MDBContainer>
    );
  }
}

export default EditAdd;


{/*<MDBRow>*/
}
{/*  { field.map( ( subfield, index ) =>*/
}
{/*    <>*/
}
{/*      <label htmlFor={ field } className="grey-text">*/
}
{/*        { columnHeadings[ offset + index ].label }*/
}
{/*      </label>*/
}
{/*      <p>{ subfield }</p>*/
}
{/*      */
}
{/*    </>*/
}
{/*  ) }*/
}
{/*</MDBRow>*/
}


{/*<MDBRow>*/
}
{/*  {*/
}
{/*    typeof field === Array*/
}
{/*    &&*/
}
{/*    field.map(subfield =>*/
}
{/*      <p>{subfield}</p>*/
}
{/*    )*/
}
{/*    // record.length === index*/
}
{/*    // &&*/
}
{/*    //   field.map(subfield =>*/
}
{/*    //   <p>{subfield}</p>*/
}
{/*    //   )*/
}
{/*  }*/
}
{/*</MDBRow>*/
}