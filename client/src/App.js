import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Post from './components/Post';
import Startup from './components/Startup';
import Venturehack from './components/VentureHack';
import Industry from './components/Industry';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Form from './components/Form';
import AboutUs from './components/Aboutus';
import Dashboard from './components/dashboard';
import submitidea from './components/submitidea';
import Whatwedo from './components/Whatwedo';
import Privacy from './components/Privacy'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact activeClassBane="active" path='/' component={Home} />
            <Route path='/form' component={Form} />
            <Route path='/whatwedo' component={Whatwedo} />
            <Route path='/industry' component={Industry} />
            <Route path='/submitidea' component={submitidea} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path="/about" component={AboutUs} />
            <Route path="/privacy" component={Privacy} />
            <Route path='/startup' component={Startup} />
            <Route path='/venturehack' component={Venturehack} />
            <Route path='/industry' component={Industry} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
