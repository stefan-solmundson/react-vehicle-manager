import React, {Component} from 'react';
import {MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem} from "mdbreact";
import {Link} from "react-router-dom";
import {Button, Table} from "reactstrap";
import EditAdd from "./EditAdd";

export class ShowTables extends Component {
  state = {};

  componentDidMount() {
    // console.log("ShowVehicle.js's props: *below");
    // console.dir(this.props);
  }

  render() {
    const {columnHeadings, data, dataArrayName, history} = this.props;
    let infoType = undefined;
    let contextualDeleteString = "contextualDeleteString";
    if (this.props.match.path === "/vehicles/") {
      infoType = "vehicles";
      contextualDeleteString = "'s vehicle details";
    }
    if (this.props.match.path === "/services/") {
      infoType = "services";
      contextualDeleteString = "'s entire service history";
    }
    if (this.props.match.path === "/bookings/") {
      infoType = "bookings";
      contextualDeleteString = "'s entire booking history";
    }
    if (this.props.match.path === "/journeys/") {
      infoType = "journeys";
      contextualDeleteString = "'s entire journey history";
    }
    if (this.props.match.path === "/refuels/") {
      infoType = "refuels";
      contextualDeleteString = "'s entire refueling history";
    }

    console.log("this.props", this.props);
    // console.log("columnHeadings", columnHeadings);
    // console.log("data", data);
    // console.log("", );
    // console.log("", );
    // console.log("", );
    // console.log("", );

    // let contextualDeleteString = undefined;

    // get the html scanner to check the type
    // console()
    // let infoType = "vehicles";
    if (this.props.match.url === "/services/") {
      // infoType = "services"

    }

    // Object.keys(data[0])[2].map(key =>
    //     <td>{data[0][key]}</td>
    // )
    // console.log("Object.keys(data[0]): *below");
    // console.dir(Object.keys(data[0]));
    // console.dir(Object.keys(data[0])[2]);
    // console.dir(Object.keys(data[0])[2]);
    // Object.keys(data[0]).map(field => console.log(field, data[0][field]));

    // {
    //   // Figuring out how to display the internal arrays for each vehicle's services, bookings, journeys, refuels
    //   console.log("data[0][ Object.keys(data[0])[2] ][0]); : *below");
    //   console.dir(data[0][
    //       Object.keys(data[0])[2]
    //       ][0]);
    //
    //   console.log("Object.keys( data[0][ Object.keys(data[0])[2] ][0]) ); : *below");
    //   console.dir(Object.keys(
    //       data[0][
    //           Object.keys(data[0])[2]
    //           ][0]
    //   ));
    //
    //   console.log(
    //       "Object.keys(\n" +
    //       "    data[0][\n" +
    //       "        Object.keys(data[0])[2]\n" +
    //       "        ][0]\n" +
    //       ")\n" +
    //       "    .map(field2 => console.log(field2));\n" +
    //       "\n" +
    //       "*below");
    //   Object.keys(
    //       data[0][
    //           Object.keys(data[0])[2]
    //           ][0]
    //   )
    //       .map(field2 => console.log(field2));
    //
    //   console.log(
    //       "Object.keys(\n" +
    //       "    data[0][\n" +
    //       "        Object.keys(data[0])[2]\n" +
    //       "        ][0]\n" +
    //       ")\n" +
    //       "    .map(field2 =>\n" +
    //       "        console.log(\n" +
    //       "            data[0][\n" +
    //       "                Object.keys(data[0])[2]\n" +
    //       "                ][0][field2]\n" +
    //       "        )\n" +
    //       "    );\n" +
    //       "\n" +
    //       "*below");
    //   Object.keys(
    //       data[0][
    //           Object.keys(data[0])[2]
    //           ][0]
    //   )
    //       .map(field2 =>
    //           console.log(
    //               data[0][
    //                   Object.keys(data[0])[2]
    //                   ][0][field2]
    //           )
    //       );
    // }

    return (
        <div className="px-5">
          <Table striped bordered>
            <thead>
            <tr>
              <th/>
              {
                (columnHeadings !== undefined)
                &&
                columnHeadings.map(heading =>
                    <th>{heading.label}</th>
                )}
            </tr>
            </thead>
            <tbody>

            {
              (data != null)
              &&
              data.map((record, index) =>
                  <tr>
                    <td>
                      <Link className="btn btn-secondary m-1"
                            to={`edit/${record.vid}`}
                            >
                        Edit
                      </Link>
                      <Button color="danger"
                              className="m-1"
                              onClick={() => {
                                if (window.confirm(
                                    `Are you sure you want to delete: ${record.vid}${(contextualDeleteString)}?`
                                )) this.props.deleteRecord(record, infoType)
                              }}
                      >
                        Delete
                      </Button>
                    </td>


                    {this.props.dataArrayName === "vehicles" ?
                        (
                            Object.keys(record).map(key =>
                                <td>{record[key]}</td>
                            )
                        )
                        :
                        (
                            <>
                              <td>{record.vid}</td>
                              <td>{record.VIN}</td>
                              {
                                Object.keys(
                                    record[
                                        Object.keys(record)[Object.keys(record).length - 1]
                                        ][0]
                                )
                                    .map(field2 =>
                                        <td>
                                          {record[
                                              Object.keys(record)[Object.keys(record).length - 1]
                                              ][0][field2]}
                                        </td>
                                    )
                              }
                            </>
                        )
                    }
                  </tr>
              )}
            <tr>
              <td>
                <Link className="btn btn-primary m-1"
                      to={{
                        pathname: "/vehicles/add/",
                      }}>
                  Add
                </Link>
              </td>
              {
                [...Array(columnHeadings.length)].map(() =>
                    <td/>
                )
              }
            </tr>
            </tbody>
          </Table>
        </div>
    )
  }
}

export default ShowTables;