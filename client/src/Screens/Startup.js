import React from 'react';
import Footer from '../Components/Footer';

const Startup = () => {
	const articles = [
		/*{
            "postName": "5G: Connecting Everything",
            "postImage": 'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1595777457/Articles%20Photos/Startup/5G/5g1_gdjad9.jpg',
            "key": '1',
            "postBrief": "We all know that 5G is coming in networking & everything will be change.But what exactly 5G is? 5G was first introduce by South Korea on 1st Dec 2018 & this is really a huge achievement since first cell phone was introduce in 1973.",
            "postLink": "/s2001"
        },*/
		{
			postName: 'Adani Group’s Solar Project',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1595777722/Articles%20Photos/Startup/Adani/Adani1_zy6qof.jpg',
			key: '2',
			postBrief:
				'In the year 1988, Gautam Shantilal Adani started to build an empire. But little did this emperor know that in the next 32 years he was going to create a realm having a market cap of $22 billion,the Adani Group.',
			postLink: '/s2002'
		},
		{
			postName: 'Scope of Augmented Reality',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1595777949/Articles%20Photos/Startup/Augmented%20Reality/augmented1_ullprp.jpg',
			key: '3',
			postBrief:
				'Augmented Reality (AR), a technology which developed with the advances of hardware and software, is proving itself to be the real game-changer of the 21st century.',
			postLink: '/s2003'
		},
		{
			postName: 'WeWork',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1595778128/Articles%20Photos/Startup/WeWork/2_1_nrzq86.jpg',
			key: '4',
			postBrief:
				'Established in the year 2010, WeWork is a private real estate company that provides co-working spaces to individuals and enterprises. The company was founded by Adam Neumann, Miguel McKelvey and Rebekah Neumann. Before establishing WeWork, Neumann and Mckelvey had started “Greendesk” another co-working space, in 2008 which was more eco-friendly.',
			postLink: '/s2004'
		},
		{
			postName: 'BlockChain Application',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1594923614/Articles%20Photos/Startup/Blockchain-in-Healthcare-GetReferd_vlenfv.png',
			key: '5',
			postBrief:
				'Blockchain over recent years has been extolled as a revolution in business technology. In the nine years since its launch, companies, regulators, and financial technologists have spent countless hours exploring its potential. The resulting innovations have started to reshape business processes, particularly in accounting and transactions.',
			postLink: '/s2005'
		},
		{
			postName: 'Market Revolution 4.0',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1594924529/Articles%20Photos/Startup/industry-4.0_xsubx1.jpg',
			key: '6',
			postBrief:
				'The standout feature of industrial revolution 4.0 is the fusion of technologies which saves time , increases overall efficiency, and reduces errors. In general, there are nine key components of technology that constitute the Industry 4.0...',
			postLink: '/s2006'
		},
		{
			postName: 'Future Of AI In Post Covid Era',
			postImage:
				'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1594925311/Articles%20Photos/Startup/AI_ddhthi.jpg',
			key: '7',
			postBrief:
				'AI based startups till 2021, could see an increase of 13%. In the year 2022,there would be an increase of 16%, in the year 2023, it would go up to 20%, in the year 2024, we could see a rise of 23%, and in the year 2025, the increase percent would be 28%...',
			postLink: '/s2007'
		},
		{
			postName: 'Future Of Aviation, Travel And Tourism',
			postImage:
				'https://images.unsplash.com/photo-1521727857535-28d2047314ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
			key: '8',
			postBrief:
				' Aviation plays a vital role in travel and tourism. Almost 52% of the International Tourists travel by Aircrafts. In many developing countries, Tourism plays a vital role in the development of the economy.',
			postLink: '/s2008'
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
				<h4 className='center landing-head'>Start-ups</h4>
			</div>
			<div className='row post-container'>
				<div className='col s12'>{showArticles}</div>
			</div>
			<Footer />
		</div>
	);
};

export default Startup;
