import React, { Component } from 'react';
import Navbar from './components/Navbar';
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
import Form from './components/Form';
import AllImages from './components/AllImages';
import ArticlePage from './components/Readonly/readonlyEditor';
import AboutUs from './components/Aboutus';
import Dashboard from './components/dashboard';
import submitidea from './components/submitidea';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact activeClassBane="active" path='/' component={Home} />
            <Route path='/form' component={Form} />
            <Route path='/articlepage' component={ArticlePage} />
            <Route path='/submitidea' component={submitidea} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path="/about" component={AboutUs} />
            <Route path='/images' component={AllImages} />
            <Route path='/editor' component={EditorScreen} />
            <Route path='/startup' component={Startup} />
            <Route path='/tech' component={Tech} />
            <Route path='/venture' component={Venture} />
            <Route path='/industry' component={Industry} />
            <Route path='/social' component={Social} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
