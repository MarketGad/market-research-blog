import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import EditorScreen from './screens/EditorScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiresponse: "" }
  }
  callAPI() {
    fetch("http://localhost:5000/")
      .then(res => res.text())
      .then(res => this.setState({ apiresponse: res }))
  }
  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Hello World from App.js</h1>
          <Route path="/editor" component={ EditorScreen } />
          <p>{this.state.apiresponse}</p>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
