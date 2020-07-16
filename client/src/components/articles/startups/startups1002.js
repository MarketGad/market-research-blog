import React from 'react';
import Footer from '../../Footer'

const s1002 = () => {
    return (
        <div>
            <div className="container">
                <h3 className="article-head center">Zoom App: Modern way of communications</h3>
                <div className="center article-content" style={{ textAlign: "right" }}>
                    Auther:Nikhil <br />
                    
                </div>
                <p className="article-subhead">Introduction</p>
                    <p className="article-content"> The most important thing for human civilization is communications. From the
                        Stone Age to the modern world the one thing which plays a main important
                        role is communications. We humans tend to be a social creatures & because of
                        communications we were able to achieve many great things. Now in this
                        modern world the new way of communication is Digital or online platform.
                        There are variety of applications & software in the market which are
                        completing this need of society & if you search about it then you will find Zoom
                        App at the top position.</p>
                    <p className="article-content">Zoom is founded by Eric Yuan in
                            2011 & launch it in 2013. Eric Yuan
                            was born in China (Tai’An City).He
                            have master’s degree in engineering.
                            When he was 27 years old he came to
                            us. His visa was rejected 8 times
                            before he gets settle in US. In 1997 he
                            stared to work as engineer in WebEx
                            which later on taken by Cisco. In
                            between this years he acquire higher
                            rank in company but still he wanted to
                            bring something new & this is how he
                            started his own company in San Jones,
                            California. Many of his co-workers said to him you don’t have to enter in this
                            market which is completely filled with other competitors but still he follows his
                            dream to provide better & fun loving platform for user. Now Zoom is one of

                            the biggest platform for Audio & Video communications service provider. </p>
                        <p className="article-content"> So basically Zoom is cloud based video conferencing service by
Audio/Video. It is a platform where two more people can connect with each
other virtually. It create an environment like it feels real conversation for user.
Over half of fortune 500 companies used Zoom in 2019. Many small medium
or large size of teams prefers Zoom nowadays. During this Covid 19 situation
where employees have to do work from home, Zoom is the best platform for
their convenience.</p>
                    <p className="article-content">There are many features of this Zoom which are user friendly & efficient to
use. If you use Zoom then you will come across the term Zoom meeting &
Zoom Room. Zoom meeting is basically a video conference meeting hosted by
zoom using webcams & phone. Zoom room is basically physical hardware
setup which enables companies to schedules their meetings from their
conferencing room. In one to one meeting host can take unlimited meetings
with free plan. In group video conference about 500 participant takes part. In
free plan in about 100 participant can take part & meeting duration is limited
for 40 Minutes. Screen sharing option is also available for one to one or large
group by sharing our screen with them. </p>
                    <p className="article-content">User growth of Zoom is increasing day by day & specially in this Covid 19
Situation. In 2013 just after launch of Zoom it has a million daily user. In Dec
2019 it has 10 Million daily user. But due to Covid 19 demand of Zoom increase
by work from home system, so in March 2020 zoom has 200 Million + daily
user & in April 2020 zoom have 300+ million user. Zoom daily downloads also
increases rapidly. In Jan 2020 zoom daily download was 56,000 then in Feb
2020 it was about 1.7 million & in March 2020 it had 2013 million downloads
per day. </p>
                    <p className="article-content">There are many other platforms which provide same services which are
competitors for zoom. There are many examples of competitors like Cisco
WebEx, Google, Microsoft, Team viewer, 247 Meeting, Blue Jeans, Adobe, and

Avaya. </p>
                <div className="center img-container">
                    {/* use accordingly */}
                    {/* <img src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="i101" /> */}
                    {/* <img src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="i101" /> */}
                    <img className="article-img" height="500px" src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="i101" />
                    <p className="article-img-desc">Lorem ipsum dolor sit amet</p>
                </div>
                <p className="article-subhead">Business Models available for users are as follows</p>
                <ol className="article-content">
                    <li><strong>Zoom Free:</strong> - This is totally free for user. User can hold unlimited
                            meetings. This features don’t have recording option & duration of
                            meeting is limited for 40 Minutes.</li>
                    <li><strong>Zoom Pro:</strong> - It comes with price $14.99/£11.99 per month. In this
feature we can record meeting in cloud or device. The duration of
meeting is up to 24 hours.</li>
                    <li><strong>Zoom business:</strong> - It come up with price tag of $19.99/£15.99 per month.
Meeting host (10 minimum) It have brand zoom meeting with vanity
URLS & company branding offers transcripts of zoom meeting recorded
including customer support.</li>
                    <li><strong>Zoom Enterprise:</strong> - $19.99/£15.99 per month. Meeting host (100
minimum) it offers business with +1000 employees, unlimited cloud
storage recording, Custom success manager, discounts on webinars and
zooms.</li>
                    <li><strong>Zoom room:</strong> - 30 day free trial then it will cost $49/£39 per month and
for webinar it cost up to $40/£32 per month and host.</li>
                </ol>
            
            </div>
            <Footer />
        </div>
    )
}

export default s1002;