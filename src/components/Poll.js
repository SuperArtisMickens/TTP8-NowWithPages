import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';


//other imports

class Poll extends React.Component {

	//other member functions and variables can go here

	handlechange(event) {
		console.log(event.target);
		event.target.checked=true;
		//event.target.color=green;
	  };

	render() {
		//JS code goes here
		// but not all of your code
		//const classes = useStyles();
		//const  = (event) => event.();

		return (
			//JSX HTML goes here
			<>
				<p>Who is your FAVORITE Bank President?</p>
				<div>
					<Radio 
						checked={false}
						color={green[600]}
						value="Yao Ho"
						name="radio-button-demo"
						onChange={this.handlechange}
						inputProps={{ 'aria-label': 'A' }}
					/> Yau Ho
					  <Radio 
						checked={false}  
						color={green[600]}
						value="Henji"
						name="radio-button-demo"
						onChange={this.handlechange}
						inputProps={{ 'aria-label': 'B' }}
					/>Henji
					  <Radio 
						checked={false}  
						color={green[600]}
						value="Deon"
						name="radio-button-demo"
						onChange={this.handlechange}
						inputProps={{ 'aria-label': 'D' }}
					/>Deon
					  <Radio 
						checked={false}  
						color={green[600]}
						value="Kris"
						name="radio-button-demo"
						onChange={this.handlechange}
						inputProps={{ 'aria-label': 'E' }}
					/> Kris
    			</div>
		</>
		)
	}
}

export default Poll
