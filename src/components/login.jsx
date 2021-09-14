import React from 'react';
class Login extends React.Component {
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("submit");
    }
    render() { 
        return (// htmlFor is used instead of for
            <React.Fragment>
               <div className="d-flex justify-content-center">
                    <form className="form-container" onSubmit={this.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Email address</label> 
                                <input type="email" className="form-control" id="username" aria-describedby="emailHelp"/>
                                
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password"/>
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
               </div>
            </React.Fragment>
        );
    }
}
 
export default Login;