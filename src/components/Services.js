import React, {Component} from 'react';
import {MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem} from "mdbreact";
import {Link} from "react-router-dom";
import {Button, Table} from "reactstrap";
import EditAdd from "./EditAdd/EditAdd";

export class Services extends Component {
  // state = {};

  constructor(props) {
    super(props);

    let _services;
    if (props.services == null) {
      console.log("props.services == null");
      _services = [
        {
          iid: "Jeff's Jeep",
          array: [
            // last service
            {
              odometer: "142000",
              date: "2019/04/03",
              serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
            },
            // 2nd last service
            {
              odometer: "74000",
              date: "2015/06/01",
              serviceLocation: "Autobahn Mechanical and Electrical Services Victoria Park",
            },
          ],
          // VIN: "ExampleVIN",
        },
        {
          iid: "Carol's Corolla",
          array: [
            // last service
            {
              odometer: "122000",
              date: "2018/08/22",
              serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
            },
          ],
        },
        {
          iid: "Carol's 2nd Corolla",
          array: [
            // last service
            {
              odometer: "101000",
              date: "2018/08/23",
              serviceLocation: "Autobahn Mechanical and Electrical Services Canningvale",
            },
          ],
        },
      ];
    } else {
      console.log("props.services != null");
      _services = props.services;
    }

    this.state = {
      // vehicles: _vehicles,
      services: _services,
    };
  }


  componentDidMount() {
    console.log("Services.js's props: *below");
    console.dir(this.props);

    console.log("Object.keys(this.props.services[0].vehicleServices) : *below");
    console.dir(Object.keys(this.props.services[0].vehicleServices));

    console.log("Object.keys(this.props.services[0].vehicleServices[0]) : *below");
    console.dir(Object.keys(this.props.services[0].vehicleServices[0]));

    // console.log("this.props.services[0].vehicleServices[0][0]) : *below");
    // // let xx = ;
    // console.dir(this.props.services[0].vehicleServices[0][0]);
    // // console.dir(xx[1]);

    this.props.services.map(vehicle =>
        Object.keys(vehicle.vehicleServices[0]).map(
            key => {
              console.log(key);
              console.log(vehicle.vehicleServices[0][key]);
            }
        )
    )
  }

  render() {
    // const services
    const {servicesHeadings, services, history} = this.props;

    return (
        <div className="p-5">
          <Table striped bordered>
            <thead>
            <tr>
              <th/>
              {
                // (servicesHeadings !== undefined)
                // &&
                servicesHeadings.map(heading =>
                    <th>{heading.label}</th>
                )}
            </tr>
            </thead>
            <tbody>
            {
              // (this.state.vehicles != null)
              // &&
              services.map((vehicle, index) =>
                  <tr>
                    <td>
                      <Link className="btn btn-secondary m-1"
                            to={{
                              pathname: `/services/edit/${vehicle.iid}`,
                              // columnHeadings: servicesHeadings,
                              // vehicles: vehicles,
                            }}>
                        Edit
                      </Link>
                      <Button color="danger"
                              className="m-1"
                          // onClick={() => {if (window.confirm(`Are you sure you want to delete: ${vehicle.iid}'s service history?`)) this.props.deleteVehicleServiceHistory(vehicle)}}
                          // onClick={() => {if (window.confirm(`Are you sure you want to delete: ${vehicle.iid}'s service history?`)) console.log("TODO deleteVehicleServiceHistory(vehicle)")}}
                      >
                        Delete
                      </Button>
                    </td>
                    <td>
                      {vehicle.iid}
                    </td>
                    {
                      Object.keys(vehicle.vehicleServices[0]).map(key =>
                          <td>{vehicle.vehicleServices[0][key]}</td>
                      )
                    }
                  </tr>
              )}
            <tr>
              <td>
                <Link className="btn btn-primary m-1"
                      to={{
                        pathname: "/services/add/",
                        // columnHeadings: servicesHeadings,
                        // vehicle: vehicles[0],
                        // editOrAdd: "add",
                      }}>
                  Add
                </Link>
              </td>
              {
                [...Array(servicesHeadings.length)].map(() =>
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

// test = () => {
//   console.log("ShowVehicle.js's props: *below");
//   console.dir(this.props);
// };
//
// render() {
//   return (
//       <button onClick={() => this.test()}>
//         test
//       </button>
//
//   )
// }

export default Services;


