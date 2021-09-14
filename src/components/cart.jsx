import React from 'react';

const Cart = (props) => {
    let style={color:"#ccc",cursor:"pointer"};
     if(props.product.isInCart===true){
         style={color:"#333",cursor:"pointer"};
     }
        return (  
            <React.Fragment>
                <i onClick={()=>{props.handleInCartChange(props.product)}} style={style} className="fas fa-cart-plus"></i>
            </React.Fragment>
        );
}
 
export default Cart;


