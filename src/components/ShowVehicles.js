import React, {Component} from 'react';
import {MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem} from "mdbreact";
import {Link} from "react-router-dom";
import {Button, Table} from "reactstrap";
import EditAdd from "./EditAdd/EditAdd";

export class ShowVehicles extends Component {
  state = {};

  componentDidMount() {
    // console.log("ShowVehicle.js's props: *below");
    // console.dir(this.props);
  }

  render() {
    const {columnHeadings, data, history} = this.props;
    console.log("this.props", this.props);
    console.log("columnHeadings", columnHeadings);
    console.log("data", data);
    // console.log("", );
    // console.log("", );
    // console.log("", );
    // console.log("", );

    // let contextualDeleteString = undefined;
    let contextualDeleteString = "contextualDeleteString";
    // get the html scanner to check the type
    // console()
    // let infoType = "vehicles";
    if (this.props.match.url === "/services/") {
      // infoType = "services"
      contextualDeleteString = "'s entire service history";
    }

    // Object.keys(data[0])[2].map(key =>
    //     <td>{data[0][key]}</td>
    // )
    console.log("Object.keys(data[0]): *below");
    console.dir(Object.keys(data[0]));
    console.dir(Object.keys(data[0])[2]);
    console.dir(Object.keys(data[0])[2]);
    Object.keys(data[0]).map(field => console.log(field, data[0][field]));

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


    // console.log("Object.keys(\n" +
    //     "        data[0][\n" +
    //     "            Object.keys(data[0])[2]\n" +
    //     "            ][0]\n" +
    //     "    )).map(field2 => console.log(data[0][\n" +
    //     "        Object.keys(data[0])[2]\n" +
    //     "        ][0][field2])) : *below");
    // Object.keys(
    //     data[0][
    //         Object.keys(data[0])[2]
    //         ][0]
    // ).map(field2 => console.log(field2));


    // console.log("Object.keys(\n" +
    //     "        data[0][\n" +
    //     "            Object.keys(data[0])[2]\n" +
    //     "            ][0]\n" +
    //     "    )).map(field2 => console.log(data[0][\n" +
    //     "        Object.keys(data[0])[2]\n" +
    //     "        ][0][field2])) : *below");
    // console.dir(Object.keys(
    //     data[0][
    //         Object.keys(data[0])[2]
    //         ][0]
    // )).map(field2 => console.log(data[0][
    //     Object.keys(data[0])[2]
    //     ][0][field2]));

    // data[0][
    //     Object.keys(data[0])[2]
    //     ][0].map(element => console.log("These are the properties within the first element of array within a record", element))
    // Object.keys(data[0]).map(field => console.log(field, data[0][field]));
    //     [2].map(key => {
    //       console.log("key", key)
    //     }
    // );

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
                            to={{
                              pathname: `/edit/${record.iid}`,
                              columnHeadings: columnHeadings,
                              data: data,
                            }}>
                        Edit
                      </Link>
                      <Button color="danger"
                              className="m-1"
                              onClick={() => {
                                if (window.confirm(
                                    `Are you sure you want to delete: ${record.iid}${(contextualDeleteString)}?`
                                )) this.props.deleteRecord(record)
                              }}
                      >
                        Delete
                      </Button>
                    </td>


                    {this.props.match.path === "/" ?
                        (
                            Object.keys(record).map(key =>
                                <td>{record[key]}</td>
                            )
                        )
                        :
                        (
                            <>
                              <td>{record.iid}</td>
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
                        pathname: "/add/",
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

export default ShowVehicles;