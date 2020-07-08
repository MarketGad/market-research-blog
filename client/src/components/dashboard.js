import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="head-text">
                    <h3 className="center">Welcome Ajitesh!</h3>
                </div>
                <div className="row container">
                    <div className="col s12 l8 dash-col">
                        <div className="dash-content dash-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatum adipisci animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolorum! laborum veniam delectus necessitatibus provident pariatur sequi odio! Repellat itaque vero explicabo. Quos odit quas accusamus qui quaerat delectus ut voluptatum velit sunt!
                        </div>
                        <div className="dash-button center"> <button className="center">
                            Submit Idea
                        </button>
                        </div>
                    </div>
                    <div className="col s12 l4 dash-col">
                        <div className="dash-content">
                            Lorem, ipsum dolor assumenda distinctio minus aliquid fugiat, temporibus adipisci enim, tenetur consequatur! Quos, ratione at. Non, commodi?
                        </div>
                        <div className="dash-button center"> <button className="center">
                            Fill 1 to get Researcher
                        </button>
                        </div>
                    </div>
                </div>
                <div className="row container">
                    <div className="col s12 l4 dash-col">
                        <div className="dash-content dash-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. imkalresd recusandae molestias quidem Lorem, ipsum. ipsum sed. Amet cumque mask voluptatem deleniti eos nam quos quas.
                        </div>
                        <div className="dash-button center"> <button className="center">
                            Problem Statement
                        </button>
                        </div>
                    </div>
                    <div className="col s12 l8 dash-col">
                        <div className="dash-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum voluptates, facilis sint esse porro in aut, laborum minima dignissimos voluptatum optio possimus aliquid quasi officia dolorum, itaque dolore. Omnis distinctio quis ratione tempora ab. Quos odio nostrum modi odit, deserunt, recusandae dicta esse quibusdam quis error hic corrupti. Quam?
                        </div>
                        <div className="dash-button center"> <button className="center">
                            Solution
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;