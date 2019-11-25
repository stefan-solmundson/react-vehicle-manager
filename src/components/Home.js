import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem } from "mdbreact";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import EditAdd from "./EditAdd";
import { ShowTables } from "./ShowTables";

export class Home extends Component {
  state = {};

  componentDidMount() {
    // console.log("Home.js's props: *below");
    // console.dir(this.props);
  }

  render() {
    const { columnHeadings, data, history } = this.props;
    // console.log( "this.props", this.props );
    // console.log( "columnHeadings", columnHeadings );
    // console.log( "data", data );
    // console.log("", );
    // console.log("", );
    // console.log("", );
    // console.log("", );
    return (
      <div className="px-5 py-3">
        { this.props.pages.map( ( page, index ) => <>
          { index % 2 ?
            <Link className="btn btn-primary m-2"
                  to={ {
                    pathname: `/${ page }/`,
                  } }>
              { page }
            </Link>
            :
            <Link className="btn btn-secondary m-2"
                  to={ {
                    pathname: `/${ page }/`,
                  } }>
              { page }
            </Link>
          }
        </> ) }
      </div>
    )
  }
}

export default Home;

