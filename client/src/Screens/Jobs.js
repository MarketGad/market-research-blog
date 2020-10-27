import { Grid, MenuItem, TextField } from '@material-ui/core';
import { Height } from '@material-ui/icons';
import React from 'react';
import Internshiplist from '../Components/internshiplist';
import Joblist from '../Components/Joblist';
import PeopleList from '../Components/PeopleList';
const industries = [
	{
		value: '',
		label: 'All'
	},
	{
		value: 'Software',
		label: 'Software'
	},
	{
		value: 'Operations',
		label: 'Operations'
	},
	{
		value: 'Marketing',
		label: 'Marketing'
	},
	{
		value: 'Finance',
		label: 'Finance'
	},
	{
		value: 'Engineering',
		label: 'Engineering'
	},
	{
		value: 'Product',
		label: 'Product'
	},
	{
		value: 'Other',
		label: 'Other'
	}
];
const ListProduct = (props) => {
	const [ filter, setFilter ] = React.useState('');
	return (
		<div>
			<div>
				<img
					src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603704567/Theme/Photo_vjcaum.jpg'
					width='100%'
				/>
			</div>
			<div className='product-job-page-container'>
				<div className='row'>
					<div className='col s12 l8'>
						<Grid container spacing={3} className='job-page-head'>
							<Grid item sm={6} xs={6}>
								<div>Trending jobs</div>
							</Grid>
							<Grid item sm={6} xs={6} className='right-align'>
								<TextField
									className='filter-field'
									select
									label='Filter'
									value={filter}
									variant='outlined'
									onChange={(e) => setFilter(e.target.value)}
								>
									{industries.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
							</Grid>
						</Grid>

						<Joblist jobs={props.jobs} filter={filter} />
						<div className='product-page-head'>Internships</div>
						<Internshiplist internship={props.internship} />
					</div>
					<div className='col s12 l4'>
						<div className='row' style={{ margin: '0', padding: '0' }}>
							<div className='col s12 m8'>
								<div className='job-page-head'>Trending talents</div>
								<h6 className='product-quote'>Open for opportunities</h6>
							</div>
							<div className='col s4'>
								<div className='right-align'>
									<a
										className='waves-effect waves-light btn-small pro-btn1 add-mobile-btn'
										href='/registerforjobs'
									>
										Add profile
									</a>
								</div>
							</div>
						</div>
						<PeopleList jobProfiles={props.jobProfiles === undefined ? [] : props.jobProfiles} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default ListProduct;
