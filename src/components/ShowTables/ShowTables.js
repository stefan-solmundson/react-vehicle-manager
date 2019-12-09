import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem } from "mdbreact";
import { Link } from "react-router-dom";
import { Button, Table, Card, CardText, Form, FormGroup, Input, Label, FormText } from "reactstrap";
import EditAdd from "../EditAdd/EditAdd";
import '../../App.css';

export class ShowTables extends Component {
  state = {
    printDetailsString: undefined,
    searchStr: "",
  };

  render() {
    const { columnHeadings, data, dataArrayName, recordIdFieldName, history } = this.props;
    // console.log("this.props", this.props);

    return (
      <div className="px-sm-2 px-md-4 px-lg-5 py-lg-5"
           style={{
             minWidth: '400px',
      }}
      >
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
               size={window.innerWidth < 1000 ? "sm" : "md"}
               // className="sm"
               // style={{
               //   minWidth: '800px',
               // }}
               // resposive
               // className={window.length < 1400 ? "text-danger" : "text-primary"}
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
                              `Are you sure you want to delete the ${ dataArrayName.substring( 0, dataArrayName.length - 1 ) }: ${ record.givenName } ${ record.familyName }?`
                            ) ) this.props.deleteRecord( record, recordIdFieldName, dataArrayName )
                          } }
                  >
                    Delete
                  </Button>

                </td>
                {
                  Object.keys( record ).map( key =>
                      <React.Fragment>
                        {key !== this.props.recordIdFieldName &&
                        <td>{record[key]}</td>
                        }
                      </React.Fragment>
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