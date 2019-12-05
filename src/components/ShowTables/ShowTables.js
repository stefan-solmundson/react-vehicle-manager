import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem } from "mdbreact";
import { Link } from "react-router-dom";
import { Button, Table, Card, CardText, Form, FormGroup, Input, Label, FormText } from "reactstrap";
import EditAdd from "../EditAdd/EditAdd";
import '../../App.css';

export class ShowTables extends Component {
  // printDetailsString = "";
  state = {
    printDetailsString: undefined,
    searchStr: "",
    // printDetailsString: "test",
  };

  componentDidMount() {
    // console.log("ShowVehicle.js's props: *below");
    // console.dir(this.props);
  }


  render() {
    const { columnHeadings, data, dataArrayName, recordIdFieldName, history } = this.props;

    // let stuff;
    // let _printDetails = "test";
    // console.log(_printDetails);
    // console.log(this.printDetailsString);
    console.log( this.state.printDetailsString );
    // console.log("this.props", this.props);
    // console.log("", );

    return (
      <div className="px-5">
        <Form inline>
          <Input placeholder="search"
                 onChange={ ( event ) => this.setState( { searchStr: event.target.value }, () => {
                   // console.log(this.state.searchStr);
                   this.props.searchArray( this.props.dataArrayName, this.state.searchStr );
                 } ) }>
          </Input>
          <Button className={this.props.dark ? "btn-green" : "btn-outline-green"}
                  onClick={ () => this.props.searchArray( this.props.dataArrayName, this.state.searchStr ) }>
            Search
          </Button>
        </Form>

        <Table striped
               bordered
               dark={this.props.dark}
        >
          <thead>
          <tr>
            <th/>
            {
              ( columnHeadings !== undefined )
              &&
              columnHeadings.map( heading =>
                <React.Fragment>
                  <th className={"th"}
                      onClick={() => this.props.sortArrayByField(this.props.dataArrayName, heading.field)}>
                    {/*<Button className="p-0 m-0 b-0">*/}
                      { heading.label }
                    {/*</Button>*/}
                  </th>
                  {/*<Button></Button>*/ }
                </React.Fragment>
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
          { this.state.printDetailsString }
        </div>
      </div>
    )
  }
}

export default ShowTables;