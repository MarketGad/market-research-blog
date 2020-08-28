import React from 'react';
import Footer from '../Components/Footer'

const sample = () => {
    return (
        <div>
            <div className="container">
                <h3 className="article-head center">topic</h3>
                <p className="article-subhead">Introduction</p>
                <p className="article-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tenetur debitis ipsa quasi, ipsam voluptatum est odit delectus aliquam amet! Velit praesentium esse nobis ullam qui iusto quibusdam doloribus voluptates distinctio debitis! Deleniti necessitatibus illum quibusdam. Saepe nam recusandae mollitia doloribus iure, in commodi nobis repellendus error laudantium deleniti laboriosam expedita totam. Sapiente quo consequatur, quasi vero incidunt deserunt eligendi. Facere quam eius modi veritatis ea omnis a, laboriosam in praesentium dolores aperiam repudiandae, excepturi, perspiciatis nobis corrupti? Illum porro architecto delectus unde incidunt illo pariatur assumenda. Repudiandae, eius numquam impedit et magni ab sed ratione similique nam tempore voluptates tenetur esse, at explicabo autem doloremque optio modi possimus sunt, mollitia nostrum placeat voluptate facilis natus? Facere assumenda nihil eius repellat vel sed ipsa libero asperiores quidem accusantium, pariatur dignissimos magnam eos debitis tenetur recusandae dolores esse! Animi tenetur incidunt iure magnam praesentium vitae pariatur temporibus molestias explicabo maxime laborum, nam nihil enim, cupiditate odio quam sapiente. Tempore rem impedit laudantium praesentium autem quam, dignissimos explicabo quas saepe nemo quasi accusantium beatae placeat atque eum aliquam blanditiis deserunt soluta iste minus obcaecati non. Rem officiis ab facere sed facilis aspernatur nam sequi incidunt rerum quisquam cupiditate nesciunt harum impedit quas maxime, quis nemo soluta magnam eos eligendi culpa nostrum quod reiciendis! Nemo nihil corporis sit vel at animi veniam unde dolores. Explicabo qui sequi magnam ullam nemo dolor laboriosam minima minus officiis quisquam illo perferendis, nostrum ipsum expedita harum enim veritatis ipsam similique? Voluptates, a doloribus? Culpa nostrum numquam eaque quasi laudantium laborum enim voluptate tempora? Quia debitis minus nihil officiis veritatis fuga, excepturi maiores, incidunt rem unde expedita? Corrupti ipsum aut repudiandae saepe! Similique nulla modi pariatur, asperiores rem aperiam esse facilis vel dolorem, distinctio et provident iure? Quis, ab id ducimus ad ullam voluptatem minus consequatur non vel.</p>
                <div className="center img-container">
                    {/* use accordingly */}
                    {/* <img src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="i101" /> */}
                    {/* <img src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="i101" /> */}
                    <img className="article-img" height="500px" src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="i101" />
                    <p className="article-img-desc">Lorem ipsum dolor sit amet</p>
                </div>
                <p className="article-content">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tenetur debitis ipsa quasi, ipsam voluptatum est odit delectus aliquam amet! Velit
                    <a href="https://www.marketgad.com"> click here to go marketgad </a>
                    praesentium esse nobis ullam qui iusto quibusdam doloribus voluptates distinctio debitis! Deleniti necessitatibus illum quibusdam. Saepe nam recusandae mollitia doloribus iure, in commodi nobis repellendus error laudantium deleniti laboriosam expedita totam. Sapiente quo consequatur, quasi vero incidunt deserunt eligendi. Facere quam eius modi veritatis ea omnis a, laboriosam in praesentium dolores aperiam repudiandae, excepturi, perspiciatis nobis corrupti? Illum porro architecto delectus unde incidunt illo pariatur assumenda. Repudiandae, eius numquam impedit et magni ab sed ratione similique nam tempore voluptates tenetur esse, at explicabo autem doloremque optio modi possimus sunt, mollitia nostrum placeat voluptate facilis natus? Facere assumenda nihil eius repellat vel sed ipsa libero asperiores quidem accusantium, pariatur dignissimos magnam eos debitis tenetur recusandae dolores esse! Animi tenetur incidunt iure magnam praesentium vitae pariatur temporibus molestias explicabo maxime laborum, nam nihil enim, cupiditate odio quam sapiente. Tempore rem impedit laudantium praesentium autem quam, dignissimos explicabo quas saepe nemo quasi accusantium beatae placeat atque eum aliquam blanditiis deserunt soluta iste minus obcaecati non. Rem officiis ab facere sed facilis aspernatur nam sequi incidunt rerum quisquam cupiditate nesciunt harum impedit quas maxime, quis nemo soluta magnam eos eligendi culpa nostrum quod reiciendis! Nemo nihil corporis sit vel at animi veniam unde dolores. Explicabo qui sequi magnam ullam nemo dolor laboriosam minima minus officiis quisquam illo perferendis, nostrum ipsum expedita harum enim veritatis ipsam similique? Voluptates, a doloribus? Culpa nostrum numquam eaque quasi laudantium laborum enim voluptate tempora? Quia debitis minus nihil officiis veritatis fuga, excepturi maiores, incidunt rem unde expedita? Corrupti ipsum aut repudiandae saepe! Similique nulla modi pariatur, asperiores rem aperiam esse facilis vel dolorem, distinctio et provident iure? Quis, ab id ducimus ad ullam voluptatem minus consequatur non vel.
                </p>
                <ol className="article-content">
                    <li>lorem kmas</li>
                    <li>lorem kmas</li>
                    <li>lorem kmas</li>
                    <li>lorem kmas</li>
                </ol>
                <div className="center article-content" style={{ textAlign: "right" }}>
                    Auther <br />
                    Saidatta Sahu <br />
                    IIIT,Bhubaneswar
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default sample;