import React from "react";
import Product from "./product";

class ShoppingCart extends React.Component {

    render() { 
        return (
            <React.Fragment>
                <h1>Shopping Cart</h1> 
                <button onClick={this.props.onReset} className="btn btn-secondary m-2">Reset</button>          
                     {this.props.products.map(product=>
                         <Product  key={product.id} product={product} onIncrement={this.props.onIncrement} onDelete={this.props.onDelete}/>
                     )}         
            </React.Fragment>
        );
    }
}
 
export default ShoppingCart;