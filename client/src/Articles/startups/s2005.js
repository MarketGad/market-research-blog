import React from 'react';
import Footer from '../../Components/Footer';

const s2005 = () => {
    return (
        <div>
            <div className="container">
                <h3 className="article-head center">BlockChain Application</h3>
                <div className="center article-content" style={{ textAlign: "center" }}>
                    Market Research by <b><a href="https://www.linkedin.com/in/harshal-verma">Harshal Verma</a></b> <br />
                </div>
                <p className="article-subhead">Introduction</p>
                <p className="article-content">Simply stated, Blockchain is a chain of blocks that contains information.
                This technique was originally introduced in 1991 by a group of
                researchers and the motive behind this was to timestamp digital
                documents so that it’s not possible to backdate them or to tamper with
                them. However, as a technology it came to light only when it was
                adapted by Satoshi Nakamoto in 2009 to create the digital crypto
currency Bitcoin.</p>

                <p className="article-content">A blockchain is a distributed ledger that is completely open to everyone.
                The transactions made are distributed and duplicated across the whole
                network of computer systems associated with that blockchain. They
                have an interesting property, once some data has been recorded or
created inside a blockchain, it becomes very difficult to change it.</p>
                <p className="article-subhead">Working Of A BlockChain</p>
                <p className="article-content">The basic component of a blockchain is a block.</p>

                <p className="article-content">Each block contains some data, the hash of the block and the hash of the
previous block.</p>
                <ol>
                    <li className="article-content"><strong>DATA-</strong>The data that is stored inside the block depends on the type of
blockchain.</li><br />
                    <li className="article-content"><strong>HASH-</strong>A hash is comparable to a fingerprint in the sense that it’s unique
to every block. It identifies a block and all of its contents and it’s always
unique. A hash is created at the same time as the creation of block,
changing something inside the block would cause the hash to change.
This property makes them very useful in case of detecting changes made

Data

Hash

Hash of previous
block

to the block. Once the hash of the block changes the identity of the
whole block changes.</li><br />
                    <li className="article-content"><strong>HASH OF THE PREVIOUS BLOCK-</strong>This effectively creates a chain
of block and it’s this technique that makes a block chain secure.
Changing anything in any block would change the hash of that block and
that would make all the other blocks invalid as they won’t store the same
hash as that of the previous block.</li><br />
                    <li className="article-content"><strong>PROOF-OF-WORK-</strong>It’s a mechanism that slows down the creation of
new blocks. In bitcoin’s case it takes about 10 minutes to calculate the
required proof of work and add a new block of chain. This property
make s it very hard to tamper with the blocks because if you tamper with
1 block, you’ll need to recalculate the proof of work for all the following
blocks.</li><br />
                    <li className="article-content"><strong>P2P NETWORK-</strong>Instead of using a central entity to manage the chain,
blockchains use a peer to peer network and anyone is allowed to join.
The decentralised database managed by multiple participants is known
as Distributed Ledger Technology (DLT).All the nodes in this network
create consensus. There is a mutual agreement as to which block is valid
and which isn’t.</li><br />
                </ol>
                <p className="article-content">To successfully tamper with a blockchain –</p>
                <ol>
                    <li className="article-content">One needs to tamper with all the blocks in the chain</li>
                    <li className="article-content">Redo the proof of work for each block and</li>
                    <li className="article-content">Take control of the P2P network.</li>
                </ol>
                <p className="article-content">This is almost impossible to achieve. Thus, blockchain becomes one of
the most reliable and secure medium for different sectors.</p>
                <p className="article-subhead">Potential Consumers Of Blockchain Startups</p>
                <ol>
                    <li className="article-content"><strong>CRYPTOCURRENCY-</strong>There are around 1600
cryptocurrencies in use till date. Blockchain allows direct
transaction between people without involving a third party like
banks. Startups Can look to explore this space as it has a lot of
scope.</li><br />
                    <li className="article-content"><strong>AUTOMOBILES-</strong>Odometer of a car can be tampered with
and the car can be made to look newer and thus making a
customer pay more. Regular odometers can be replaced with
smart odometers that can be connected to blockchain and
frequently record the car&#39;s mileage. When connected with IoT it
can also provide user with the overall health of the car and
updates about repairs and service.</li><br />
                    <li className="article-content"><strong>NOTARY-</strong>A Blockchain can be a smart replacement for a
notary.A timestamp can be created on a document and it won&#39;t
be tampered.</li><br />
                    <li className="article-content"><strong>DIGITAL VOTING-</strong>Blockchains can be used to cast and
store votes. This will allow transparency in the process as voting
count could be verified. There are still many challenges with
digital voting-MALWARE, DENIAL OF SERVICE ATTACKS</li><br />
                    <li className="article-content"><strong>SUPPLY CHAIN_</strong>Companies can manage and monitor risks
within the supply chain , ensure quality of delivered parts and
can use smart contracts to pay for supply chains in an
autonomous fashion.</li><br />
                    <li className="article-content"><strong>SMART CONTRACTS-</strong>These contracts are tiny programs
that are on the blockchain and perform actions when certain
conditions are met. They can allow people to secure their
personal data and allow others to use only when they approve it
with digital signatures.</li><br />
                    <li className="article-content"><strong>REAL ESTATE-</strong>Blockchain can process title deeds ,
facilitate transactions and even grant access to properties
through smart keys. Blockchain can streamline property sales
saving a lot of time.</li><br />
                    <li className="article-content"><strong>AIRLINES-</strong>Blockchain can be used to speed up customer
identification and processing. It could cut down the time spend
in queues and passport and visas could be stored on the ledger
itself.</li><br />
                </ol>
                <div className="center img-container">
                    {/* use accordingly */}
                    {/* <img src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="i101" /> */}
                    {/* <img src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="i101" /> */}
                    <img className="article-img" height="500px" src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1595780634/Articles%20Photos/Startup/Blockchain/blockchain_application_siciol.jpg" alt="i101" />
                </div>
                <p className="article-subhead">Blockchain In Supply Chain Management And Energy Distribution</p>
                <p className="article-content">Challenges faced in supply chain management are-</p>
                <ol>
                    <li className="article-content">Multiple separate players</li>
                    <li className="article-content">Lack of transparency</li>
                    <li className="article-content">Discrepancies in record</li>
                    <li className="article-content">Limited process visibility</li>
                    <li className="article-content">Globalization</li>
                </ol>
                <p className="article-content">There are several ways in which blockchain can solve the above
challenges in the supply chain. These are:</p>
                <ol>
                    <li className="article-content"><strong>Provenance tracking-</strong>Large organisations have complex supply
chains. This implies it’s harder for them to keep track of all of their
data efficiently. The lack of transparency can have a severe affect
on the organisations . In a blockchain-based supply chain
management, record keeping and provenance tracking is made
easier as product information is accessed by embedding sensors
and RFID tags.</li><br />
                    <li className="article-content"><strong>Cost reduction-</strong>Real-time tracking of a product in the supply
chain with the help of blockchain can reduce the overall cost of
logistics in a supply chain.</li><br />
                    <li className="article-content"><strong>Establishing trust-</strong>Developing trust in supply chains with a
considerable numbers of participants is a key factor in smooth
operations. For example, if a manufacturer shares its products with
suppliers, the manufacturer should be able to depend on that
supplier to follow factory safety standards.</li><br />
                    <li className="article-content"><strong>Preapproved transaction fees-</strong>The commission for the
transaction is deducted once the transaction is completed, upon the
involvement of a large number of third party organizations like
intermediary banks, which have been executing this transaction. In
case of blockchain, you know the fees beforehand.</li><br />
                </ol>

                <p className="article-subhead">Role Of Blockchain In Energy Sector</p>
                <p className="article-content">A potential application of blockchain is in wholesale autonomous trading
                processes. Wholesale energy market comprises of procedures that require
                the involvement of third-party entities such as brokers, trading agents, banks
                etc which results in current procedures being slow and time-consuming, as
                transactions need to be verified multiple times from initial to final
settlement.</p>

                <p className="article-content">Blockchain and smart contracts can allow a generating unit to directly
                develop trade relations with a consumer or an energy retail supplier through
autonomous trading agents taking the third party out of the picture.</p>

                <ol>
                    <li className="article-content"><strong>P2P ENERGY TRADING-</strong>This is a domain where blockchain-
enabled systems would be a great fit naturally, by allowing direct
energy trading between energy consumers (energy producers/ end-
consumers), who can use this approach to take control of their
generation and demand.</li><br />
                </ol>
                <p className="article-subhead">Role Of Blockchain For The Government</p>
                <p className="article-content">Blockchain technology can help in many ways.</p>
                <ol>
                    <li className="article-content">Blockchain technology can cut down the cost of verification, and
                    the cost of networking. The former relates to the ability to cheaply
                    verify the attributes of a transaction, while the latter helps in bootstrapping and operating a marketplace without the need for a
traditional intermediary.</li><br />
                    <li className="article-content">It will help in building trust with citizens due to blockchain’s
 immutability allowing the participants to see and verify the data.</li><br />
                    <li className="article-content">Blockchain can play a vital role in protecting citizen’s data.
                    Blockchain’s data structures can effectively increase network
                    security by reducing a single point of failure risk and thus making
it difficult to tamper or steal data.</li><br />
                </ol>
                <p className="article-subhead">Blockchain Experiments By Indian Companies</p>
                <div className="center img-container">
                    {/* use accordingly */}
                    {/* <img src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="i101" /> */}
                    {/* <img src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="i101" /> */}
                    <img className="article-img" height="500px" src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1595780633/Articles%20Photos/Startup/Blockchain/Block_chain_th106g.jpg" alt="i101" />
                </div>
                <p className="article-subhead">Challenges Faced By Blockchain In India</p>
                <ol>
                    <li className="article-content"><strong>CONSISTENCY AND AVAILABILITY-</strong>For distributed
data systems, a trade off exists between consistency and
availability. Blockchain gives up on consistency to be
available and partition tolerant.</li><br />
                    <li className="article-content"><strong>AWARNESS-</strong>Awareness about blockchain is very limited
and clouded by the disrepute of the cryptocurrency market.</li><br />
                    <li className="article-content">Adding to all this is the ban on cryptocurrency in India.
                    Indian blockchain startups raise their funds through ICO
                    (initial coin offering) rather than through the traditional
                    funding process. The ban on cryptocurrencies has had an
                    adverse effect on them, and now startups are moving
outside India to secure funding.</li><br />
                    <li className="article-content">Another challenge is in the integration of the current
                    technology with the blockchain during the early stages of
development.</li><br />
                </ol>
            </div>
            <Footer />
        </div>
    )
}

export default s2005;
