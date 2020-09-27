import React from 'react';

const Slider = () => {
	return (
		<div>
			<section className='fslider'>
				<div className='slider' style={{ height: '94vh' }}>
					<ul className='slides' style={{ backgroundColor: '#fff' }}>
						<li style={{ height: '94vh' }}>
							<img
								src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1596651501/Untitled-1_lw4pwu.jpg'
								alt=' one'
								className='mobile1'
							/>
							<img
								src='https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1596691317/Untitled-1_1_yobc0f.jpg'
								alt=' one'
								className='mobile'
							/>
							<div className="container">
								<div class="text-block">
									<p>Apply By 23th September</p>
								</div>
							</div>
							<div className="container">
								<div class="text-block1">
									<p>Apply By 23th September</p>
								</div>
							</div>
							<div className='caption slide-box center-align'>
								<a href='/whatwedo' className='btn-large waves-effect waves-light join-btn'>
									APPLY NOW
								</a>
							</div>
						</li>
						{/* <li style={{ height: "95vh" }}>
                            <img src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1596654042/marketgad_front_page_2_dtyy3e.jpg" alt=" two" className="mobile1" />
                            <img src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1596691313/Startup_yqpduz.jpg" alt=" two" className="mobile" />
                            <div className="caption slide-box center-align">
                                <a href="/whatwedo" className="btn-large waves-effect waves-light join-btn">Get Started</a>
                            </div>
                        </li>
                        <li style={{ height: "95vh" }}>
                            <img src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1596651502/what_we_do__MarketGad_s2mtdm.jpg" alt=" three" className="mobile1" />
                            <img src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1596691314/What_we_do_adhgmv.jpg" alt=" three" className="mobile" />
                            <div className="caption slide-box center-align">
                                <a href="/whatwedo" className="btn-large waves-effect waves-light join-btn">Get Started</a>
                            </div>
                        </li> */}
					</ul>
				</div>
			</section>
		</div>
	);
};

export default Slider;
