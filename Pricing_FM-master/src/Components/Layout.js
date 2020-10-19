import React from 'react';
import Header from './Header';
import Footer from './Footer';




function Layout(props) {
    return(
        <>
        
        <Header
        
        
              
              navBar={[
                
              ]}
              />
              {props.children}
        <Footer />
        </>
    )
}

export default Layout