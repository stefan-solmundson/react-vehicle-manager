// https://www.youtube.com/watch?v=3e1GHCA3GP0
// https://medium.com/@rossbulat/testing-in-react-with-jest-and-enzyme-an-introduction-99ce047dfcf8

import React from 'react';
import {render, cleanup} from '@testing-library/react';
import {MemoryRouter, Route} from 'react-router-dom';
// import {fakeAPI} from "../../setupTests";
// import {AddVehicle} from "./components/AddVehicle";
import '@testing-library/jest-dom/extend-expect'
// import {AppProvider} from "../../AppContext/AppContext";
import ReactDOM from 'react-dom';
import {App} from './App';
import renderer from "react-test-renderer";

import {localData as lData} from './LocalData';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

const tstate = lData;
let app = shallow(<App/>);
let appy = app.instance();

// beforeEach(() => {
//   // tstate = lData;
//   app = shallow(<App/>);
//   // appy.setState(tstate);
//   // console.log( "beforeEach" );
// });

// describe( 'Description of subtests', () => {
//   it( 'sums numbers', () => {
//     expect( 1 + 2 ).toEqual( 3 );
//     expect( 2 + 2 ).toEqual( 4 );
//   } );
// } );

// ---- State Modifying Tests

// addRecord
describe("checks addRecord() adds exactly 1 record.", () => {
  lData.pages.map((dataArrayName) => {
    it("adds the default record", () => {
      // console.log("appy.state[dataArrayName].length", appy.state[dataArrayName].length);
      let dataArrayLength1 = appy.state[dataArrayName].length;
      // expect(appy.state[dataArrayName]).toMatchSnapshot();
      appy.addRecord(
          appy.state[dataArrayName + "DefaultRecord"],
          (dataArrayName.substr(0, dataArrayName - 1) + "ID"),
          dataArrayName,
          null
      );
      // console.log("appy.state[dataArrayName].length", appy.state[dataArrayName].length);
      let dataArrayLength2 = appy.state[dataArrayName].length;
      expect(dataArrayLength2).toStrictEqual(dataArrayLength1 + 1);

      // WHY DOES REFRESHING THE APP ONLY WORK HERE INSIDE OF it() ???!!!
      // recreates the App instance "appy", THUS the constructor runs again the STATES are reset
      app = shallow(<App/>);
      appy = app.instance();
    });
  });
});

// deleteRecord
describe("checks deleteRecord() removes exactly 1 record.", () => {
  lData.pages.map((dataArrayName) => {
    it("deletes the first record", () => {
      // console.log("appy.state[dataArrayName].length", appy.state[dataArrayName].length);
      let dataArrayLength2 = appy.state[dataArrayName].length;
      appy.deleteRecord(
          appy.state[dataArrayName][0],
          (dataArrayName.substr(0, dataArrayName - 1) + "ID"),
          dataArrayName
      );
      // console.log("appy.state[dataArrayName].length", appy.state[dataArrayName].length);
      let dataArrayLength3 = appy.state[dataArrayName].length;
      expect(dataArrayLength3).toStrictEqual(dataArrayLength2 - 1);
      // console.log("appy.state[dataArrayName].length", appy.state[dataArrayName].length);

      // WHY DOES REFRESHING THE APP ONLY WORK HERE INSIDE OF it() ???!!!
      // recreates the App instance "appy", THUS the constructor runs again the STATES are reset
      app = shallow(<App/>);
      appy = app.instance();
    });
  });
});

// // editRecord
// describe("checks editRecord() can modify the record's vehicleID.", () => {
//   tstate.pages.map((dataArrayName) => {
//     it("changes the record's vehicleID to 'Test Vehicle ID'.", () => {
//       let _recordIdFieldName = dataArrayName.substr(0, dataArrayName.length - 1) + "ID";
//       let _record = appy.state[dataArrayName + "DefaultRecord"];
//       // expect(_record).toStrictEqual();
//       // vehicleID & _recordIdFieldName are REQUIRED, all other properties are made NULL
//       // vehicleID for updateOdometer(), which is inside of editRecord()
//       // _recordIdFieldName is require because this is a property in editRecord()
//       _record[_recordIdFieldName] = appy.state[dataArrayName][0][_recordIdFieldName];
//       _record.vehicleID = appy.state[dataArrayName][0].vehicleID;
//       Object.keys(_record).map(property => {
//         if (!(property === _recordIdFieldName || property === "vehicleID")) {
//           _record[property] = null;
//         }
//       });
//       // checks the first record of dataArrayName HAS NOT been changed yet
//       expect(appy.state[dataArrayName][0]).not.toStrictEqual(_record);
//       // console.log(_record);
//       // console.log(appy.state[dataArrayName][0]);
//       appy.editRecord(
//           _record,
//           _recordIdFieldName,
//           dataArrayName,
//           null
//       );
//       // checks the first record of dataArrayName HAS been changed yet
//       expect(appy.state[dataArrayName][0]).toStrictEqual(_record);
//
//       // DOESN'T WORK???
//       // WHY DOES REFRESHING THE APP ONLY WORK HERE INSIDE OF it() ???!!!
//       // recreates the App instance "appy", THUS the constructor runs again the STATES are reset
//       app = shallow(<App/>);
//       appy = app.instance();
//     });
//   });
// });

// sortArrayByField
describe("checks sortArrayByField correctly sorts.", () => {
  // tstate.contacts.map(contact => {
  it("sortArrayByField", () => {
    // console.log(appy.state.contacts);
    let failedOnce = false;
    let highestChar = "Z";
    appy.state.contacts.map((element, index) => {
      if (!(element.givenName[0] <= highestChar)) {
        failedOnce = true;
      }
      highestChar = element.givenName[0];
    });
    expect(failedOnce).toBeTruthy();
    //
    appy.sortArrayByField("contacts", "givenName", null);
    // appy.sortArrayByField("contacts", "familyName", null);
    //
    // console.log(appy.state.contacts);
    highestChar = "Z";
    appy.state.contacts.map((element, index) => {
      expect(element.givenName[0] <= highestChar).toBeTruthy();
      highestChar = element.givenName[0];
    });

    // DOESN'T WORK???
    // WHY DOES REFRESHING THE APP ONLY WORK HERE INSIDE OF it() ???!!!
    // recreates the App instance "appy", THUS the constructor runs again the STATES are reset
    app = shallow(<App/>);
    appy = app.instance();
  });
});

// searchArray
describe("checks searchArray() can find a contact.", () => {
  // tstate.contacts.map(contact => {
  it("searchArray", () => {
    // console.log(appy.state.contacts);
    expect(appy.state.contacts[0].givenName).not.toStrictEqual("Amy");
    appy.searchArray("contacts", "Amy");
    // console.log(appy.state.contacts);
    expect(appy.state.contacts[0].givenName).toStrictEqual("Amy");

    // DOESN'T WORK???
    // WHY DOES REFRESHING THE APP ONLY WORK HERE INSIDE OF it() ???!!!
    // recreates the App instance "appy", THUS the constructor runs again the STATES are reset
    app = shallow(<App/>);
    appy = app.instance();
  });
});

// ---- Some Notes

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
