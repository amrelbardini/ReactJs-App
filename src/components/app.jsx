import React from 'react';
import Navbar from './navbar';
import ShoppingCart from './shoppingCart';

class App extends React.Component {

    state={
        products:[
            {id:1,name:"burger",isInCart:false,count:2},
            {id:2,name:"hotdog",isInCart:false,count:4},
            {id:3,name:"fries",isInCart:false,count:1}
        ],
    }
    getClasses(){
        const classes= this.state.count===0?
        "badge  bg-warning m-2":
        "badge  bg-primary m-2";
        return classes;
    }
      //handleIncrement
      handleIncrement=(product)=>{
       //clone
       let products=[...this.state.products];
       let index= products.indexOf(product);
        product=products[index];
         //edit
        product.count++;    
        //setState
       this.setState({products})
  
      }

    //handleDelete func passed as a prop to the component with a ref to this func to be used in product component (Raising an EVENT)
    handleDelete=(product)=>{
        //clone
        //edit 
        const newProducts=this.state.products.filter(p=>p.id!==product.id);
        // //setState
        this.setState({products:newProducts});
    }
    //handleReset reset all count for all products to 0 
    handleReset=()=>{
        //clone
         let products=this.state.products;
        //edit
        products.map((p)=>{
            p.count=0 
            return p;});
        //setState
        this.setState({products});
    }



    render() { 
        return (
        <React.Fragment>
            <Navbar  productsCount={this.state.products.filter(p=>p.count>0).length}/>
                <main className="custom-background " >
                   <div className="container ">
                    <ShoppingCart  products={[...this.state.products]}
                        onReset={this.handleReset} 
                        onDelete={this.handleDelete} 
                        onIncrement={this.handleIncrement} 
                        />
                   </div>
                </main>
        </React.Fragment>
        );
    }
}
 
export default App;