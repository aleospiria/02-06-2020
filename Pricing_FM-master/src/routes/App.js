import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Pages/home';
import Login from '../Pages/Login';
import Pricing from "../Pages/Pricing";
import NotFound from "../Pages/NotFound";
import Layout from "../Components/Layout";
import Signin from "../Pages/Signin";
import Password from "../Pages/Password";
import Layout2 from "../Components/Layout2";
import HomeApp from "../Pages/HomeApp";

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
            <Route exact path="/password" component={Password} />
            <Route component ={NotFound} />
             </Switch>
            </Layout>
            <Layout2>
                    <Route exact path="/homeapp" component={HomeApp} />
            </Layout2>
            </BrowserRouter>

        );    
    }
}

export default App;