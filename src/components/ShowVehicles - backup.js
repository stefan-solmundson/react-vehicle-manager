import React from 'react';
import {MDBBtn, MDBContainer, MDBListGroup, MDBListGroupItem} from "mdbreact";
import {Link} from "react-router-dom";
import {Button, Table} from "reactstrap";

export const ShowVehicles = props => {
  const {columnHeadings, vehicles, history} = props;
  return (
      <div className="p-5">
        <Table striped bordered>
          <thead>
          <tr>
            <th/>
            {
              // (this.state.columnHeadings !== undefined)
              // &&
              columnHeadings.map(heading =>
                  <th>{heading.label}</th>
              )}
          </tr>
          </thead>
          <tbody>

          {
            // (this.state.vehicles != null)
            // &&
            vehicles.map((vehicle, index) =>
                <tr>
                  <td>
                    {/*<Link className="btn btn-grey m-1"*/}
                    {/*<Link className="btn btn-secondary m-1"*/}
                    <Link className="btn btn-secondary m-1"
                          to={{
                            pathname: `/edit/${vehicle.iid}`,
                            columnHeadings: columnHeadings,
                            vehicles: vehicles,
                            originalVehicles: vehicles,
                            editOrAdd: "edit",
                            index: index,
                            hasLoaded: false,
                          }}>
                      Edit
                    </Link>
                    <Button color="danger"
                            className="m-1"
                        // onClick={this.delete(this, index)}>
                        //     onClick={() => this.delete(this, index)}
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
                      columnHeadings: columnHeadings,
                      vehicle: vehicles[0],
                      editOrAdd: "add",
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
};


// ---- Diego's table renderer
//
// <MDBContainer>
//   <h1 className="text-center">Vehicles:</h1>
//   {
//     vehicles ?
//         (
//             <>
//               {
//                 vehicles
//                     .map((vehicle, index) => (
//                         <MDBContainer key={index} className="text-center my-5">
//                           <h2>{`${vehicle.manufacturer} ${vehicle.model}`}</h2>
//                           <MDBBtn
//                               color="warning"
//                               onClick={() => history.push(`/edit/${vehicle.iid}`)}>
//                             Edit
//                           </MDBBtn>
//                           <MDBListGroup>
//                             {
//                               Object
//                                   .keys(vehicle)
//                                   .map((field, i) => (
//                                       <MDBListGroupItem key={i}>
//                                         {field}: {vehicle[field]}
//                                       </MDBListGroupItem>
//                                   ))
//                             }
//                           </MDBListGroup>
//                         </MDBContainer>
//                     ))
//               }
//             </>
//         )
//         :
//         (
//             <div className="spinner-border text-primary" role="status">
//               <span className="sr-only">Loading...</span>
// </div>
// )
// }
// </MDBContainer>

