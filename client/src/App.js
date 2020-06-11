import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiresponse: "" }
  }
  callAPI() {
    fetch("http://localhost:5000/test")
      .then(res => res.text())
      .then(res => this.setState({ apiresponse: res }))
  }
  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="App">
        <h1>Frontend</h1>
        <p>{this.state.apiresponse}</p>
      </div>
    );
  }
}
export default App;
