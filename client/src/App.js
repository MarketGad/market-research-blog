import React, { useEffect } from 'react';
import ReactGa from 'react-ga';
import Navbar from './Components/Navbar';
import Home from './Screens/Home';
import Startup from './Screens/Startup';
import Venturehack from './Screens/VentureHack';
import Industry from './Screens/Industry';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Form from './Screens/Form';
import AboutUs from './Screens/Aboutus';
import Dashboard from './Screens/dashboard';
import submitidea from './Components/submitidea';
import Whatwedo from './Screens/Whatwedo';
import Privacy from './Screens/Privacy';
import SignUp from './Screens/signup';
import SignIn from './Screens/signin';
import Products from './Screens/Products';
import RegisterForJobs from './Screens/RegisterForJobs';
import I1001 from './Articles/industry/1001';
import I1002 from './Articles/industry/1002';
import I1003 from './Articles/industry/1003';
import I1004 from './Articles/industry/1004';
import I1005 from './Articles/industry/1005';
import I1006 from './Articles/industry/1006';
import I1007 from './Articles/industry/1007';
import S2001 from './Articles/startups/s2001';
import S2002 from './Articles/startups/s2002';
import S2003 from './Articles/startups/s2003';
import S2004 from './Articles/startups/s2004';
import S2005 from './Articles/startups/s2005';
import S2006 from './Articles/startups/s2006';
import S2007 from './Articles/startups/s2007';
import S2008 from './Articles/startups/s2008';
import v3001 from './Articles/venturehacks/v3001';
import v3002 from './Articles/venturehacks/v3002';
import v3003 from './Articles/venturehacks/v3003';
import v3004 from './Articles/venturehacks/v3004';
import RegisterForProduct from './Screens/RegisterForProduct';

function App () {
	useEffect(() => {
		ReactGa.initialize('UA-176059135-1');
		ReactGa.pageview(window.location.pathname + window.location.search);
	}, []);
	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/form' component={Form} />
					<Route exact path='/whatwedo' component={Whatwedo} />
					<Route exact path='/industry' component={Industry} />
					<Route exact path='/submitidea' component={submitidea} />
					<Route exact path='/dashboard' component={Dashboard} />
					<Route exact path='/about' component={AboutUs} />
					<Route exact path='/privacy' component={Privacy} />
					<Route exact path='/startup' component={Startup} />
					<Route exact path='/venturehack' component={Venturehack} />
					<Route exact path='/signup' component = {SignUp}/>
					<Route exact path='/signin' component = {SignIn}/>
					<Route exact path='/products' component={Products}/>
					<Route exact path='/registerforjobs' component={RegisterForJobs}/>
					<Route exact path='/registerforproduct' component={RegisterForProduct}/>
					<Route exact path='/i1001' component={I1001} />
					<Route exact path='/i1002' component={I1002} />
					<Route exact path='/i1003' component={I1003} />
					<Route exact path='/i1004' component={I1004} />
					<Route exact path='/i1005' component={I1005} />
					<Route exact path='/i1006' component={I1006} />
					<Route exact path='/i1007' component={I1007} />
					<Route exact path='/s2001' component={S2001} />
					<Route exact path='/s2002' component={S2002} />
					<Route exact path='/s2003' component={S2003} />
					<Route exact path='/s2004' component={S2004} />
					<Route exact path='/s2005' component={S2005} />
					<Route exact path='/s2006' component={S2006} />
					<Route exact path='/s2007' component={S2007} />
					<Route exact path='/s2008' component={S2008} />
					<Route exact path='/v3001' component={v3001} />
					<Route exact path='/v3002' component={v3002} />
					<Route exact path='/v3003' component={v3003} />
					<Route exact path='/v3004' component={v3004} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}
export default App;
