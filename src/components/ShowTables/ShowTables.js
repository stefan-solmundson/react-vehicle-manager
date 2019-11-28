import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem } from "mdbreact";
import { Link } from "react-router-dom";
import { Button, Table, Card, CardText, FormGroup, Input, Label, FormText } from "reactstrap";
import EditAdd from "../EditAdd/EditAdd";

export class ShowTables extends Component {
  // printDetailsString = "";
  state = {
    printDetailsString: undefined,
    // printDetailsString: "test",
  };

  componentDidMount() {
    // console.log("ShowVehicle.js's props: *below");
    // console.dir(this.props);
  }


  render() {
    const { columnHeadings, data, dataArrayName, recordIdFieldName, history } = this.props;

    // let _printDetails = "test";
    // console.log(_printDetails);
    // console.log(this.printDetailsString);
    console.log( this.state.printDetailsString );
    // console.log("this.props", this.props);
    // console.log("", );

    return (
      <div className="px-5">
        <Table striped bordered>
          <thead>
          <tr>
            <th/>
            {
              ( columnHeadings !== undefined )
              &&
              columnHeadings.map( heading =>
                <th>{ heading.label }</th>
              ) }
          </tr>
          </thead>
          <tbody>

          {
            ( data != null )
            &&
            data.map( ( record, index ) =>
              <tr>
                <td>
                  <Link className="btn btn-secondary m-1"
                        to={ `edit/${ record[ recordIdFieldName ] }` }
                  >
                    Edit
                  </Link>
                  <Button color="danger"
                          className="m-1"
                          onClick={ () => {
                            if ( window.confirm(
                              `Are you sure you want to delete the ${ dataArrayName.substring( 0, dataArrayName.length - 1 ) }: ${ record[ recordIdFieldName ] }?`
                            ) ) this.props.deleteRecord( record, recordIdFieldName, dataArrayName )
                          } }
                  >
                    Delete
                  </Button>

                  { dataArrayName === "vehicles" &&
                  <Button className="btn btn-blue-grey m-1"
                          size="md"
                    // onClick={ () => { console.log(this.props.printDetails( record ))} }
                          onClick={ () => {
                            this.setState( { printDetailsString: this.props.printDetails( record ) } )
                          } }
                    // onClick={ () => {this.printDetailsString = this.props.printDetails( record )} }
                  >
                    Print Details
                  </Button>
                  }

                </td>
                {
                  Object.keys( record ).map( key =>
                    <td>{ record[ key ] }</td>
                  )
                }
              </tr>
            ) }
          <tr>
            <td>
              <Link className="btn btn-primary m-1" to="add/">
                Add
              </Link>
            </td>
            {
              [ ...Array( columnHeadings.length ) ].map( () =>
                <td/>
              )
            }
          </tr>
          </tbody>
        </Table>
        <div>
          {this.state.printDetailsString}
        </div>
      </div>
    )
  }
}

export default ShowTables;