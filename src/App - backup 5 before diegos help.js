// this is the tutorial we followed
// https://mdbootstrap.com/education/react/agenda-4-bootstrap/

import React, {Component} from 'react';
import {MDBBtn, MDBBadge, MDBIcon, MDBDataTable, MDBContainer} from 'mdbreact';
import {Link} from "react-router-dom";
import {Table, Button} from 'reactstrap';

// import './App.css';

class App extends Component {
  state = {
    // reloadDataBase,
  };

  constructor(props) {
    /* properties
    columnHeadings
    vehicles
    */

    super(props);
    {
      let _vehicles;
      if (props.location.vehicles) {
        _vehicles = props.location.vehicles;
      } else {
        console.log("loading the vehicle data, because this.props.location.vehicles was NOT defined OR was null");
        // TODO: PUT A LOADER IN HERE FOR THE FIREBASE DATA
        _vehicles = [
          {
            iid: "Jeff's Jeep",
            manufacturer: "Jeep",
            model: "Wrangler (JK)",
            odometer: 280000,
            requiresServicing: "Yes",
            dateManufactured: 2017,
            datePurchased: "2017/05/20",
            dateLastServiced: -1,
            kilometersSinceServiced: 2800000,
            kilometersPerService: 90000,
            fuelEconomy: -1,
            fuelCapacity: 104,
            weight: 1.45,
            VIN: "ExampleVIN",
            registrationNumber: "1ABC-123",
          },
          {
            iid: "Carol's Corolla",
            manufacturer: "Toyota",
            model: "Corolla (E160)",
            odometer: 20000,
            requiresServicing: "No",
            dateManufactured: 2014,
            datePurchased: "2018/05/10",
            dateLastServiced: -1,
            kilometersSinceServiced: 2000,
            kilometersPerService: 110000,
            fuelEconomy: -1,
            fuelCapacity: 82.5,
            weight: 1.08,
            VIN: "ExampleVIN",
            registrationNumber: "1ABC-123",
          },
          {
            iid: "Carol's 2nd Corolla",
            manufacturer: "Toyota",
            model: "Corolla (E160)",
            odometer: 20000,
            requiresServicing: "No",
            dateManufactured: 2014,
            datePurchased: "2018/06/04",
            dateLastServiced: -1,
            kilometersSinceServiced: 2000,
            kilometersPerService: 110000,
            fuelEconomy: -1,
            fuelCapacity: 82.5,
            weight: 1.08,
            VIN: "ExampleVIN",
            registrationNumber: "1ABC-123",
          },
          // {
          //   iid: "",
          //   manufacturer: "",
          //   model: "",
          //   odometer: ,
          //   requiresServicing: ,
          //   dateManufactured: ,
          //   datePurchased: ,
          //   dateLastServiced: "",
          //   kilometersSinceServiced: ,
          //   kilometersPerService: ,
          //   fuelEconomy: "",
          //   fuelCapacity: ,
          //   weight: ,
          //   VIN: "ExampleVIN",
          //   registrationNumber: "1ABC-123",
          // },
          // {
          //   iid: "Bob's Corolla",
          //   manufacturer: "Toyota",
          //   // odometer: 100000,
          //   model: "Corolla (E160)",
          // },
          // {
          //   iid: "Caren's Corolla",
          //   manufacturer: "Toyota",
          //   model: "Corolla (E160)",
          // },
          // {
          //   iid: "fdsafdas's Corolla",
          //   manufacturer: "Toyota",
          //   model: "Corolla (E160)",
          // },
          // {
          //   iid: "Fdasfsda's Sports Car",
          //   manufacturer: "Mitsubishi",
          //   model: "Lancer (??)"
          //   // action: <button onClick={this.clickHandler}>Action</button>,
          // },
        ];
      }

      this.state = {
        columnHeadings: [
          {
            label: "Internal ID",
            field: "iid",
            sort: 'asc',
            width: 20,
          },
          {
            label: "Model",
            field: `model`,
            sort: 'asc',
            width: 20,
          },
          {
            label: "Make",
            field: "manufacturer",
            sort: 'asc',
            width: 150
          },

          {
            label: "Odometer (km)",
            field: "odometer",
          },
          {
            label: "Requires Servicing",
            field: "requiresServicing",
          },
          {
            label: "Date Manufactured",
            field: "dateManufactured",
          },
          {
            label: "Date Purchased",
            field: "datePurchased",
          },
          {
            label: "Last Service",
            field: "dateLastServiced",
          },
          {
            label: "kms since Last Service",
            field: "kilometersSinceServiced",
          },
          {
            label: "kms per Service",
            field: "kilometersPerService",
          },
          {
            label: "Fuel Economy",
            field: "fuelEconomy",
          },
          {
            label: "Fuel Capacity (L)",
            field: "fuelCapacity",
          },
          {
            label: "Weight (T)",
            field: "weight",
          },
          {
            label: "VIN",
            field: "VIN",
          },
          {
            label: "Reg. No.",
            field: "registrationNumber",
          },
        ],
        headingsAndData: [],
        vehicles: _vehicles,
      };
    }

    // console.log("props.vehicle in constructor", props.history.vehicle);
    // console.log(this.state.vehicles);
    // console.log(this.props.location.vehicles);
  }

