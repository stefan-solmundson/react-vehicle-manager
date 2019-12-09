import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem } from "mdbreact";
import { Link } from "react-router-dom";
import { Button, Table, Jumbotron } from "reactstrap";
import EditAdd from "../EditAdd/EditAdd";
import { ShowTables } from "../ShowTables/ShowTables";
import '../../App.css';

export class Help extends Component {
  state = {};

  componentDidMount() {
    // console.log("Help.js's props: *below");
    // console.dir(this.props);
  }

  render() {
    return (


      <div className={ this.props.dark ? "bgDark text-white m-sm-2 m-md-3" : "m-sm-2 m-md-3" }>
        {/*<div className="m-sm-2 m-md-3">*/ }
        {/*<Jumbotron className={this.props.dark ? "text-white bgDark" : ""}>*/ }
        <h1 className="m-sm-2 m-md-3">React Contact Manager Help</h1>
        {/*<Ro*/ }
        {/*<h2>To:</h2>*/}
        <h3>Adding a Contact</h3>
        <p>Click on the add button in the contact's row</p>
        <h3>Deleting a Contact</h3>
        <p>Click on the delete button in the contact's row</p>
        <h3>Editing a Contact</h3>
        <p>Click on the edit button in the contact's row</p>

        <p className="m-sm-3 m-md-4"><strong>*Be careful</strong>: use <strong>ONLY standard text</strong>, or you might run into problems.</p>

        <hr style={ this.props.dark ? { borderColor: "white" } : {} }/>

        <h1>Finding a Contact</h1>
        <h3>Searching</h3>
        <p>The <strong>search bar</strong> can be used to <strong>prioritize contacts</strong> by name</p>
        <p>*The contacts that aren't a positive match will still be displayed below your results.</p>
        <h3>Sorting</h3>
        <p>The <strong>contacts table</strong> can be sorted by ANY of it's <strong>columns</strong></p>
        <p>*Sorting isn't reversible at the moment.</p>

        <hr style={ this.props.dark ? { borderColor: "white" } : {} }/>

        <h1>Cool Features</h1>
        <h3>Dark Mode</h3>
        <p>Simply click the <strong>"DARK" button</strong> up top and you'll see :)</p>

        {/*</Jumbotron>*/ }
      </div>
    )
  }
}

export default Help;

