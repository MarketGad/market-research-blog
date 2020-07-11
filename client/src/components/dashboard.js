import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="head-text">
                    <h3 className="center">Welcome Ajitesh!</h3>
                </div>
                <div className="center">
                    Gear up the process by discussing your idea with our experts and get ready for a massive lauch...
                </div>
                <div className="row">
                    <div className="col s12 l7 dash dash-col">
                        <div className="dash-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatum adipisci animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolorum! laborum veniam delectus necessitatibus provident pariatur sequi odio! Repellat itaque vero explicabo. Quos odit quas accusamus qui quaerat delectus ut voluptatum velit sunt!
                        </div>
                        <div className="dash-button center">
                            <a href="/form" style={{ background: "#2b2321c9", marginTop: "20px" }} className="btn waves-effect wave-light">Submit idea </a>
                        </div>
                    </div>
                    <div className="col s12 l4 dash dash-col">
                        <div className="dash-content">
                            Lorem, ipsum dolor assumenda distinctio minus aliquid fugiat, temporibus adipisci enim, tenetur consequatur! Quos, ratione at. Non, commodi?
                        </div>
                        <div className="dash-button center">
                            <a href="/form" style={{ background: "#2b2321c9", marginTop: "20px" }} className="btn waves-effect wave-light">Submit idea to get help </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4 dash dash-col">
                        <div className="dash-content dash-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. imkalresd . Amet cumque mask voluptatem deleniti eos nam quos quas.
                        </div>
                        <div className="dash-button center">
                            <a href="/form" style={{ background: "#2b2321c9", marginTop: "20px" }} className="btn waves-effect wave-light">Problem </a>
                        </div>
                    </div>
                    <div className="col s12 l7 dash dash-col">
                        <div className="dash-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. facilis sint esse porro in aut,  aliquid quasi officia dolorum, itaque dolore. Omnis distinctio quis ratione tempora ab. Quos odio nostrum modi odit, deserunt, recusandae dicta esse quibusdam quis error hic corrupti. Quam?
                        </div>
                        <div className="dash-button center">
                            <a href="/form" style={{ background: "#2b2321c9", marginTop: "20px" }} className="btn waves-effect wave-light">Solution </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;