import React from 'react';
import { Row,Col} from 'reactstrap';
import Post from '../../components/Post';


const Home = props => {
    return(
	    <div>
	    <Row>
	    <Col xs="12">
	    <p>Home </p>
	    <Post/>
	    </Col>
	    </Row>
	    </div>
    )
}

export default Home;
