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
import industry1001 from './components/articles/industry/industry1001';
import industry1002 from './components/articles/industry/industry1002';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/i1001' component={industry1001} />
            <Route exact path='/i1002' component={industry1002} />
            <Route exact path='/form' component={Form} />
            <Route exact path='/whatwedo' component={Whatwedo} />
            <Route exact path='/industry' component={Industry} />
            <Route exact path='/submitidea' component={submitidea} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path='/startup' component={Startup} />
            <Route exact path='/venturehack' component={Venturehack} />
            <Route exact path='/i101' component={I101} />
            <Route exact path='/i102' component={I102} />
            <Route exact path='/i103' component={I103} />
            <Route exact path='/i104' component={I104} />
            <Route exact path='/i105' component={I105} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
