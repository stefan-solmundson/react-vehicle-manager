import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// from https://mdbootstrap.com/docs/react/getting-started/quick-start/
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//
import EditAdd from './components/EditAdd/EditAdd';
import SelectEdit from './components/Search';
// import Create from './Components/Create';
// import Show from './Components/Show';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={ App }/>
      <Route exact path="/edit/" component={ SelectEdit }/>
      <Route path="/edit/:iid" component={ EditAdd }/>
      <Route exact path="/add/" component={ EditAdd }/>
      {/*<Route path="/create" component={ Create }/>*/}
      {/*<Route path="/show/:id" component={ Show }/>*/}
    </div>
  </Router>
  , document.getElementById('root')
);


// function retrieve(a,b,c) {
//   if (a) {
//     console.log(`retrieve() received parameter 1, it was ${a}`)
//   } else {
//     console.log(`retrieve() didn't receive parameter 1`)
//   }
//   if (b) {
//     console.log(`retrieve() received parameter 2, it was ${b}`)
//   } else {
//     console.log(`retrieve() didn't receive parameter 2`)
//   }
// }
//
// retrieve('One', 'Two', function(err, data, response) {
//   if(!err){
//     // This is where the magic will happen
//   } else {
//     console.log(err);
//   }
// });


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
