import React from 'react';
import Footer from '../Components/Footer';

const Aboutus = () => {
	return (
		<div>
			<div>
				<div className='container' style={{ fontSize: '12px', textAlign: 'justify' }}>
					<h3 className='article-head center' style={{ fontWeight: '800' }}>
						ABOUT US
					</h3>
					<div className='about-subhead'>India’s First Product Launch Platform</div>
					<div className='aboutus-bold'>
						MarketGad is India’s first and foremost product launch platform. It is the go to destination for
						technology startups to launch their products for end consumers to review them first hand.
					</div>
					<div className='about-subhead'>Work for what you are passionate about</div>
					<div className='aboutus-bold'>
						Have you ever wondered how much a company can benefit from your honest feedback and deep
						understanding of their products?
					</div>
					<div className='aboutus'>
						We at MarketGad understand your potential and are providing you a unique platform to showcase
						your knowledge and opinions about the companies’ services.
					</div>
					<div className='aboutus-bold'>
						At MarketGad, all you have to do is just sign up with your email and a whole new world of
						opportunities awaits you!
					</div>
					<div className='aboutus'>
						We have exclusive product launches on our platform for you where you can openly review the
						products. We have a reward scheme for our passionate users. You can earn 1 point by liking the
						product and earn 4 points by commenting about the service. The users who engage the most will
						automatically show up at the top and would be visible to the companies who can check your skills
						and background to give you gig-based project works and can even hire you for a full time
						opportunity!
					</div>
					<div className='aboutus-bold'>
						We at MarketGad are committed for providing value to our community users in return for their
						time and efforts for giving honest feedback to the companies.
					</div>
					<div className='about-subhead'>Get early traction for your startup</div>
					<div className='aboutus-bold'>
						We provide exclusive services to companies through extensive consumer feedback which not only
						highlights the areas of improvement for the companies but helps them understand the consumer
						behavior and preference better.
					</div>
					<div className='aboutus'>
						It is a great platform for companies and startups to launch their products and services. For
						startups, it gives them a unique opportunity to market themselves and channelize the traffic to
						their own websites. The strong user reviews would help in leveraging the brand’s positive
						perception. We will feature the ‘hot’ products which can prove out to be a wild card for
						startups to increase their outreach exponentially. <br />
						In addition to marketing and consumer feedback, we bring to you a pool of potential employees
						who can spice up the game for your venture. On our platform, we have a community of people who
						are passionate about their expertise. Companies can benefit from their deep understanding of
						products and their skill set.
					</div>
					<div className='aboutus'>
						<b>
							We at MarketGad are here to revolutionize the way how end consumers interact with companies.
						</b>
						The platform provides an excellent opportunity for companies to market themselves, learn about
						the consumer’s needs and even acquire talent from our wide pool of technology and business
						enthusiasts.
					</div>
					<div className='about-subhead'>Research and Investment</div>

					<div className='aboutus-bold'>
						59% of start-ups fail because they create something that isn’t required at the first place. We
						validate your ideas and products with market research
					</div>
					<div className='aboutus'>
						As per our primary research, 59% of start-ups fail due to lack of market analysis. We are a
						group of people at MarketGad, from various technology and business backgrounds, taking an
						initiative to transform the start-up ecosystem of India by de-risking entrepreneurship. On our
						mission, we are building a platform where the aspiring entrepreneurs can meet enthusiastic
						researchers, who can help them understand and prepare strategies for the venture plan
						accordingly. We believe in creating a dent in the current unemployment scenario of India by not
						only promoting entrepreneurship but also enabling them to validate their ideas and proceed
						ahead. We are creating this platform with a go-giver attitude.
					</div>

					<div className='aboutus-bold'>
						Money follows passion. Not the other way round. Pitch decks are made after validated ideas. Not
						the other way round
					</div>
					<div className='aboutus'>
						There is a huge difference between start-ups and small businesses. If you’re looking for the
						later one, go on pursue it. But if you’re looking for a start-up, it simply means growth. That’s
						what triggers investors to put their money in. When you’re aiming for a 100% growth with a
						validated concept, why won’t someone invest in you? Compare it with the 10-20% return of mutual
						funds, people will die for investing in your start-up. When you’re able to validate your idea
						and launch a product that your customers actually need, we help you create an investor pitch.
					</div>
					<div className='aboutus-bold'>Investment is just the beginning of a long journey</div>
					<div className='aboutus'>
						We’ll help you throughout your start-up journey, from recruiting your first set of employees to
						marketing your final product. More than just a company, you’ll build a network of experts, who
						can help you to building your business.
					</div>
					<div className='aboutus'>
						Again, it is never about the idea. It is all about the execution, validation, iteration,
						persistence and not to mention belief, that transform something worth a few thousand rupees to a
						billion-dollar business. Forget the money, it adds values to a million lives.{' '}
					</div>
				</div>
				<div className='center'>
					<a
						href='/signin'
						style={{ background: '#080808d9', margin: '1.5em', fontSize: '1.4em', fontWeight: '800' }}
						className='btn-small waves-effect waves-light'
					>
						Join us
					</a>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Aboutus;
