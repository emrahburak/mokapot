import React,{Fragment} from 'react';
import {Container} from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';


//components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Home from './pages/Homepage';
import Login from './pages/Login';
import Join from './pages/Join';

const Root = ()=>(
	<Router>
	<>
	<Header/>
	 <hr />
	<Switch>
	<Route path="/" exact component={Home} />
	<Route path="/login" component={Login} />
	<Route path="/join" component={Join} />
	<Redirect to="/" />
	</Switch>
	</>
	</Router>
);

function App() {
  return (
    <div className="App">
	  <Container>
	  <Root/>
	  <Footer/>
	  </Container>

    </div>
  );
}

export default App;
