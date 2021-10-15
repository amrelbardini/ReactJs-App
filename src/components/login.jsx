import React from 'react';

import Joi, { errors }  from 'joi-browser';
class Login extends React.Component {

    state={
        username:"",
        password:"",
        errors:{
            username:"",
            password:"",
        }
    };
     schema={
         username:Joi.string().min(3).max(30).required(),
         password:Joi.string().required(),
      }
     validate=()=>{

    //Joi validate function takes 2 inputs, the first one is the state the 2nd one is the schema to compare and returns an error object
    // third option to cancel the abort early( return the first error only) false returns all errors
    //clone state 

    //   //manual validation example
    //    const errors={};
    //    if(this.state.username.trim()===""){
    //        errors.username="Username is required";
    //    }
    //    if(this.state.password.trim()===""){
    //        errors.password="Password is required";
    //    }
    //    //setstate 
    //    this.setState({errors});
    //    return Object.keys(errors).length===0? null:errors;
      const errors={};
      //clone state 
      let state={...this.state};
      //edit 
      delete state.errors;
      const res= Joi.validate(this.state,this.schema,{abortEarly:true}); 
       //setstate
      if(res.error===null){
           this.setState({errors:{}});
          return null;
      } 
      for(const error of res.error.details){
          errors[error.path]=error.message;
      }
     //Set State
     this.setState({ errors });
     return errors;
   }
    handleSubmit=(e)=>{
        e.preventDefault();
        // const username=this.username.current.value; refes are not recommended for getting the user input current value
        //validation function call
        const errors=this.validate();
        if(errors){
            //incase errors is not empty return without submitting
            console.log(errors);

          return;
        }
        console.log("submit")
    }
    handleChange=(e)=>{
        //clone 
        const state=this.state;
         //edit
        let currentTarget=e.target.name; // get target input name attribute value
        state[currentTarget]=e.currentTarget.value; //edit current input value to state
        this.setState({state}); //setState
    }
    render() { 
        return (// htmlFor is used instead of for
            <React.Fragment>
               <div className="d-flex justify-content-center">
                    <form className="form-container" onSubmit={this.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Email address</label> 
                                <input 
                                name='username'
                                onChange={this.handleChange} 
                                value={this.state.username}  type="email" 
                                className="form-control" id="username" /> 
                                  {/*conditional render */}
                                  { this.state.errors.username &&<h6 className="alert alert-danger error-msg">{this.state.errors.username}</h6>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input 
                                    name='password'
                                    onChange={this.handleChange} 
                                    value={this.state.password}
                                    type="password"
                                    className="form-control" 
                                    id="password"/>
                                     {/*conditional render */}
                                  { this.state.errors.password &&<h6 className="alert alert-danger error-msg">{this.state.errors.password}</h6>}
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
               </div>
            </React.Fragment>
        );
    }
}
 
export default Login;