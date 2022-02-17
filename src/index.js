import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Header from './header';
import Footer from './footer';
import Calendario from './calendario';
import  Api from './api';
import Noticias from './noticias';
import Contato from './contato';
import Pp from './pp';
import Ufrn from './ufrn';

ReactDOM.render(
   <Router>
     <Header/>
    <Switch>
      <Route exact path="/calendario" component={Calendario}/>
      <Route exact path="/api" component={Api}/>
      <Route exact path="/noticias" component={Noticias }/>
      <Route exact path="/contato" component={Contato}/>
      <Route exact path="/pp" component={Pp}/>
      <Route exact path="/ufrn" component={Ufrn}/>
    </Switch>
    <Footer/>
  </Router>,
  document.getElementById('root')
);


