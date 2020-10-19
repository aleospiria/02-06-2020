import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Pages/home';
import Login from '../Pages/Login';
import Pricing from "../Pages/Pricing";
import NotFound from "../Pages/NotFound";
import Layout from "../Components/Layout";
import Signin from "../Pages/Signin";
import Password from "../Pages/Password";
import levels from "../Pages/levels";
import Temas from "../Pages/Temas";
import Ranking from "../Pages/Ranking";
import Perfil from "../Pages/Perfil";
import Configuracion from "../Pages/Configuracion";
import Logros from "../Pages/Logros";
import Contact from "../Pages/Contactanos";
import Bienvenido from "../Pages/Bienvenido";
import Clases from "../Pages/Clases";
import Docentes from "../Pages/Docentes";
import Crear from "../Pages/Crear";

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
            <Route exact path="/levels" component={levels} />
            <Route exact path="/Temas" component={Temas} />
            <Route exact path="/Ranking" component={Ranking} />
            <Route exact path="/Perfil" component={Perfil} />
            <Route exact path="/Config" component={Configuracion} />
            <Route exact path="/Logros" component={Logros} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Welcome" component={Bienvenido} />
            <Route exact path="/Clases" component={Clases} />
            <Route exact path="/Docente" component={Docentes} />
            <Route exact path="/Crear" component={Crear} />
            <Route component ={NotFound} />
             </Switch>
            </Layout>
            </BrowserRouter>

        );    
    }
}

export default App;