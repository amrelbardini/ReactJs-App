import React from 'react';


class Home extends React.Component {


    render() { 
      return(
          <React.Fragment>
               <div className="home container-fluid">
                     <div className="overlay"></div>
                     <div className="heading">
                         <h2 className="w-100">Welcome to Big ShaQ burgers</h2>
                         <div className="container ">
                             <p className="text-content">
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellendus iste, sunt similique placeat rerum, in sed nulla fuga sapiente ad, voluptates perspiciatis hic vitae est consequuntur earum adipisci quod.
                             </p>
                        </div>
                     </div>                    
               </div>
          </React.Fragment>
      );
    }
}
 
export default Home;