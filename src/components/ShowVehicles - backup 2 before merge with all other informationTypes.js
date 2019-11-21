import React, {Component} from 'react';
import {MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem} from "mdbreact";
import {Link} from "react-router-dom";
import {Button, Table} from "reactstrap";
import EditAdd from "./EditAdd";

export class ShowVehicles extends Component {
  state = {};

  componentDidMount() {
    // console.log("ShowVehicle.js's props: *below");
    // console.dir(this.props);
  }

  render() {
    const {vehicleHeadings, vehicles, history} = this.props;
    return (
        <div className="p-5">
          <Table striped bordered>
            <thead>
            <tr>
              <th/>
              {
                (vehicleHeadings !== undefined)
                &&
                vehicleHeadings.map(heading =>
                    <th>{heading.label}</th>
                )}
            </tr>
            </thead>
            <tbody>

            {
              (vehicles != null)
              &&
              vehicles.map((vehicle, index) =>
                  <tr>
                    <td>
                      <Link className="btn btn-secondary m-1"
                            to={{
                              pathname: `/edit/${vehicle.iid}`,
                              vehicleHeadings: vehicleHeadings,
                              vehicles: vehicles,
                            }}>
                        Edit
                      </Link>
                      <Button color="danger"
                              className="m-1"
                              onClick={() => {if (window.confirm(`Are you sure you want to delete: ${vehicle.iid}?`)) this.props.deleteVehicle(vehicle)}}
                      >
                        Delete
                      </Button>
                    </td>
                    {
                      Object.keys(vehicle).map(key =>
                          <td>{vehicle[key]}</td>
                      )
                    }

                  </tr>
              )}
            <tr>
              <td>
                <Link className="btn btn-primary m-1"
                      to={{
                        pathname: "/add/",
                        vehicleHeadings: vehicleHeadings,
                        vehicle: vehicles[0],
                        editOrAdd: "add",
                      }}>
                  Add
                </Link>
              </td>
              {
                [...Array(vehicleHeadings.length)].map(() =>
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

export default ShowVehicles;


// ---- Diego's table renderer
//
{/*<MDBContainer>*/
}
{/*  <h1 className="text-center">Vehicles:</h1>*/
}
{/*  {*/
}
{/*    vehicles ?*/
}
{/*        (*/
}
{/*            <>*/
}
{/*              {*/
}
{/*                vehicles*/
}
{/*                    .map((vehicle, index) => (*/
}
{/*                        <MDBContainer key={index} className="text-center my-5">*/
}
{/*                          <h2>{`${vehicle.manufacturer} ${vehicle.model}`}</h2>*/
}
{/*                          <MDBBtn*/
}
{/*                              color="warning"*/
}
{/*                              onClick={() => history.push(`/edit/${vehicle.iid}`)}>*/
}
{/*                            Edit*/
}
{/*                          </MDBBtn>*/
}
{/*                          <MDBListGroup>*/
}
{/*                            {*/
}
{/*                              Object*/
}
{/*                                  .keys(vehicle)*/
}
{/*                                  .map((field, i) => (*/
}
{/*                                      <MDBListGroupItem key={i}>*/
}
{/*                                        {field}: {vehicle[field]}*/
}
{/*                                      </MDBListGroupItem>*/
}
{/*                                  ))*/
}
{/*                            }*/
}
{/*                          </MDBListGroup>*/
}
{/*                        </MDBContainer>*/
}
{/*                    ))*/
}
{/*              }*/
}
{/*            </>*/
}
{/*        )*/
}
{/*        :*/
}
{/*        (*/
}
{/*            <div className="spinner-border text-primary" role="status">*/
}
{/*              <span className="sr-only">Loading...</span>*/
}
{/*</div>*/
}
{/*)*/
}
{/*}*/
}
{/*</MDBContainer>*/
}

