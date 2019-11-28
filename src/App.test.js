// https://www.youtube.com/watch?v=3e1GHCA3GP0
// https://medium.com/@rossbulat/testing-in-react-with-jest-and-enzyme-an-introduction-99ce047dfcf8

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
// import {fakeAPI} from "../../setupTests";
// import {AddVehicle} from "./components/AddVehicle";
import '@testing-library/jest-dom/extend-expect'
// import {AppProvider} from "../../AppContext/AppContext";
import ReactDOM from 'react-dom';
// import ShowTables from './components/ShowTables';
import { App } from './App';
import renderer from "react-test-renderer";

import { localData } from './LocalData';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';

Enzyme.configure( { adapter: new Adapter() } );

let state = localData;
let app = shallow( <App/> );

// beforeEach( () => {
//   state = localData;
//   console.log( "beforeEach" );
// } );

describe( 'Description of subtests', () => {
  it( 'sums numbers', () => {
    expect( 1 + 2 ).toEqual( 3 );
    expect( 2 + 2 ).toEqual( 4 );
  } );
} );

describe( "checks totalDistance() calculates the correct distance for every vehicle:", () => {
  state.vehicles.map( ( vehicle, index ) => {
    it( "totalDistance for vehicle: " + index, () => {
      // console.log(typeof(app.instance().totalDistance(vehicle, state)));
      expect( typeof ( app.instance().totalDistance( vehicle ) ) ).toStrictEqual( "number" );
      expect( app.instance().totalDistance( vehicle ) ).toBeGreaterThanOrEqual( 0 );
      expect( app.instance().totalDistance( vehicle ) ).toMatchSnapshot();
    } );
  } );
} );

describe( 'Fuel efficiency of vehicles:', () => {
  state.vehicles.map( ( vehicle, index ) => {
    it( "Fuel efficiency of vehicle: " + index, () => {
      // console.log( app.instance().fuelEfficiency( vehicle ) );
      expect( typeof ( app.instance().totalDistance( vehicle ) ) ).toStrictEqual( "number" );
      expect( app.instance().totalDistance( vehicle ) ).toBeGreaterThanOrEqual( 0 );
      expect( app.instance().fuelEfficiency( vehicle ) ).toMatchSnapshot();
    } );
  } );
} );

// // https://www.youtube.com/watch?v=3e1GHCA3GP0
// // https://medium.com/@rossbulat/testing-in-react-with-jest-and-enzyme-an-introduction-99ce047dfcf8
//
//
// import React from 'react';
// import {render} from '@testing-library/react';
// import {MemoryRouter, Route} from 'react-router-dom';
// // import {fakeAPI} from "../../setupTests";
// // import {AddVehicle} from "./AddVehicle";
// import '@testing-library/jest-dom/extend-expect'
// // import {AppProvider} from "../../AppContext/AppContext";
//
//
// import ReactDOM from 'react-dom';
// import App from './App';
//
// import {render, cleanup } from "@testing-library/react";
// import "jest-dom/extend-expect";
//
// import renderer from "react=test=rendered";
//
// beforeEach(() => {
//   initialState = {};
//
//   tree = (
//       <MemoryRouter initialEntries={[`/`]}>
//         <App/>
//       </MemoryRouter>
//   )
// })
//
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<App/>, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });
//   //
//   // afterEach(cleanup);
//   //
//   // it("renders thing correctly", () => {
//   //   const {getByTestId} = render(<Button label="save"/>);
//   //   expect(getByTestId("button")).toHaveTextContent("save");
//   // });
//   //
//   // it("matches snapshot", () => {
//   //   renderer.create(<Button label="save"/>).toJSON();
//   //   expect(tree).toMatchSnapShot();
//   // });
//
// // ----
// // export const testTests = () => {
// //
// //   return(<>
// //   describe('Description of subtests', () => {
// //     it('sums numbers', () => {
// //       expect(1 + 2).toEqual(3);
// //       expect(2 + 2).toEqual(4);
// //     });
// //   })
// //     </>
// // )
// // };