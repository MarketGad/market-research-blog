import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Screens/Home';
import Startup from './Screens/Startup';
import Venturehack from './Screens/VentureHack';
import Industry from './Screens/Industry';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Form from './Screens/Form';
import AboutUs from './Screens/Aboutus';
import Dashboard from './Screens/dashboard';
import submitidea from './Components/submitidea';
import Whatwedo from './Screens/Whatwedo';
import Privacy from './Screens/Privacy';
// import SignUp from './Screens/signup';
// import SignIn from './Screens/signin';
import MyProfile from './Screens/MyProfile';
import Products from './Screens/Products';
import Jobs from './Screens/Jobs';
import CommunityForm from './Screens/CommunityForm';
import JobForm from './Screens/JobForm';
import RegisterForJobs from './Screens/RegisterForJobs';
import I1001 from './Articles/industry/1001';
import I1002 from './Articles/industry/1002';
import I1003 from './Articles/industry/1003';
import I1004 from './Articles/industry/1004';
import I1005 from './Articles/industry/1005';
import I1006 from './Articles/industry/1006';
import I1007 from './Articles/industry/1007';
import I1008 from './Articles/industry/1008';
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
import v3005 from './Articles/venturehacks/v3005';
import RegisterForProduct from './Screens/RegisterForProduct';
import ProductProfile from './Screens/ProductProfile';
import JobProfile from './Screens/JobProfile';
// import VerifyOtp from './Screens/VerifyOtp';
import Discounts from './Screens/Discounts';
import Community from './Screens/Community';

import { connect } from 'react-redux';
import {
	fetchProducts,
	fetchJobProfiles,
	fetchTodayLaunch,
	fetchTrendingProducts,
	fetchJobs,
	fetchInternships,
	fetchCommunityPosts
} from './redux/ActionCreator';

const mapStateToProps = (state) => {
	return {
		products: state.products,
		jobProfiles: state.jobProfiles,
		todayLaunch: state.todayLaunch,
		trending: state.trending,
		jobs: state.jobs,
		internship: state.internship,
		posts: state.posts
	};
};

const mapDispatchToProps = (dispatch) => ({
	fetchProducts: () => {
		dispatch(fetchProducts());
	},
	fetchJobProfiles: () => {
		dispatch(fetchJobProfiles());
	},
	fetchTodayLaunch: () => {
		dispatch(fetchTodayLaunch());
	},
	fetchTrendingProducts: () => {
		dispatch(fetchTrendingProducts());
	},
	fetchJobs: () => {
		dispatch(fetchJobs());
	},
	fetchInternships: () => {
		dispatch(fetchInternships());
	},
	fetchCommunityPosts: () => {
		dispatch(fetchCommunityPosts());
	}
});

class MainApp extends React.Component {
	componentDidMount = async () => {
		console.log('Mounted Main');
		await this.props.fetchProducts();
		await this.props.fetchJobProfiles();
		await this.props.fetchTodayLaunch();
		await this.props.fetchTrendingProducts();
		await this.props.fetchJobs();
		await this.props.fetchInternships();
		await this.props.fetchCommunityPosts();
	};
	render () {
		return (
			<div className='App'>
				<Navbar />
				<Switch>
					<Route
						exact
						path='/'
						component={() => (
							<Products
								products={this.props.products.products}
								jobProfiles={this.props.jobProfiles.jobProfiles}
								todayLaunch={this.props.todayLaunch.todayLaunch}
								trending={this.props.trending.trending}
							/>
						)}
					/>
					<Route exact path='/form' component={Form} />
					<Route exact path='/whatwedo' component={Whatwedo} />
					<Route exact path='/industry' component={Industry} />
					<Route exact path='/submitidea' component={submitidea} />
					<Route exact path='/dashboard' component={Dashboard} />
					<Route exact path='/about' component={AboutUs} />
					<Route exact path='/privacy' component={Privacy} />
					<Route exact path='/startup' component={Startup} />
					<Route exact path='/venturehack' component={Venturehack} />
					{/* <Route exact path='/signup' component={SignUp} />
					<Route exact path='/signin' component={SignIn} /> */}
					<Route exact path='/funding' component={Home} />
					<Route
						exact
						path='/jobs'
						component={() => (
							<Jobs
								jobProfiles={this.props.jobProfiles.jobProfiles}
								jobs={this.props.jobs.jobs}
								internship={this.props.internship.internship}
							/>
						)}
					/>
					<Route
						exact
						path='/community'
						component={() => (
							<Community
								jobProfiles={this.props.jobProfiles.jobProfiles}
								posts={this.props.posts.posts}
							/>
						)}
					/>
					<Route exact path='/profile' component={MyProfile} />
					<Route exact path='/addjobs' component={JobForm} />
					<Route exact path='/addtrend' component={CommunityForm} />
					<Route exact path='/discounts' component={Discounts} />
					<Route exact path='/registerforjobs' component={RegisterForJobs} />
					<Route exact path='/registerforproduct' component={RegisterForProduct} />
					<Route exact path='/i1001' component={I1001} />
					<Route exact path='/i1002' component={I1002} />
					<Route exact path='/i1003' component={I1003} />
					<Route exact path='/i1004' component={I1004} />
					<Route exact path='/i1005' component={I1005} />
					<Route exact path='/i1006' component={I1006} />
					<Route exact path='/i1007' component={I1007} />
					<Route exact path='/i1008' component={I1008} />
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
					<Route exact path='/v3005' component={v3005} />
					{/* <Route exact path='/verifyotp' component={VerifyOtp} /> */}
					<Route
						exact
						path='/products/:product_id'
						render={(props) => <ProductProfile {...props} products={this.props.products.products} />}
					/>
					<Route
						exact
						path='/jobprofile/:job_id'
						render={(props) => <JobProfile {...props} jobProfiles={this.props.jobProfiles.jobProfiles} />}
					/>
					<Redirect to='/' />
				</Switch>
			</div>
		);
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainApp));
