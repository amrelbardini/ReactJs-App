import React from 'react';

import qs from 'query-string'; // used to access the querystring part of the url and convert or parse it from location.search into an object that could be worked with!
class ProductDetails extends React.Component {
      handleSave=()=>{
         //call backend and save adjustments
         //redirect to shopping cart using programmatic navigation Push()=> saves location in history so back is available and Replace => going back is not an option
        //  this.props.history.push("/cart");
         this.props.history.replace("/cart");
      }
    render() {
        let productId=this.props.match.params.id;
        let targetProduct=this.props.products.filter(p=>p.id===parseInt(productId))[0];
        const res=qs.parse(this.props.location.search);
        console.log(res); 
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <h2 className="h5"> Product Details</h2>
                    <h6 className="text-capitalize">
                        name : {targetProduct.name}
                    </h6>
                    <h6 className="text-capitalize">
                        ID : {targetProduct.id}
                    </h6>
                    <h6 className="text-capitalize">
                        count : {targetProduct.count}
                    </h6>
                    <button onClick={this.handleSave} className="btn btn-warning" style={{color:"white"}}>Back</button>
                </div>    
           </React.Fragment>
        );
    }
}
 
export default ProductDetails ;

