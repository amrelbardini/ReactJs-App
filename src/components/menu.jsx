import React from 'react';
import Cart from './cart';
class Menu extends React.Component {
    render() { 
        return (
            <React.Fragment>    
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Meals</th>
                            <th scope="col">Price</th>
                            <th scope="col">Add to Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(p=>
                            <tr key={p.id}>
                                <td style={{fontWeight:"400"}} className="text-capitalize">{p.id}</td>
                                <td style={{fontWeight:"400"}} className="text-capitalize">{p.name}</td>
                                <td style={{fontWeight:"400"}} className="text-capitalize">{p.price}</td>
                                <td style={{fontWeight:"400"}} className="text-capitalize"> 
                                    <Cart product={p} handleInCartChange={this.props.handleInCartChange}/>
                                </td>
                            </tr>)}                      
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default Menu;