import React from 'react';

const FeaturedResearch = () => {
	const articles = [
		{
			postName: 'Data driven Business Decisions',
			postImage:
				'https://cdn.datafloq.com/cache/blog_images/878x531/data-quality-data-driven-business-decisions.jpg',
			key: '1',
			authorLink: 'https://www.linkedin.com/in/shankh0407',
			authorName: 'Shankhadeep Banerjee',
			postBrief:
				'Companies are nowadays focusing on providing tailored products and services in order to remain competitive in the market. The problems faced by them is mostly because of uncertainty of product and service failures in the market. So, the need for data-based solutions are to be incorporated...',
			postLink: 'https://drive.google.com/file/d/1l3pzZAZbP0_-Gnf8wqKqxfekRkxBKhBa/view?usp=sharing'
		},
		{
			postName: 'Logistics Sector in India',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1594916046/Articles%20Photos/Industry/Logistic%20Sector%20of%20India/1-min_ft40ju.jpg',
			key: '2',
			authorLink: 'https://www.linkedin.com/in/bisleshana-brahma-prakash/',
			authorName: 'Bisleshana B Prakash',
			postBrief:
				"India's logistics cost is estimated to be 13-14 % of GDP. In contrast,in developed economies like Germany, Sweden, Belgium, Austria, Japan and the USA, the cost varies between 9-10%. This article by Bisleshana(IIMI) give you a thorough study of India's Logistic Sector...",
			postLink: '/i1001'
		},
		{
			postName: 'Indian Healthcare Industry',
			postImage:
				'https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
			key: '3',
			authorLink: 'https://www.linkedin.com/in/shankh0407',
			authorName: 'Shankhadeep Banerjee',
			postBrief:
				'The Indian Healthcare sector stands as the world’s fourth-largest employer. The country employs over 3,20,000 people all around the country, which is also estimated to cross a valuation of 40 million by the end of 2020. Gloablly it is one of the fastest growing...',
			postLink: 'https://drive.google.com/file/d/1jGBTzrtWh8Bv6sVXHG_yMk0RJtn9Pzry/view?usp=sharing'
		},
		{
			postName: 'Impact Of Covid-19 On Logistics Sector In India',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1597767818/Articles%20Photos/Industry/Logistics%20Sector%20Of%20India%20Part%20II/2_2_mys3kv.jpg',
			key: '4',
			postBrief:
				'Since   the   3rd   quarter   of   2019,   the   Indian   economy   is   facing   turbulences   due   to   falling manufacturing/industrial   production,   especially   in   auto   and   ancillary   sector,   rising   non-performing assets (NPAs) among banks and rising unemployment',
			postLink: '/i1007'
		},
		{
			postName: 'Opportunities In Warehousing Technologies In India',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1599417289/Articles%20Photos/Industry/Warehousing%20Technologies/1_xob8wh.jpg',
			key: '5',
			postBrief:
				'Earlier the Indian warehousing industry, which was dominated by unorganised players,is slowly see increased participation from organised players.',
			postLink: '/i1008'
		}
	];

	const showArticles = articles.length ? (
		articles.map((article) => {
			if (article.key % 2 === 1) {
				return (
					<div className='row card-h'>
						<div className='col l5 s12'>
							<img className='featuredimg' src={article.postImage} alt='1st' />
						</div>
						<div className='col l7 s12 featured-right'>
							<div className='featuredName'>{article.postName}</div>
							<div className='featured-brief'>{article.postBrief}</div>
							<div className='featuredDetails'>
								<a
									style={{ color: '#080808d9' }}
									href={article.postLink}
									target='_blank'
									rel='noopener noreferrer'
								>
									<span className='detail-hover'>Details</span>
									<i
										style={{
											top: '4px',
											position: 'relative'
										}}
										class='material-icons'
									>
										keyboard_arrow_right
									</i>
								</a>
							</div>
						</div>
					</div>
				);
			} else {
				return (
					<div className='row card-h'>
						<div className='col l5 s12 featured-mobile'>
							<img className='featuredimg' src={article.postImage} alt='1st' />
						</div>
						<div className='col l7 s12 featured-right'>
							<div className='featuredName'>{article.postName}</div>
							<div className='featured-brief'>{article.postBrief}</div>
							<div className='featuredDetails'>
								<a
									style={{ color: '#080808d9' }}
									href={article.postLink}
									target='_blank'
									rel='noopener noreferrer'
								>
									<span className='detail-hover'>Details</span>
									<i
										style={{
											top: '4px',
											position: 'relative'
										}}
										class='material-icons'
									>
										keyboard_arrow_right
									</i>
								</a>
							</div>
						</div>
						<div className='col l5 s12 featured-desktop'>
							<img className='featuredimg' src={article.postImage} alt='1st' />
						</div>
					</div>
				);
			}
		})
	) : (
		<div className='center'>No articles to show :(</div>
	);

	return (
		<div className='featured-container'>
			<h3 className='center offeringhead'>Featured Research</h3>
			<div>{showArticles}</div>
		</div>
	);
};

export default FeaturedResearch;
