import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Pages/home';
import Login from '../Pages/Login';
import Pricing from "../Pages/Pricing";
import NotFound from "../Pages/NotFound";
import Layout from "../Components/Layout";
import Signin from "../Pages/Signin";

class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
            <Layout>

             <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/signin" component={Signin} />
            <Route component ={NotFound} />
             </Switch>
             </Layout>
            </BrowserRouter>
        );    
    }
}

export default App;