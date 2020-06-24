import React, { Component } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Post from './components/Post';
import Social from './components/SocialEntrep';
import Tech from './components/Technology';
import Venture from './components/VentureHack';
import Startup from './components/Startup';
import Industry from './components/Industry';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import EditorScreen from './components/EditorScreen/EditorScreen';
import './components/EditorScreen/EditorScreen.css';

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
            <Route exact activeClassBane="active" path='/' component={Home} />
            <Route path='/editor' component={EditorScreen} />
            <Route path='/about' component={About} />
            <Route path='/startup' component={Startup} />
            <Route path='/tech' component={Tech} />
            <Route path='/venture' component={Venture} />
            <Route path='/industry' component={Industry} />
            <Route path='/social' component={Social} />
            <Route path='/:post_id' component={Post} />
          </Switch>
          {/* <p>{this.state.apiresponse}</p> */}
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
