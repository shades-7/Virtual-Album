import React, {Component} from 'react';
import classes from './signin.module.css'

class Signin extends Component {
    render(){
        return(
            <div className = {classes.try}>
            <div className={classes.align}>
            <div className = {classes.child1}>
               <div className = {classes.formbox}>
               <form className={classes.form}>
               <div className={classes.logo}>LOGO</div>
               {/* EMAIL */}
               <div className={classes.email}>
               <div className={classes.emailicon}><b>@</b></div>
               <div className={classes.label}>
               <input type="email" placeholder="E-mail" className={classes.emailinput}/>
               </div>
               </div>
               {/* PASSWORD */}
               <div className={classes.email}>
               <div className={classes.emailicon}><b>*</b></div>
               <div className={classes.label}>
               <input type="password" placeholder="Password" className={classes.emailinput}/>
               </div>
               </div>
               {/* LOGIN */}
               <div className={classes.loginButton}>
               <label>LogIn</label>
               </div>
               {/* SIGNIN */}
               <div>
               <button className={classes.signIn}>SignIn</button>
               </div>
               </form>
               <div className={classes.google}>
               <p>Or</p>
                   <p>SignIn with google</p>
               </div>
               </div>
               
            </div>
            {/* PHOTOBOX */}
            <div className ={classes.child2}>
            <div className ={classes.photobox}>
            <div className ={classes.boxhor1}>
            <div className={classes.box1}></div>
            <div className={classes.box1}></div>
            <div className={classes.box1}></div>
            </div>
            <div className ={classes.boxhor1}>
            <div className={classes.box1}></div>
            <div className={classes.box1}></div>
            <div className={classes.box1}></div>
            </div>
            <div className ={classes.boxhor1}>
            <div className={classes.box1}></div>
            <div className={classes.box1}></div>
            <div className={classes.box1}></div>
            </div>
            </div>
            </div>
            </div>
           
            </div>
    
            )
        }
}

export default Signin;