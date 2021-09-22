import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Navbar from './navbar';
import ShoppingCart from './shoppingCart';
import About from './about';
import Home from './home';
import ContactUs from './contactus';
import ProductDetails from './productDetails';
import Notfound from './notfound';
import Menu from './menu';
import Login from './login';
import Footer from './footer';




class App extends React.Component {

    state={
        products:[
            {id:1,name:"burger",isInCart:false,count:1,price:"15 $"},
            {id:2,name:"hotdog",isInCart:false,count:1,price:"15 $"},
            {id:3,name:"fries",isInCart:false,count:1,price:"10 $"},
            {id:4,name:"Medium Burger",isInCart:false,count:1,price:"30 $"},
            {id:5,name:"Large Burger",isInCart:false,count:1,price:"35 $"},
            {id:6,name:"Cola",isInCart:false,count:1,price:"5  $"},
            {id:7,name:"Lemon Juice",isInCart:false,count:1,price:"5  $"},
            {id:8,name:"Orange Juice",isInCart:false,count:1,price:"5  $"},
            {id:9,name:"large fries",isInCart:false,count:1,price:"15  $"},
        ],
        NavState:false,
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
    handleInCartChange=(product)=>{
       //clone
       const newProducts=this.state.products;
       const indexP=newProducts.indexOf(product);
       newProducts[indexP].isInCart=!newProducts[indexP].isInCart;
       //edit
       this.setState({products:newProducts});
       //setstate  
 
    }
    handleNavbar=()=>{
        //clone 
         const state=this.state;
           //edit 
         state.NavState?state.NavState=false:state.NavState=true;
         //setState
         console.log(state.NavState);
         this.setState({state});
    }
  
    render() { 
        return (
        <React.Fragment>
            <Navbar NavState={this.state.NavState}  handleNavbar={this.handleNavbar} productsCount={this.state.products.filter(p=>p.count>0).length}/>
                    <main>
                        <Switch> 
                            <Route path="/about" component={About}/>
                            <Route path="/products/:id" render={(props)=>{
                                return(<ProductDetails {...props} products={this.state.products}/>)}}/>
                            <Route path="/" exact component={Home}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/contact" component={ContactUs}/>
                            <Route path="/cart"  render={(props)=>{ 
                                return ( // sending in the props history-match-location as an argument and injecting it through the component for further use
                                <ShoppingCart 
                                    {...props}
                                    products={this.state.products}
                                    onReset={this.handleReset} 
                                    onDelete={this.handleInCartChange} 
                                    onIncrement={this.handleIncrement}
                                 />)}}/>
                            <Route path="/notfound" component={Notfound}/>
                            <Route path="/menu"  render={(props)=>{
                                return(
                                    <Menu 
                                        {...props}
                                        handleInCartChange={this.handleInCartChange} 
                                        products={this.state.products}/>)}}
                                    />
                            <Redirect from="/home" to="/"/>
                            <Redirect to="/notfound"/>
                        </Switch>  
                    </main>
                    <Footer/> 
        </React.Fragment>
        );
    }
}
 
export default App;