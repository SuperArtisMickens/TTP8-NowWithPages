import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import { compose, spacing, palette } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


//other imports

class Poll extends React.Component {

    //other member functions and variables can go here

    render() {
        //JS code goes here
        // but not all of your code
        //const classes = useStyles();
        //const  = (event) => event.();

       



        const name = 'Kris Mickens';


        return (
            //JSX HTML goes here
            <>
        
                   
                <p>Who is your FAVORITE Bank President?</p>


                <div>
      <Radio
        
        
        value="a"
        name="radio-button-demo"
        onchange=""
        inputProps={{ 'aria-label': 'A' }}
      /> Yau Ho
      <Radio
        
        
        value="b"
        name="radio-button-demo"
        onchange=""
        inputProps={{ 'aria-label': 'B' }}
      />Henji
      
      <Radio
        
        
        value="d"
        name="radio-button-demo"
        onchange=""
        inputProps={{ 'aria-label': 'D' }}
      />Deon
      <Radio
        
        
        value="e"
        name="radio-button-demo"
        onchange=""
        inputProps={{ 'aria-label': 'E' }}
      /> Kris
    </div>



                   
                

            </>
        )
    }

}

export default Poll