  // myConstructor = () => {
  //   if (this.props.location.vehicles === undefined) {
  //     this.setState({
  //       vehicles: [
  //         {
  //           iid: "Jeff's Jeep",
  //           manufacturer: "Jeep",
  //           model: "Wrangler (JK)",
  //           odometer: 280000,
  //           requiresServicing: "Yes",
  //           dateManufactured: 2017,
  //           datePurchased: "2017/05/20",
  //           dateLastServiced: -1,
  //           kilometersSinceServiced: 2800000,
  //           kilometersPerService: 90000,
  //           fuelEconomy: -1,
  //           fuelCapacity: 104,
  //           weight: 1.45,
  //           VIN: "ExampleVIN",
  //           registrationNumber: "1ABC-123",
  //         },
  //         {
  //           iid: "Carol's Corolla",
  //           manufacturer: "Toyota",
  //           model: "Corolla (E160)",
  //           odometer: 20000,
  //           requiresServicing: "No",
  //           dateManufactured: 2014,
  //           datePurchased: "2018/05/10",
  //           dateLastServiced: -1,
  //           kilometersSinceServiced: 2000,
  //           kilometersPerService: 110000,
  //           fuelEconomy: -1,
  //           fuelCapacity: 82.5,
  //           weight: 1.08,
  //           VIN: "ExampleVIN",
  //           registrationNumber: "1ABC-123",
  //         },
  //         {
  //           iid: "Carol's 2nd Corolla",
  //           manufacturer: "Toyota",
  //           model: "Corolla (E160)",
  //           odometer: 20000,
  //           requiresServicing: "No",
  //           dateManufactured: 2014,
  //           datePurchased: "2018/06/04",
  //           dateLastServiced: -1,
  //           kilometersSinceServiced: 2000,
  //           kilometersPerService: 110000,
  //           fuelEconomy: -1,
  //           fuelCapacity: 82.5,
  //           weight: 1.08,
  //           VIN: "ExampleVIN",
  //           registrationNumber: "1ABC-123",
  //         },
  //         // {
  //         //   iid: "",
  //         //   manufacturer: "",
  //         //   model: "",
  //         //   odometer: ,
  //         //   requiresServicing: ,
  //         //   dateManufactured: ,
  //         //   datePurchased: ,
  //         //   dateLastServiced: "",
  //         //   kilometersSinceServiced: ,
  //         //   kilometersPerService: ,
  //         //   fuelEconomy: "",
  //         //   fuelCapacity: ,
  //         //   weight: ,
  //         //   VIN: "ExampleVIN",
  //         //   registrationNumber: "1ABC-123",
  //         // },
  //         // {
  //         //   iid: "Bob's Corolla",
  //         //   manufacturer: "Toyota",
  //         //   // odometer: 100000,
  //         //   model: "Corolla (E160)",
  //         // },
  //         // {
  //         //   iid: "Caren's Corolla",
  //         //   manufacturer: "Toyota",
  //         //   model: "Corolla (E160)",
  //         // },
  //         // {
  //         //   iid: "fdsafdas's Corolla",
  //         //   manufacturer: "Toyota",
  //         //   model: "Corolla (E160)",
  //         // },
  //         // {
  //         //   iid: "Fdasfsda's Sports Car",
  //         //   manufacturer: "Mitsubishi",
  //         //   model: "Lancer (??)"
  //         //   // action: <button onClick={this.clickHandler}>Action</button>,
  //         // },
  //       ]
  //     });
  //   } else {
  //     this.setState({vehicles: this.props.location.vehicles});
  //   }
  // };

