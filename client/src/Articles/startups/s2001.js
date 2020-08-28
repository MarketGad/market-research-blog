import React from 'react';
import Footer from '../../Components/Footer';

const s1001 = () => {
    return (
        <div>
            <div className="container">
                <h3 className="article-head center">5G: Connecting Everything</h3>
                <div className="center article-content" style={{ textAlign: "center" }}>
                    Market Research by <b>Nitin</b> <br />
                </div>
                <p className="article-subhead">Introduction</p>
                <p className="article-content">We all know that 5G is coming in networking & everything will be change. But
                what exactly 5G is? 5G was first introduce by South Korea on 1st Dec 2018 &
                this is really a huge achievement since first cell phone was introduce in 1973.
                The journey of this wireless network from 1G-5G was really amazing. Many
                changes had been taken to get ease in communication. Now let’s understand
                        how we can able to achieve this stage from starting.</p>
                <p className="article-content">“G” represent Generation of mobile network. The first generation
                of mobile i.e. 1G was launch by Nippon Telegraph & Telephone (NTT) in 1979
                in Tokyo. Later up to 1984 NTT spread out 1G to cover whole Japan. Then later
                US, Canada, UK start rolled out their own 1G network in few years. 1G network
                had some drawbacks like coverage was poor, no roaming support between
                different operator, low sound quality & most poor thing was call were not
encrypted so anyone could drop in call using radio scanner.</p>
                <p className="article-content">Then 2G i.e. second generation of network was launch to overcome
                drawbacks of 1G & it was launch in Finland in 1991 under GSM standards. In
                this calls were encrypted & voice calls become clear. But the amazing thing is
                that for the first time people able to send text messages (SMS), picture
                messages, multimedia messages (MMS) by their phone. This was adopt by
                many consumers & businesses over large scale. The problem with 2G network
                was speed. Initially it was around 9.6kbit/s so that operator have to build some
                mobile cell towers. At the end of the second generation 40kbit/s were
archived.</p>
                <p className="article-content">Then 3G network was launch in 2001 by NTT DoCoMo. In this generation
                user could access data from any location in world as data packets. This made

                roaming services possible foe first time. Due to 3G the data transfer
                capabilities is increased 4 times of the 2G. Video streaming and voice, Video
conferencing becomes possible.</p>
                <p className="article-content">4G was launch in Sweden, Oslo, Norway, and Stockholm as (LTE) Long
                Term Evolution 4G Standard. Due to 4G fast mobile web access which is up to 1
                gigabit per second for stationary users. Using this HD videos, HD video
                conferencing & gaming services become possible. Now 4G is standard around
                the globe. 4G is 10 times faster than 3G, it have high bandwidth & extremely
high voice quality.</p>
                <p className="article-content">Now 5G is newest generation after 1G, 2G, 3G and 4G. The best part
                about 5G is that it can be able to connect virtually to everyone together like
                devices, machines, objects. 5G gives high data speeds, more network capacity
                than 4G and more reliable, higher performance. 5G is also affecting global
                economy. $13.2 trillion dollars of global economic output, 22.3 million new
                jobs are created & $2.1 trillion dollars in GDP growth. 5G can be used in three
                type of services including Enhanced Mobile Broadband, Mission-critical
Communication and Massive IoT. 5G has been used in 35+ countries</p>
                <div className="center img-container">
                    {/* use accordingly */}
                    {/* <img src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="i101" /> */}
                    {/* <img src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="i101" /> */}
                    <img className="article-img" height="500px" src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="i101" />
                    <p className="article-img-desc">Lorem ipsum dolor sit amet</p>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default s1001;
