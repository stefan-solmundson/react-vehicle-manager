import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem } from "mdbreact";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import EditAdd from "../EditAdd/EditAdd";
import { ShowTables } from "../ShowTables/ShowTables";
import '../../App.css';

export class Home extends Component {
  state = {};

  componentDidMount() {
    // console.log("Home.js's props: *below");
    // console.dir(this.props);
  }

  render() {
    // const { columnHeadings, data, history } = this.props;
    // console.log( "this.props", this.props );
    // console.log( "columnHeadings", columnHeadings );
    // console.log( "data", data );
    // console.log("", );
    // console.log("", );
    // console.log("", );
    // console.log("", );
    return (

        <div>
          { this.props.pages.map( ( page, index ) =>
              <React.Fragment>
                <Link className={index % 2 ? "btn btn-deep-purple m-2" : "btn btn-purple m-2"}
                      to={ {
                        pathname: `/${ page }/`,
                      } }>
                  { page }
                </Link>
              </React.Fragment> ) }
        </div>
    )
  }
}

export default Home;

