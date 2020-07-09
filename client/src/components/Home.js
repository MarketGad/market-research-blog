import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Slider from './Slider';
import Subscribe from './Subscribe';
import Newpost from './Newpost';
import Footer from './Footer';
import Review from './Review';
import Offerings from './Offerings';
import FeaturedResearch from './FeaturedResearch';

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(res => {
                console.log(res);
                this.setState({
                    posts: res.data.slice(0, 10)
                });
            })
    }
    render() {
        const { posts } = this.state
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <div className="row">
                                <div className="col s3">
                                    <img class="responsive-img" src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                                </div>
                                <div className="col s9">
                                    <Link to={'/' + post.id}>
                                        <span className="card-title red-text">{post.title}</span>
                                    </Link>
                                    <p>{post.body}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">Loading...</div>
            );

        return (
            <div>
                <Slider />
                <div className="tagline center">
                    <h4 className="seo-tag1">Each one of us will have a billion-dollar idea at some point</h4>
                    <h4 className="seo-tag2">The difference is: Will you do something about it?</h4>
                </div>
                <Newpost />
                <Review />
                <Offerings />
                {/* <div className="container">
                    {postList}
                </div> */}
                <FeaturedResearch />
                <Subscribe />
                <Footer />
            </div>
        )
    }
}

export default Home