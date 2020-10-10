import React from 'react'
import ReactGa from 'react-ga';
import { ConfigureStore } from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import Main from './Main'

const store = ConfigureStore();
class App extends React.Component{
	
	render(){
		ReactGa.initialize('UA-176059135-1');
		ReactGa.pageview(window.location.pathname + window.location.search);
		return(
            <Provider store={store}>
                <BrowserRouter>
			        <Main/>
                </BrowserRouter>
            </Provider>
		)
	}
}

export default App;