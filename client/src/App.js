import React, { Component } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Post from './components/Post';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import EditorScreen from './screens/EditorScreen';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { apiresponse: "" }
  // }
  // callAPI() {
  //   fetch("http://localhost:5000/")
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiresponse: res }))
  // }
  // componentWillMount() {
  //   this.callAPI();
  // }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/:post_id' component={Post} />
            <Route path="/editor" component={EditorScreen} />
          </Switch>

          {/* <p>{this.state.apiresponse}</p> */}
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