  componentDidMount(): void {
    this.setState({headingsAndData: []})
    // console.log(this.props.location.testVar);
    // if (this.state.vehicles === undefined) {
    //   this.setState({
    //     vehicles: [
    //       {
    //         iid: "Jeff's Jeep",
    //         manufacturer: "Jeep",
    //         model: "Wrangler (JK)",
    //         odometer: 280000,
    //         requiresServicing: "Yes",
    //         dateManufactured: 2017,
    //         datePurchased: "2017/05/20",
    //         dateLastServiced: -1,
    //         kilometersSinceServiced: 2800000,
    //         kilometersPerService: 90000,
    //         fuelEconomy: -1,
    //         fuelCapacity: 104,
    //         weight: 1.45,
    //         VIN: "ExampleVIN",
    //         registrationNumber: "1ABC-123",
    //       },
    //       {
    //         iid: "Carol's Corolla",
    //         manufacturer: "Toyota",
    //         model: "Corolla (E160)",
    //         odometer: 20000,
    //         requiresServicing: "No",
    //         dateManufactured: 2014,
    //         datePurchased: "2018/05/10",
    //         dateLastServiced: -1,
    //         kilometersSinceServiced: 2000,
    //         kilometersPerService: 110000,
    //         fuelEconomy: -1,
    //         fuelCapacity: 82.5,
    //         weight: 1.08,
    //         VIN: "ExampleVIN",
    //         registrationNumber: "1ABC-123",
    //       },
    //       {
    //         iid: "Carol's 2nd Corolla",
    //         manufacturer: "Toyota",
    //         model: "Corolla (E160)",
    //         odometer: 20000,
    //         requiresServicing: "No",
    //         dateManufactured: 2014,
    //         datePurchased: "2018/06/04",
    //         dateLastServiced: -1,
    //         kilometersSinceServiced: 2000,
    //         kilometersPerService: 110000,
    //         fuelEconomy: -1,
    //         fuelCapacity: 82.5,
    //         weight: 1.08,
    //         VIN: "ExampleVIN",
    //         registrationNumber: "1ABC-123",
    //       },
    //       // {
    //       //   iid: "",
    //       //   manufacturer: "",
    //       //   model: "",
    //       //   odometer: ,
    //       //   requiresServicing: ,
    //       //   dateManufactured: ,
    //       //   datePurchased: ,
    //       //   dateLastServiced: "",
    //       //   kilometersSinceServiced: ,
    //       //   kilometersPerService: ,
    //       //   fuelEconomy: "",
    //       //   fuelCapacity: ,
    //       //   weight: ,
    //       //   VIN: "ExampleVIN",
    //       //   registrationNumber: "1ABC-123",
    //       // },
    //       // {
    //       //   iid: "Bob's Corolla",
    //       //   manufacturer: "Toyota",
    //       //   // odometer: 100000,
    //       //   model: "Corolla (E160)",
    //       // },
    //       // {
    //       //   iid: "Caren's Corolla",
    //       //   manufacturer: "Toyota",
    //       //   model: "Corolla (E160)",
    //       // },
    //       // {
    //       //   iid: "fdsafdas's Corolla",
    //       //   manufacturer: "Toyota",
    //       //   model: "Corolla (E160)",
    //       // },
    //       // {
    //       //   iid: "Fdasfsda's Sports Car",
    //       //   manufacturer: "Mitsubishi",
    //       //   model: "Lancer (??)"
    //       //   // action: <button onClick={this.clickHandler}>Action</button>,
    //       // },
    //     ],
    //   });
    // }
  }

