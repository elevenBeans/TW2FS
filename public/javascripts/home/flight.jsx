import {Component} from 'react';
import { Link, IndexLink} from 'react-router';

class Flight extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>Flight
      			<div><Link to="/">go back home</Link></div>
			</div>
		)
	}
}

export default Flight;