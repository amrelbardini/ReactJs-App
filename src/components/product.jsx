import React from 'react';



class Product extends React.Component {

        
    
    getClasses() {
        return this.props.product.count===0?
        "badge  bg-warning m-2":
        "badge  bg-primary m-2";
    }
 
    render() {
  
       
        return (
            <React.Fragment>
                {this.props.product.count===0 && <h6 className="lead m-2" style={{fontWeight:"bold"}}>No products at the moment</h6>}
                    <div className="row">
                          <div className="col-2">
                             <span className="custom-color m-2" >{this.props.product.name}</span>
                          </div>
                          <div className="col">
                            <span className={this.getClasses()}>{this.props.product.count}</span>
                            <button onClick={()=>{this.props.onIncrement(this.props.product)}} className="btn btn-success btn-sm">+</button>
                            <span onClick={()=>{this.props.onDelete(this.props.product)}} className="btn btn-danger m-2 btn-sm"> 
                                <i className="fas fa-trash"></i>
                            </span>
                          </div>
                    </div>                           
            </React.Fragment>
        );
    }
}
 
export default Product;