  delete = (e, index) => {
    this.setState({vehicles: this.state.vehicles.slice(0, index).concat(this.state.vehicles.slice(index + 1))});
  };

  // delete( id ) {
  //     firebase.firestore().collection( 'boards' )
  //         .doc( id ).delete().then( () => {
  //         console.log( "Document successfully deleted!" );
  //         this.props.history.push( "/" );
  //     } ).catch( ( error ) => {
  //         console.error( "Error removing document: ", error );
  //     });
  // }

  render() {
    // this.myConstructor();

    // console.log(this.props.location.columnHeadings);
    // console.log(this.state.columnHeadings);
    // console.log(this.state.columnHeadings[1]);
    // console.log(this.props.location.vehicles);
    // console.log(this.state.vehicles);
    // console.log(this.state.vehicles[1]);
    // this.state.vehicles.map(vehicle =>
    //     console.log(vehicle)
    // );
    // let array = [...this.state.vehicles[1]];
    // array.map(vehicle =>
    //     console.log(vehicle)
    // );

    // // convert an object into an array
    // // https://stackoverflow.com/questions/38824349/how-to-convert-an-object-to-an-array-of-key-value-pairs-in-javascript
    // this.state.vehicles.map(vehicle =>
    //     Object.keys(vehicle).map(function(key) {
    //         console.log(vehicle[key]);
    //         return vehicle[key];
    //     }
    //     ));

    if (this.state.vehicles == null) {
      return (
          <div>Loading Data, setting states</div>
      )
    } else {
      return (
          <React.Fragment>

            {/*<MDBBtn onClick={console.log()}>*/}
            {/*    test*/}
            {/*</MDBBtn>*/}

            {/*<MDBContainer className="w-100 p-5">*/}
            {/*</MDBContainer>*/}

            <div className="p-5">

              {/*this.state.headingsAndData.map(item =>*/}
              <Table striped bordered>
                <thead>
                <tr>
                  <th></th>
                  {
                    (this.state.columnHeadings !== undefined)
                    &&
                    this.state.columnHeadings.map(heading =>
                        <th>{heading.label}</th>
                    )}
                </tr>
                </thead>
                <tbody>

                {
                  (this.state.vehicles != null)
                  &&
                  this.state.vehicles.map((vehicle, index) =>
                      <tr>
                        <td>
                          {/*<Link className="btn btn-grey m-1"*/}
                          {/*<Link className="btn btn-secondary m-1"*/}
                          <Link className="btn btn-secondary m-1"
                                to={{
                                  pathname: `/edit/${vehicle.iid}`,
                                  columnHeadings: this.state.columnHeadings,
                                  vehicles: this.state.vehicles,
                                  originalVehicles: this.state.vehicles,
                                  editOrAdd: "edit",
                                  index: index,
                                  hasLoaded: false,
                                }}>
                            Edit
                          </Link>
                          <Button color="danger"
                                  className="m-1"
                              // onClick={this.delete(this, index)}>
                                  onClick={() => this.delete(this, index)}>
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
                            columnHeadings: this.state.columnHeadings,
                            vehicle: this.state.vehicles[0],
                            editOrAdd: "add",
                          }}>
                      Add
                    </Link>
                  </td>
                  {
                    [...Array(this.state.columnHeadings.length)].map(() =>
                        <td></td>
                    )
                  }
                </tr>

                </tbody>

              </Table>
            </div>

            {/*<label htmlFor="title">*/}
            {/*    {item[0].label}*/}
            {/*</label>*/}
            {/*<input type="text"*/}
            {/*       className="form-control"*/}
            {/*       name={item[0].field}*/}
            {/*       value={this.state.vehicle[item[0].field]}*/}
            {/*       onChange={this.onChange}*/}
            {/*       placeholder={item[1]}>*/}

            {/*<strong>{ this.state.vehicle.manufacturer }</strong> - { this.state.vehicle.model }*/}
            {/*ml = margin left*/}
            {/*mr = margin right*/}
            {/*mb = margin bottom*/}
            {/*mt = margin top*/}
            {/*<MDBBadge color="danger"*/}
            {/*          className="ml-2 float-right"*/}
            {/*          onClick={ () => this.props.onDelete( this.props.id ) }>*/}
            {/*    <MDBIcon icon="minus"/>*/}
            {/*</MDBBadge>*/}


            {/*<Link to={{*/}
            {/*    pathname: "/",*/}
            {/*    vehicle: this.state.vehicle,*/}
            {/*}}>*/}
            {/*    Home*/}
            {/*</Link>*/}


          </React.Fragment>
      )
    }
  }
}

