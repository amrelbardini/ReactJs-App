import React from "react";
import Product from "./product";


class ShoppingCart extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <h4 className="m-2">Shopping Cart</h4> 
                <button onClick={this.props.onReset} className="btn btn-secondary m-2">Reset</button>          
                     {this.props.products.filter(product=>product.isInCart===true)
                     .map(p=>(<Product key={p.id} product={p} onIncrement={this.props.onIncrement} onDelete={this.props.onDelete}/>))}                         
            </React.Fragment>
        );
    }
}
 
export default ShoppingCart;