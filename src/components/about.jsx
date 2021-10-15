import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Company from './company';
import Team from './team';
import Career from './careers';
class About extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <div className="row row-reset">
                    <div className="col-1 sidebar">
                        <ul className="list-unstyled">
                            <li className="custom-list-props">
                                <Link  className="text-capitalize " to="/about/company">1-Company info</Link>
                            </li>
                            <li  className="custom-list-props" >
                                <Link className="text-capitalize " to="/about/team">2-our Team</Link>
                            </li>
                            <li  className="custom-list-props" >
                                <Link className="text-capitalize " to="/about/careers">3-Careers</Link>
                            </li>
                        </ul>
                    </div> 
                    <div className="col-10">
                        <div className="container">
                           <Switch>
                                <Route path="/about/company" component={Company}></Route>
                                <Route path="/about/team" component={Team}></Route>
                                <Route path="/about/careers" component={Career}></Route>
                           </Switch>
                        </div>
                    </div> 
                </div>

            </React.Fragment>
        );
    }
}
 
export default About;