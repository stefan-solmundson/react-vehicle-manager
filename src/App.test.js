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
// import ShowTables from './components/ShowTables';
import App from './App';
import renderer from "react-test-renderer";

let tree, page = "vehicles";

// beforeEach(() => {
//   tree = (
//       <MemoryRouter initialEntries={[`/${page}/`]}>
//         <Route
//             // path={["/edit/:vehicleID", "/add/"]}
//             exact path={`/${page}/`}
//             render={
//               props =>
//                   <ShowTables
//                       {...props}
//                       columnHeadings={this.state[`${page}Headings`]}
//                       data={this.state[page]}
//                       dataArrayName={page}
//                       recordIdFieldName={page.substring(0, page.length - 1) + "ID"} // the UNIQUE ID Field for the record's type
//                       deleteRecord={this.deleteRecord}
//                   />
//             }
//         />
//       </MemoryRouter>
//   );
//
//   {/*{this.state.pages.map(page =>*/}
//   {/*    <Route*/}
//   {/*        // path={["/edit/:vehicleID", "/add/"]}*/}
//   {/*        exact path={`/${page}/`}*/}
//   {/*        render={*/}
//   {/*          props =>*/}
//   {/*              <ShowTables*/}
//   {/*                  {...props}*/}
//   {/*                  columnHeadings={this.state[`${page}Headings`]}*/}
//   {/*                  data={this.state[page]}*/}
//   {/*                  dataArrayName={page}*/}
//   {/*                  recordIdFieldName={page.substring(0, page.length - 1) + "ID"} // the UNIQUE ID Field for the record's type*/}
//   {/*                  deleteRecord={this.deleteRecord}*/}
//   {/*              />*/}
//   {/*        }*/}
//   {/*    />*/}
//   {/*)}*/}
//
//
// });

// describe("lfkdjas", () => {
//   it('renders without crashing', () => {
//     // render()
//   });
// });

// describe("lfkdjas", () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<ShowTables/>, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });
// });

describe('Description of subtests', () => {
  it('sums numbers', () => {
    expect(1 + 2).toEqual(3);
    expect(2 + 2).toEqual(4);
  });
});








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