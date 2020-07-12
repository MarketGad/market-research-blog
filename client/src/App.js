import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Startup from './components/Startup';
import Venturehack from './components/VentureHack';
import Industry from './components/Industry';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Form from './components/Form';
import AboutUs from './components/Aboutus';
import Dashboard from './components/dashboard';
import submitidea from './components/submitidea';
import Whatwedo from './components/Whatwedo';
import Privacy from './components/Privacy';
import I101 from './components/articles/101';
import I102 from './components/articles/102';
import I103 from './components/articles/103';
import I104 from './components/articles/104';
import I105 from './components/articles/105';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/form' component={Form} />
            <Route path='/whatwedo' component={Whatwedo} />
            <Route path='/industry' component={Industry} />
            <Route path='/submitidea' component={submitidea} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path="/about" component={AboutUs} />
            <Route path="/privacy" component={Privacy} />
            <Route path='/startup' component={Startup} />
            <Route path='/venturehack' component={Venturehack} />
            <Route path='/i101' component={I101} />
            <Route path='/i102' component={I102} />
            <Route path='/i103' component={I103} />
            <Route path='/i104' component={I104} />
            <Route path='/i105' component={I105} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