export default App;


// iid: this.props.iid,
// model: this.props.model,
// manufacturer: this.props.manufacturer,
// odometer: this.props.odometer,
// requiresServicing: this.props.requiresServicing,
// dateManufactured: this.props.dateManufactured,
// datePurchased: this.props.datePurchased,
// dateLastServiced: this.props.dateLastServiced,
// kilometersSinceServiced: this.props.kilometersSinceServiced,
// kilometersPerService: this.props.kilometersPerService,
// fuelCapacity: this.props.fuelCapacity,
// fuelEconomy: this.props.fuelEconomy,
// weight: this.props.weight,
// VIN: this.props.VIN,
// registrationNumber: this.props.registrationNumber,

/*
<tr>
  {this.state.columnHeadings.map(temp =>
      <td>{temp.field}</td>
  )}
</tr>

{vehicle[index].map(vehicleData =>

{this.state.vehicles.map((vehicle, index) =>
    <tr>
      {[this.state.vehicles[1]].map(vehicleData =>
          <td>{vehicleData}</td>
      )}
    </tr>
)}
*/

// editDelete = (vehicle, index) => {
//   console.log(this.state.operation);
//   if (this.state.operation === "edit") {
//     console.log("Editting vehicle:", index);
//     console.log(vehicle);
//   }
//   if (this.state.operation === "delete") {
//     console.log("Deleting vehicle:", index);
//     console.log(vehicle);
//   }
// };

// add() {
//   console.log("adding vehicle")
// }
//
// edit = e => {
//   // console.log(e.state.operation);
//   e.this.setState({operation: "edit"})
// };

{/*<MDBBtn onClick={this.add}>*/
}
{/*  Add*/
}
{/*</MDBBtn>*/
}
{/*<MDBBtn onClick={this.edit}>*/
}
{/*<MDBBtn onClick={function () {*/
}
{/*  here.setState({operation: "edit"})*/
}
{/*}}>*/
}
{/*  Edit*/
}
{/*</MDBBtn>*/
}
{/*<MDBBtn onClick={this.delete}>*/
}
{/*    Delete*/
}
{/*</MDBBtn>*/
}


{/*<MDBBtn onClick={this.add}>*/
}
{/*  Add*/
}
{/*</MDBBtn>*/
}
{/*<MDBBtn onClick={this.edit}>*/
}
{/*<MDBBtn onClick={function () {*/
}
{/*  here.setState({operation: "edit"})*/
}
{/*}}>*/
}
{/*  Edit*/
}
{/*</MDBBtn>*/
}
{/*<MDBBtn onClick={this.delete}>*/
}
{/*    Delete*/
}
{/*</MDBBtn>*/
}

