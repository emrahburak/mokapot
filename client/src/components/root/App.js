import {Fragment} from 'react';
import {Container} from 'reactstrap';
import Navi from '../navi/Navi';
import Home from '../pages/Home';
import Login from '../pages/account/Login';
import Join from '../pages/account/Join';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

const Root = ()=>(
	<Router>
	<>
	<Navi/>
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
	  </Container>

    </div>
  );
}

export default App;
