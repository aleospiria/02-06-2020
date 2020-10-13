import React from 'react';
import Header from './Header';
import Footer from './Footer';


function Layout(props) {
    return(
        <>

        <Header 
              companyName="ADLTP"
              navBar={[
                {
                  name: "Facebook",
                  url: "http://facebook.com",
                },
                {
                  name: "Twitter",
                  url: "http://twitter.com",
                },
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/elcossioooo/?hl=es-la",
                },
                {
                  name: "Youtube",
                  url: "https://www.youtube.com/channel/UCugoifEZzVuxq7sKgMvyaNQ",
                },
              ]}
              />
              {props.children}
        <Footer />

        </>
    )
}

export default Layout