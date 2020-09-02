import React, {Component} from 'react';
import classes from './photopage.module.css'

class photopage extends Component {
    render(){
        return(
        <div className={classes.container}>
        <div className={classes.navhor}></div>
        <div className={classes.hor}>
         <div className={classes.navver}></div>
         <div className={classes.align}></div>
         <div className={classes.picbox}></div>
        </div>
        
       
            
        </div>
        )
    }
}

export default photopage;