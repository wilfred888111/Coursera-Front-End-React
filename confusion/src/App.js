import React, {Component} from 'react';
import Main from './component/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


// function App() {
class App extends Component {

  render() {
   return (
    <BrowserRouter>
      <div ClassName="App">
          <Main/>
      </div>
    </BrowserRouter>
   );
 };
}

export default App;
