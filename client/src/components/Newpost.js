import React from "react";

const Newpost = () => {
    return (
        <div className="newPost" style={{ backgroundColor: "black" }}>
            <div className="row">
                <div className="col s12 m6 l6 center">
                    <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                </div>
                <div className="col s12 m6 l6 center" style={{ marginTop: "20px" }}>
                    <h5 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos recusandae eligendi molestiae neque, reprehenderit praesentium odit minus dolore perspiciatis?</h5>
                    <button class="btn waves-effect waves-light" type="submit" name="action"><span className="addpost">Add post</span><i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newpost
