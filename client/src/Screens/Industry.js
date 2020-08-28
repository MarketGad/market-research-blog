import React from 'react';
import Footer from '../Components/Footer';

const Industry = () => {
	const articles = [
		{
			postName: 'Logistics Sector In India',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1594916046/Articles%20Photos/Industry/Logistic%20Sector%20of%20India/1-min_ft40ju.jpg',
			key: '1',
			postBrief:
				"India's logistics cost is estimated to be 13-14 % of GDP. In contrast,in developed economies like Germany, Sweden, Belgium, Austria, Japan and the USA, the cost varies between 9-10%. This article by Bisleshana(IIMI) give you a thorough study of India's Logistic Sector.",
			postLink: '/i1001'
		},
		{
			postName: 'Reverse Logistics',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1594917488/Articles%20Photos/Industry/Reverse%20Logistic/2_k8fndm.jpg',
			key: '2',
			postBrief:
				'The idea of recapturing value is the soul of this concept of reverse logistics. The value can be regained through reparation or refurbishment when returned to the market place, components from product returns can be reused as refurbished components or as spare parts',
			postLink: '/i1002'
		},
		{
			postName: 'Data Website',
			postImage:
				'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80',
			key: '3',
			postBrief:
				'Given the present market scenario, India stands at a very competitive position in the field. It is among the Top 10 countries dealing with big data. India has more than 600 firms among which 50% being startups provides the country an edge over others. India is expected to grow as a hub for analytical solutions across continents.',
			postLink: '/i1003'
		},
		{
			postName: 'FinTech Apps',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1594919224/Articles%20Photos/Industry/FinTech/2_2_-min_whkytt.jpg',
			key: '4',
			postBrief:
				"India ranks amongst the world's fastest growing FinTech markets. India rated FinTech's adoption rate, with China, at the top in the world. A 20 per cent CAGR is expected to increase the volume of digital payments by $65 billion by 2023 in 2019.",
			postLink: '/i1004'
		},
		{
			postName: 'Education Industry and Covid-19',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1594921120/Articles%20Photos/Industry/Covid19%20on%20Education%20Industry/2_3_-min_squcan.jpg',
			key: '5',
			postBrief:
				'Instead of shutting schools in at least 188 countries, over 91 per cent of children around the world are now out of school. The education sector faces unparalleled challenges and needs to change to keep children engaged and, on their way, to learning and find solutions.',
			postLink: '/i1005'
		},
		{
			postName: '12 Steps to Start a Successful Business',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1595774051/Articles%20Photos/Industry/12%20Steps%20to%20Start%20a%20Successful%20Business%20Startup/1_cubx34.jpg',
			key: '6',
			postBrief:
				'Bypassing some steps or thinking that one or more of the 12 steps below might not apply to your startup is how many companies failed or invested resources they didn’t need to move forward.',
			postLink: '/i1006'
		},
		{
			postName: 'Part II: Impact Of Covid-19 On Logistics Sector In India',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1597767828/Articles%20Photos/Industry/Logistics%20Sector%20Of%20India%20Part%20II/1_1_nybaqx.jpg',
			key: '7',
			postBrief:
				'Since   the   3rd   quarter   of   2019,   the   Indian   economy   is   facing   turbulences   due   to   fallingmanufacturing/industrial   production,   especially   in   auto   and   ancillary   sector,   rising   non-performing assets (NPAs) among banks and rising unemployment',
			postLink: '/i1007'
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
								<h5 className='landing-post-head'> {article.postName} </h5> {' '}
								<p className='post-brief'> {article.postBrief} </p> {' '}
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
		<div className='center'> No articles to show: ( </div>
	);

	return (
		<div>
			<div className='container'>
				<h4 className='center landing-head'> Industry </h4>
			</div>
			<div className='row post-container'>
				<div className='col s12'> {showArticles} </div>
			</div>
			<Footer />
		</div>
	);
};

export default Industry;
