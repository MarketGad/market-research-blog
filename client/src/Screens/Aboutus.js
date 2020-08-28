import React from 'react';
import Footer from '../Components/Footer';

const Aboutus = () => {
	return (
		<div>
			<div>
				<div className='container' style={{ fontFamily: 'GlacialIndifferenceMedium' }}>
					<h3 className='article-head center' style={{ fontWeight: '600', letterSpacing: '0.04em' }}>
						About Us
					</h3>
					<br />
					<p className='aboutus'>
						Google wasn’t the first search engine in the world. It was the 9th to come. Imagine if Larry
						Page had given up on his dreams considering this fact, we could have never got something that
						made our lives so convenient.
					</p>
					<p className='article-subhead'>
						MarketGad believes in executing billion-dollar ideas. Tinkering is the earliest stage for a
						grassroot level start-up. It channelizes the way forward while the entrepreneurs are getting
						started
					</p>
					<div className='center'>
						<a
							href='/whatwedo'
							style={{
								background: '#080808d9',
								margin: '1em',
								fontSize: '1.3em',
								fontWeight: '600',
								letterSpacing: '0.1em'
							}}
							className='btn waves-effect waves-light'
						>
							Join us
						</a>
					</div>
					<p className=' aboutus'>
						We help in data-driven decision making for the people who are ambitious enough to dream big. You
						just need an idea to pitch us. We’ll pave the path for you to take your idea and form a company
						and go beyond your imaginations. At MarketGad, our goal is to get you through the first phase.
						This usually means: get you to the point where you’ve built something impressive enough to raise
						money on a larger scale. Then we can introduce you to early-stage investors for angel funding.
						Some companies may need no more than just a bit of consulting to carry forward their ideas.
						Others will go through several rounds. There is no right answer; how much effort you need to put
						depends on the kind of company you want to start.
					</p>

					<p className='article-subhead '>
						59% of start-ups fail because they create something that isn’t required at the first place. We
						validate your ideas and products with market research
					</p>
					<p className='aboutus'>
						As per our primary research, 59% of start-ups fail due to lack of market analysis. We are a
						group of people at MarketGad, from various technology and business backgrounds, taking an
						initiative to transform the start-up ecosystem of India by de-risking entrepreneurship. On our
						mission, we are building a platform where the aspiring entrepreneurs can meet enthusiastic
						researchers, who can help them understand and prepare strategies for the venture plan
						accordingly. We believe in creating a dent in the current unemployment scenario of India by not
						only promoting entrepreneurship but also enabling them to validate their ideas and proceed
						ahead. We are creating this platform with a go-giver attitude.
					</p>
					<p className='article-subhead'>
						Money follows passion. Not the other way round. Pitch decks are made after validated ideas. Not
						the other way round
					</p>
					<p className=' aboutus'>
						There is a huge difference between start-ups and small businesses. If you’re looking for the
						later one, go on pursue it. But if you’re looking for a start-up, it simply means growth. That’s
						what triggers investors to put their money in. When you’re aiming for a 100% growth with a
						validated concept, why won’t someone invest in you? Compare it with the 10-20% return of mutual
						funds, people will die for investing in your start-up. When you’re able to validate your idea
						and launch a product that your customers actually need, we help you create an investor pitch.
					</p>
					<p className='article-subhead'>Investment is just the beginning of a long journey</p>
					<p className=' aboutus'>
						We’ll help you throughout your start-up journey, from recruiting your first set of employees to
						marketing your final product. More than just a company, you’ll build a network of experts, who
						can help you to building your business.
					</p>
					<p className=' aboutus'>
						Again, it is never about the idea. It is all about the execution, validation, iteration,
						persistence and not to mention belief, that transform something worth a few thousand rupees to a
						billion-dollar business. Forget the money, it adds values to a million lives.{' '}
					</p>
				</div>
				<div className='center'>
					<a
						href='/whatwedo'
						style={{ background: '#080808d9', margin: '1.5em', fontSize: '1.4em', fontWeight: '500' }}
						className='btn waves-effect waves-light'
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
