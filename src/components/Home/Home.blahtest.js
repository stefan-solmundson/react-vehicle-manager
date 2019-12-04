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
// import Home from './Home';
//
// import {render, cleanup } from "@testing-library/react";
// import "jest-dom/extend-expect";
//
// import renderer from "react=test=rendered";
//
// beforeEach(() => {
//   // initialState = {};
//   //
//   // tree = (
//   //     <MemoryRouter initialEntries={[`/`]}>
//   //       <Home/>
//   //     </MemoryRouter>
//   // )
//
//
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Home/>, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });
// });
//
// //
// // afterEach(cleanup);
// //
// // it("renders thing correctly", () => {
// //   const {getByTestId} = render(<Button label="save"/>);
// //   expect(getByTestId("button")).toHaveTextContent("save");
// // });
// //
// // it("matches snapshot", () => {
// //   renderer.create(<Button label="save"/>).toJSON();
// //   expect(tree).toMatchSnapShot();
// // });
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