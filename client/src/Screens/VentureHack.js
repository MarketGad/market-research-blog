import React from 'react';
import Footer from '../Components/Footer';

const VentureHack = () => {
	const articles = [
		{
			postName: 'Tradohub: Bootstrapped To Build The Largest SME Ecosystem',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1594928729/Articles%20Photos/VentureHack/SME-social_fshval.jpg',
			key: '1',
			postBrief:
				'The company has targeted to increase its turnover over 20 fold to $1 billion from existing Rs 330 crore in the next five years by 2025...',
			postLink: '/v3001'
		},
		{
			postName: 'First Indian Handcrafted Beer- Bira91',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1595775393/Articles%20Photos/VentureHack/First%20Indian%20Handcrafted%20Beer%20Bira91/Slide6_fwxubr.jpg',
			key: '2',
			postBrief:
				'Bira91 is founded by Ankur Jain, a Computer Science graduate from University of Chicago, who previously had a healthcare startup in New York. There he came across the concept of craft beers, originated in the European countries. Subsequently, he started a company called Cerana Beverages in 2009',
			postLink: '/v3002'
		},
		{
			postName: 'Unacademy, India’s largest EdTech Company',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1595775916/Articles%20Photos/VentureHack/Unacademy/Slide1_vdxojs.jpg',
			key: '3',
			postBrief:
				'Unacademy was founded by Gaurav Munjal in 2010, who was later on accompanied by Hemesh Singh and Roman Saini. Gaurav Munjal started his Unacademy journey way before the other two. He started the YouTube channel named Unacademy.',
			postLink: '/v3003'
		},
		{
			postName: '12 Steps to Start a Successful Business/Startup',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1594928817/Articles%20Photos/VentureHack/startuptop_kzuhdz.jpg',
			key: '4',
			postBrief:
				' Bypassing some steps or thinking that one or more of the 12 steps below might not apply to your startup is how many companies failed or invested resources they didn’t need to move forward.Identify in which step you are and continue down the path without overlooking any of the steps.',
			postLink: '/v3004'
		},
		{
			postName: 'DESIGNING A BUSINESS MODEL CANVAS',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1601711487/Articles%20Photos/VentureHack/1_gr9tkq.jpg',
			key: '5',
			postBrief:
				'The Business Model Canvas is a project strategy framework for the implementation of new business models or for documenting the existing ones. It is a visual chart with elements which represent the clients, value proposition, finances and infrastructure of a business or product.',
			postLink: '/v3005'
		}
	];
	const showArticles = articles.length ? (
		articles.map((article) => {
			return (
				<div className='card'>
					<div className='card-content'>
						<div className='row'>
							<div className='col l9 s12'>
								<img pos className='post-image' src={article.postImage} alt='1st' />
							</div>
							<div className='col s12 l3'>
								<h3 className='landing-post-head'>{article.postName}</h3>
								<p className='post-brief'>{article.postBrief}</p>
								<div className='center'>
									<a href={article.postLink} className='btn waves-effect waves-light read-more'>
										Read More
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		})
	) : (
		<div className='center'>No articles to show :(</div>
	);

	return (
		<div>
			<div className='container'>
				<h4 className='center landing-head'>Venture Hack</h4>
			</div>
			<div className='row post-container'>
				<div className='col s12'>{showArticles}</div>
			</div>
			<Footer />
		</div>
	);
};

export default VentureHack;
