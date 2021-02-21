import react,{Fragment} from 'react';
import PostList from '../post/PostList';
import { Row,Col} from 'reactstrap';

export default class Home extends react.Component{
    render(){
	return(
	<>
		<Row>
		<Col xs="12">
		<p>Home </p>
		<PostList/>
		</Col>

	       </Row>

	    </>



	)
    }

}
